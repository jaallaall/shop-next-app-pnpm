import Layout from "components/Layout";
import dynamic from "next/dynamic";

const Products = dynamic(() => import("components/Products"));

export const metadata = {
  title: "فهرست انواع لوله مانیسمان",
  description:
    "انواع لوله و اتصالات آب و گاز، لوله و اتصالات فلزی و پلیمری، شیر آلات ، تجهیزات آتش نشانی و... با بهترین قیمت و ارسال به تمامی نقاط ایران",
};

export default function ProductsPage() {
  return (
    <Layout>
      <Products />
    </Layout>
  );
}
