type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  return (
    <li
      role="tab"
      className="grid place-items-center text-center h-full relative bg-transparent p-1 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
    >
      <button onClick={() => setSelectedTab(index)}>{title}</button>
    </li>
  );
};

export default TabTitle;
