"use client";

import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";

function AppProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Suspense
              fallback={
                <BallTriangle
                  height={100}
                  width={100}
                  radius={5}
                  color="#4fa94d"
                  ariaLabel="ball-triangle-loading"
                  visible={true}
                  wrapperClass="m-auto h-screen justify-center items-center"
                />
              }
            >
              {children}
            </Suspense>
          </PersistGate>
        </Provider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default AppProvider;
