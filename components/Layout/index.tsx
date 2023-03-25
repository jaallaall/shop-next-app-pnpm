"use client";

// import { ThemeProvider } from "@material-tailwind/react";
import Footer from "components/Footer";
import FooterXs from "components/Footer/FooterXs";
import Header from "components/Header";
import { usePathname } from "next/navigation";
// import NextNProgress from "nextjs-progressbar";
import { Suspense } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useMediaQuery } from "usehooks-ts";
import PanelLayout from "./PanelLayout";

function AppProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const matches = useMediaQuery("(min-width: 768px)");

  if (pathname?.startsWith("/login")) {
    return (
      <Suspense
        fallback={
          <BallTriangle
            height={50}
            width={50}
            radius={5}
            color="#285192"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        }
      >
        {children}
      </Suspense>
    );
  }
  if (pathname?.startsWith("/user-panel")) {
    return (
      <>
        <Header />
        <PanelLayout>{children}</PanelLayout>
        <Footer />
        {!matches && <FooterXs />}
      </>
    );
  }

  return (
    <>
      <Header />
      <Suspense
        fallback={
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        }
      >
        {children}
      </Suspense>
      <Footer />
      {!matches && <FooterXs />}
    </>
  );
}

export default AppProvider;
