import dynamic from "next/dynamic";

const Auth = dynamic(() => import("components/Auth"));

export const metadata = {
  title: "ثبت نام",
  description: "ثبت نام",
};

export default function RegisterPage() {
  return <Auth />;
}
