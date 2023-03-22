import { useCountDown } from "hooks";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
// import { useRandomCode } from "services";
import CircularProgress from "./CircularProgress";

const ReactCodeInput = dynamic(() => import("react-code-input"));

const style: React.CSSProperties = {
  MozAppearance: "textfield",
  width: "100%",
  borderRadius: 12,
  fontSize: 16,
  height: "100%",
};

// const ReactCodeInputStyled = styled(ReactCodeInput)(() => ({
//   direction: "rtl",
//   display: "grid !important",
//   gridTemplateColumns: "repeat(5,1fr)",
//   gap: 10,
//   gridTemplateRows: 50,
//   height: 50,
//   "& input::-webkit-outer-spin-button,& input::-webkit-inner-spin-button": {
//     appearance: "none",
//     margin: 0,
//   },
//   input: {
//     textAlign: "center",
//     padding: 5,
//   },
// }));

interface Props {
  validate: string;
  setValidate: (e: string) => void;
  pincode: string;
  setPincode: (e: string) => void;
  setDisabled: (e: boolean) => void;
  setError: (e: string) => void;
  disabled: boolean;
  isClicked: boolean;
  error?: string;
  telephone: string;
}

export const PinInputCustom: React.FC<Props> = ({
  validate,
  setValidate,
  pincode,
  setPincode,
  disabled,
  setDisabled,
  isClicked,
  error,
  setError,
  telephone,
}): React.ReactElement => {
  //   const { mutate: mutateCode, isSuccess, data } = useRandomCode();
  const [message, setMessage] = useState<string>("");

  const [timeLeft, { start, pause, resume, reset }] = useCountDown();

  const restart = useCallback(() => {
    const newTime = 120 * 1000;
    start(newTime);
  }, []);

  const handlePinChange = (pinCode: string) => {
    setPincode(pinCode);
    setError("");
  };

  const handleClickCode = () => {
    const rgexValid = /^09\d{9}$/;
    const phoneValid = telephone?.match(rgexValid) ? true : false;

    if (!phoneValid) {
      setValidate("شماره همراه نامعتبر است");
    }
    if (!telephone) {
      setValidate("شماره همراه را وارد کنید");
    }
    if (timeLeft === 0) {
      setPincode("");
    }
    if (phoneValid) {
      //   mutateCode(
      //     { telephone: telephone },
      //     {
      //       onSuccess: (data) => {
      //         setError("");
      //         setPincode("");
      //         setMessage(data?.data.persian_help_text);
      //         if (data.code === 200) {
      //           setDisabled(true);
      //           restart();
      //         }
      //       },
      //       onError: () => {
      //         setPincode("");
      //         setMessage("خطا در ارسال کد");
      //       },
      //     }
      //   );
    }
  };

  useEffect(() => {
    if (isClicked) {
      handleClickCode();
    }
    restart();
  }, [isClicked]);

  return (
    <div>
      <ReactCodeInput
        name="pinCode"
        type="number"
        inputMode="numeric"
        fields={5}
        autoFocus={disabled}
        onChange={handlePinChange}
        touch={() => setError("")}
        value={pincode}
        inputStyle={{
          ...style,
          backgroundColor: "#fff",
          color: "#707070",
          border: Boolean(error) ? "2px solid blue" : "2px solid #efefef",
        }}
        inputStyleInvalid={{
          ...style,
          backgroundColor: "black",
          color: "red",
          border: "2px solid blue",
        }}
      />
      <div className="flex items-center justify-between mt-4">
        <CircularProgress percentage={timeLeft} color={"cyan-500"} />
        {message && timeLeft / 1000 >= 115 && <div>{message}</div>}
        <button
          onClick={handleClickCode}
          disabled={!disabled || timeLeft !== 0 ? true : false}
          className="mr-4"
        >
          ارسال مجدد
        </button>
      </div>
    </div>
  );
};
