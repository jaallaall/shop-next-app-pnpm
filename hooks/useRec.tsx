import { useLayoutEffect, useCallback, useState } from "react";

type RectResult = {
  x: number;
  y: number;
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

function getRect<T extends HTMLElement>(element?: T): RectResult {
  let rect: RectResult = {
    x: 0,
    y: 0,
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  };
  if (element) rect = element.getBoundingClientRect();
  return rect;
}

export function useRect<T extends HTMLElement>(
  ref: React.RefObject<T>
): RectResult {
  const [rect, setRect] = useState<RectResult>(
    ref && ref.current ? getRect(ref.current) : getRect()
  );

  const handleResize = useCallback(() => {
    if (!ref.current) return;
    setRect(getRect(ref.current)); // Update client rect
  }, [ref]);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    handleResize();

    if (typeof ResizeObserver === "function") {
      let resizeObserver: ResizeObserver | null = new ResizeObserver(() =>
        handleResize()
      );
      resizeObserver.observe(element);
      return () => {
        if (!resizeObserver) return;
        resizeObserver.disconnect();
        resizeObserver = null;
      };
    } else {
      window.addEventListener("resize", handleResize); // Browser support, remove freely
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize, ref]);

  return rect;
}
