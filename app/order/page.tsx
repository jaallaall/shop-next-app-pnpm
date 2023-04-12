import Layout from "components/Layout";
import dynamic from "next/dynamic";

const Order = dynamic(() => import("components/Order"));

export default function OrderPage() {
  return (
    <Layout>
      <Order />
    </Layout>
  );
}
