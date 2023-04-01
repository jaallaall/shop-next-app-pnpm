import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  className?: string;
  setOpen: (e: boolean) => void;
  open: boolean;
}

const Modal: React.FC<Props> = ({
  children,
  className = "",
  setOpen,
  open,
}): React.ReactElement | null => {
  //   const [open, setOpen] = useState<boolean>(false);

  console.log(open);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    //   setOpen(true);
  }, [open, setOpen]);

  const handleClose = () => {
    document.body.classList.remove("overflow-hidden");
    setOpen(false);
  };

  return open
    ? createPortal(
        <AnimatePresence>
          <motion.div
            className="fixed top-0 bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm z-[999]"
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            onClick={handleClose}
          />
          <motion.aside
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -100,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            className={`${className} fixed z-[1000] bg-white flex flex-col top-0 bottom-0 left-0 right-0 md:rounded-lg m-auto w-80`}
          >
            {children}
          </motion.aside>
        </AnimatePresence>,
        document.body
      )
    : null;
};

export default Modal;
