"use client";

// import { ThemeProvider } from "@material-tailwind/react";
import Footer from "components/Footer";
import FooterXs from "components/Footer/FooterXs";
import Header from "components/Header";
import { usePathname } from "next/navigation";
// import NextNProgress from "nextjs-progressbar";
import { Suspense } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import { useMediaQuery } from "usehooks-ts";

function AppProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {/* <NextNProgress /> */}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {pathname !== "/login" && <Header />}

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
          {pathname !== "/login" && (
            <>
              <Footer />
              {!matches && <FooterXs />}
            </>
          )}
        </PersistGate>
      </Provider>
    </>
  );
}

export default AppProvider;
