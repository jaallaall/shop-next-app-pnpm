"use client";

import { Tab, Tabs } from "ui";

const UserPanel: React.FC = (): React.ReactElement => {
  return (
    <>
      <Tabs>
        <Tab title="در حال انجام">در حال انجام</Tab>
        <Tab title="آرشیو">آرشیو</Tab>
      </Tabs>
      <hr />
    </>
  );
};

export default UserPanel;
