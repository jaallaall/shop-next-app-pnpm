import { useState } from "react";
import TabTitle from "./TabTitle";

type Props = {
  children: React.ReactElement[];
};

type TabProps = {
  children: React.ReactNode;
  title: string;
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  return (
    <div
      role="tabpanel"
      className="w-full h-max text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed"
    >
      {children}
    </div>
  );
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="block overflow-hidden">
      <ul
        role="tablist"
        className="flex relative bg-blue-gray-50 bg-opacity-60 rounded-lg p-1"
      >
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
