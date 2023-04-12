"use client";

import Footer from "components/Footer";
import Header from "components/Header";
// import {
//   dehydrate,
//   Hydrate,
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import AppProvider from "./Provider";

function Layout({
  children,
  isLogin,
}: {
  isLogin?: boolean;
  children: React.ReactNode;
}) {
  // const [queryClient] = useState(() => new QueryClient());

  // const dehydratedState = dehydrate(queryClient);

  return (
    // <QueryClientProvider client={queryClient}>
    //   <Hydrate state={dehydratedState}>
    <AppProvider>
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
      {!isLogin && <Footer />}
    </AppProvider>
    //     <ReactQueryDevtools />
    //   </Hydrate>
    // </QueryClientProvider>
  );
}

export default Layout;
