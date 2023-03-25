"use client";

import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";

function ReactQueryWrapper({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>{children}</PersistGate>
        </Provider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default ReactQueryWrapper;
