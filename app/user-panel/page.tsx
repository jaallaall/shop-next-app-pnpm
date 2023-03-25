import dynamic from "next/dynamic";

const UserPanel = dynamic(() => import("components/UserPanel"));

export const metadata = {
  title: "وضعیت سفارش ها",
};

export default function UserPanelPage() {
  return <UserPanel />;
}
