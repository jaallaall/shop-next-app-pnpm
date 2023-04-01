import { cloneElement, isValidElement, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  text: React.ReactElement;
  children: React.ReactNode;
}

function Tooltip({ text, children }: Props) {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: bounds.x,
      y: bounds.y + bounds.height,
    });
  };

  const handleMouseOut = () => setPosition(null);

  const anchorProps = {
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
  };

  const anchor = isValidElement(text) ? (
    cloneElement(text, anchorProps)
  ) : (
    <div {...anchorProps}>{text}</div>
  );

  return (
    <>
      {anchor}
      {position &&
        createPortal(
          <div
            style={{
              top: position.y,
              left: position.x,
              position: "fixed",
              paddingTop: 5,
              zIndex: 10,
            }}
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

export default Tooltip;
