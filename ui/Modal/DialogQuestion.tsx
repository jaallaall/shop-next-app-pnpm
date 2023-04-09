import Loader from "ui/Loader";
import Modal from ".";

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
          <Loader loading={isLoading} />
          {"بله"}
        </button>
      </div>
    </Modal>
  );
};

export default DialogQuestion;
