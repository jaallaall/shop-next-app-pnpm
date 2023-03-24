import { Dialog } from "@material-tailwind/react";
import CartDetails from "components/Header/CartDetails";
import Search from "components/Header/Search";
import SendShoppingList from "components/Header/SendShoppingList";
import { useState } from "react";

const FooterXs: React.FC = (): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [open1, setOpen1] = useState<boolean>(false);
  return (
    <footer className="sticky bottom-0 bg-white z-50 border-t">
      <div className="grid grid-cols-3">
        <div className="py-2">
          <CartDetails />
        </div>
        <div className="py-2">
          <div className="text-center text-xs" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 mb-3 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
            جستجو
          </div>

          <Dialog
            open={open}
            handler={() => setOpen(false)}
            className="p-3 scrollbar"
            size={"xxl"}
          >
            <button
              onClick={() => setOpen(false)}
              className="btnIcon !ml-3 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" />
              </svg>
            </button>
            <Search />
          </Dialog>
        </div>
        <div className="py-2">
          <div className="text-center text-xs" onClick={() => setOpen1(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="h-5 w-5 mb-3 mx-auto"
            >
              <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
            </svg>
            ارسال لیست خرید
          </div>

          <Dialog
            open={open1}
            handler={() => setOpen1(false)}
            className="scrollbar max-h-screen"
            size={"xxl"}
          >
            <div className="flex p-3">
              <button
                onClick={() => setOpen1(false)}
                className="btnIcon !ml-3 mb-4 "
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" />
                </svg>
              </button>
              <h3>ارسال لیست خرید</h3>
            </div>
            <SendShoppingList />
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default FooterXs;
