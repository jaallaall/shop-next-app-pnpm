import dynamic from "next/dynamic";

const Login = dynamic(() => import("components/Auth/Login"));

export const metadata = {
  title: "ورود",
  description: "ورود به سایت",
};

export default function LoginPage() {
  return <Login />;
}
