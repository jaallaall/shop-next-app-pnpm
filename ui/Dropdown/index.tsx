import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useEventListener } from "usehooks-ts";

interface Props {
  text: string;
  children: React.ReactNode;
}

function Dropdown({ text, children }: Props) {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    height?: number;
    width?: number;
  } | null>(null);

  const [rect, setRect] = useState<any>({});

  const ref: React.LegacyRef<HTMLDivElement> = useRef(null);

  // useEffect(() => {
  //   const elm = ref?.current?.getBoundingClientRect();
  //   if (position) setRect(elm?.width as number);
  // }, [ref, position]);

  useEventListener("mousedown", (event) => {
    const el = ref?.current;
    document.body.classList.remove("overflow-hidden");

    if (!el || el.contains(event.target as Node)) {
      return;
    }

    setPosition(null);
  });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    document.body.classList.add("overflow-hidden");
    const bounds = e.currentTarget.getBoundingClientRect();

    console.log(bounds);

    setPosition({
      x: bounds.x,
      y: bounds.y + bounds.height,
    });
  };

  const anchorProps = {
    onClick: handleClick,
  };

  const anchor = isValidElement(children) ? (
    cloneElement(children, anchorProps)
  ) : (
    <button {...anchorProps}>{text}</button>
  );

  // console.log(document.body.clientWidth);

  return (
    <>
      {anchor}
      {position &&
        createPortal(
          <div
            className="fixed z-[999]"
            style={{
              top: position.y,
              left: position.x,
            }}
            ref={ref}
          >
            <div
              style={{
                background: "black",
                color: "white",
              }}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Dropdown;
