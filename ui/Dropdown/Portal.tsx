import { AnimatePresence, motion, MotionStyle } from "framer-motion";
import {
  forwardRef,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export interface IPortal {
  selector?: string;
  open: boolean;
  onClose: (e: boolean) => void;
  className?: string;
  rol?: string;
  style?: MotionStyle;
}

const Portal = forwardRef<HTMLDivElement, PropsWithChildren<IPortal>>(
  (props, ref) => {
    props = {
      selector: "__ROOT_PORTAL__",
      ...props,
    };

    const {
      selector = "dropdown",
      open,
      onClose,
      rol = "dropdown",
      className = "",
      children,
      style,
    } = props;

    const refElm = useRef<HTMLElement | null>(null);
    const [mounted, setMounted] = useState(false);

    const selectorPrefixed = "#" + (selector as string).replace(/^#/, "");

    useEffect(() => {
      refElm.current = document.querySelector(selectorPrefixed);
      document.body.removeAttribute("style");

      if (!refElm.current) {
        const div = document.createElement("div");
        div.setAttribute("id", selector as string);
        document.body.appendChild(div);
        refElm.current = div;
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
                  className="fixed top-0 bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm z-[99]"
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  onClick={() => onClose(false)}
                />
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 100,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  }}
                  role={rol}
                  className={`${className} fixed z-[999] bg-white flex flex-col md:rounded-lg p-3`}
                  style={style}
                  ref={ref}
                >
                  {children}
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          refElm.current as HTMLElement
        )
      : null;
  }
);

export default Portal;
