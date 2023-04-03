import Modal from ".";
import style from "./DialogQuestion.module.css";

const Loader: React.FC<{ color?: string; className: string }> = ({
  color,
  className,
}) => {
  return (
    <div className={`${style.loader} ${className} mr-3`}>
      <svg className={style["circular-loader"]} viewBox="25 25 50 50">
        <circle
          className={style["loader-path"]}
          cx={50}
          cy={50}
          r={20}
          fill="none"
          stroke={color}
          strokeWidth={2}
        />
      </svg>
    </div>
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
      className="max-w-[350px] max-h-28 px-7 py-4"
      //   ques
    >
      <h4 className="text-center">{"آیا از حذف مطمئن هستید؟"}</h4>
      <div className="flex justify-between items-center mt-4">
        <button onClick={handleClickOpen}>{"خیر"}</button>
        <button type="submit" onClick={handleRemoveItem}>
          {"بله"}
          {isLoading && <Loader className="text-primary" />}
        </button>
      </div>
    </Modal>
  );
};

export default DialogQuestion;
