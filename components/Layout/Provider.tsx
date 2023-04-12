// import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";

interface ProvidersProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* <SessionProvider> */}

          {children}

          {/* </SessionProvider> */}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;
