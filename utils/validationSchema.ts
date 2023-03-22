import * as yup from "yup";

const phoneRegExp = /^(\+98|0)?9\d{9}$/g;

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validationSchema = yup.object({
  phone: yup
    .string()
    .matches(phoneRegExp, "شماره همراه نامعتبر است")
    .required("این فیلد اجباری است"),
  password: yup
    .string()
    .required("این فیلد اجباری است")
    .min(8, "گذرواژه باید حداقل ۸ کاراکتر باشد")
    .matches(/[a-zA-Z]/, "گذرواژه فقط میتواند حاوی حروف لاتین باشد"),
  confirmPassword: yup
    .string()
    .required("این فیلد اجباری است")
    .oneOf([yup.ref("password")], "گذرواژه مطابقت ندارد"),
  firstName: yup.string().required("این فیلد اجباری است"),
  lastName: yup.string().required("این فیلد اجباری است"),
});
