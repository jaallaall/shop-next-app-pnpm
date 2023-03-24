import dynamic from "next/dynamic";

const Order = dynamic(() => import("components/Order"));

export default function OrderPage() {
  return <Order />;
}
