"use client";

import Footer from "components/Footer";
import FooterXs from "components/Footer/FooterXs";
import Header from "components/Header";
// import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { BallTriangle } from "react-loader-spinner";

interface ProvidersProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<ProvidersProps> = ({ children }) => {
  const pathname = usePathname();
  const isLogin =
    pathname?.endsWith("/register") || pathname?.endsWith("/login");
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {/* <SessionProvider> */}
      {!isLogin && <Header />}
      <Suspense
        fallback={
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#285192"
            ariaLabel="ball-triangle-loading"
            visible={true}
            wrapperClass="m-auto h-screen justify-center items-center"
          />
        }
      >
        {children}
      </Suspense>
      {!isLogin && (
        <>
          <Footer />
          <FooterXs />
        </>
      )}
      {/* </SessionProvider> */}
    </ThemeProvider>
  );
};

export default AppProvider;
