import dynamic from "next/dynamic";

const Invoicedetail = dynamic(() => import("components/Invoicedetail"));

export const metadata = {
  title: "جزییات پیش فاکتور",
  description: "جزییات محصولات خریداری شده بصورت پیش فاکتور",
};

export default function InvoicedetailPage() {
  return <Invoicedetail />;
}
