import { PropsWithChildren, useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

export interface IPortal {
  selector?: string;
  open: boolean;
  ques?: boolean;
  onClose: (e: boolean) => void;
  className?: string;
}

const Modal = (props: PropsWithChildren<IPortal>) => {
  props = {
    selector: "__ROOT_PORTAL__",
    ...props,
  };

  const {
    selector = "modal",
    open,
    ques,
    onClose,
    className = "",
    children,
  } = props;

  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  const selectorPrefixed = "#" + (selector as string).replace(/^#/, "");

  useEffect(() => {
    ref.current = document.querySelector(selectorPrefixed);
    document.body.removeAttribute("style");

    if (!ref.current) {
      const div = document.createElement("div");
      div.setAttribute("id", selector as string);
      document.body.appendChild(div);
      ref.current = div;
    }

    if (open) {
      document.body.style.overflow = "hidden";
    }

    setMounted(true);
  }, [selector, selectorPrefixed, open]);

  return mounted
    ? createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="fixed top-0 bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm z-[1000]"
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                onClick={() => onClose(false)}
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
                role={"modal"}
                className={twMerge(
                  "fixed top-0 bottom-0 left-0 right-0 md:rounded-lg m-auto z-[1000] bg-white flex flex-col",
                  className
                )}
              >
                {children}
              </motion.aside>
            </>
          )}
        </AnimatePresence>,
        ref.current as HTMLElement
      )
    : null;
};

export default Modal;
