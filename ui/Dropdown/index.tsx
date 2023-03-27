import { useRect } from "hooks";
import { useEffect, useRef, useState } from "react";
import Portal from "./Portal";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<Props> = ({ title, children }): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [box, setBox] = useState({});
  const ref = useRef(null);
  const refBox = useRef(null);
  const rect = useRect(ref);
  const rectBox = useRect(refBox);

  console.log(rectBox);
  return (
    <>
      <div onClick={() => setOpen(!open)} ref={ref} className="w-32">
        {title}
      </div>
      <Portal
        ref={refBox}
        open={open}
        onClose={setOpen}
        style={{
          top: rect.y + rect.height + "px",
          left: rect.left + "px",
        }}
      >
        {children}
      </Portal>
    </>
  );
};

export default Dropdown;
