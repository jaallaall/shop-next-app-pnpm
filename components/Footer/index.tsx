"use client";

import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";
import MainFooter from "./Footer";
import FooterXs from "./FooterXs";

const Footer: React.FC = (): React.ReactElement | null => {
  const pathname = usePathname();
  const matches = useMediaQuery("(max-width: 768px)");

  const isLogin =
    pathname?.endsWith("/register") || pathname?.endsWith("/login");

  // if (isLogin) {
  //   return null;
  // }

  if (matches) {
    return (
      <>
        <MainFooter />
        <FooterXs />
      </>
    );
  }

  return <MainFooter />;
};

export default Footer;
