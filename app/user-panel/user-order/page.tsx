import dynamic from "next/dynamic";

const UserOrder = dynamic(() => import("components/UserPanel/UserOrder"));

export const metadata = {
  title: "فهرست لیست های ارسالی",
};

export default function UserOrderPage() {
  return <UserOrder />;
}
