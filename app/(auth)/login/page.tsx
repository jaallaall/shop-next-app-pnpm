import dynamic from "next/dynamic";

const Auth = dynamic(() => import("components/Auth"));

export const metadata = {
  title: "ورود",
  description: "ورود به سایت",
};

export default function LoginPage() {
  return <Auth />;
}
