import Modal from ".";
import style from "./DialogQuestion.module.css";

const Loader: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={`${className} ${style["circular-loader"]} w-5 h-5 inline-block ml-4`}
      viewBox="25 25 50 50"
    >
      <circle
        className={style["loader-path"]}
        cx={50}
        cy={50}
        r={20}
        fill="none"
        strokeWidth={2}
      />
    </svg>
  );
};

const DialogQuestion: React.FC<{
  handleClickOpen: (e?: any) => void;
  open: boolean;
  handleRemoveItem?: (e?: any) => void;
  isLoading?: boolean;
}> = ({
  handleClickOpen,
  open,
  handleRemoveItem,
  isLoading,
}): React.ReactElement => {
  return (
    <Modal
      onClose={handleClickOpen}
      open={open}
      className="max-w-[350px] max-h-28 px-7 py-4 rounded-lg"
      //   ques
    >
      <h4 className="text-center">{"آیا از حذف مطمئن هستید؟"}</h4>
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-blue-gray-50 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal"
          onClick={handleClickOpen}
        >
          {"خیر"}
        </button>
        <button
          type="submit"
          onClick={handleRemoveItem}
          className="bg-blue-gray-50 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal"
        >
          {" "}
          {isLoading && <Loader className="text-primary" />}
          {"بله"}
        </button>
      </div>
    </Modal>
  );
};

export default DialogQuestion;
