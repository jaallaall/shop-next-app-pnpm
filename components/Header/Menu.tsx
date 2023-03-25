import { useOnClickOutside } from "hooks";
import Link from "next/link";
import { useRef, useState } from "react";
import { Portal } from "ui";
import { useMediaQuery } from "usehooks-ts";
import { MegaMenu, MenuLg } from "./MegaMenu";
import SendShoppingList from "./SendShoppingList";

const NavbarMenu: React.FC<{
  show: boolean;
  setShow: (e: boolean) => void;
}> = ({ show, setShow }): React.ReactElement => {
  const ref = useRef(null);

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const matches = useMediaQuery("(min-width: 768px)");

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = () => {
    setShowMenu(false);
  };

  useOnClickOutside(ref, handleClickOutside, showMenu);

  return (
    <>
      <div className="md:flex w-full flex-wrap items-center justify-between relative">
        <div
          className={`grow basis-[100%] items-center lg:!flex lg:basis-auto scrollbar h-screen md:h-auto  ${
            show ? "" : "hidden"
          } `}
        >
          <ul className="ml-auto flex flex-col lg:flex-row">
            {!matches ? (
              <li ref={ref}>
                <div
                  onClick={handleClick}
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 cursor-pointer p-2"
                >
                  دسته بندی
                </div>
                {showMenu && (
                  <div className="md:absolute left-0 right-0 bg-white rounded-br-lg rounded-bl-lg overflow-hidden md:h-[calc(100vh_-_150px)]">
                    <MegaMenu setShow={setShow} />
                  </div>
                )}
              </li>
            ) : (
              <MenuLg />
            )}
            <li onClick={() => setShow(false)}>
              <Link
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 p-2"
                href={"/order"}
              >
                {"ایجاد پیش فاکتور"}
              </Link>
            </li>
            <li onClick={() => setOpen(true)}>
              <button className="md:block hidden transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 p-2">
                {"ارسال لیست خرید"}
              </button>
            </li>
            <li onClick={() => setShow(false)}>
              <Link
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 p-2"
                href="/contact-us"
              >
                {"همکاری با ما"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {matches && (
        <Portal
          open={open}
          onClose={setOpen}
          className="md:my-5 mt-0 h-[calc(100vh_-_50px)] lg:max-w-[30%] lg:min-w-0 min-w-full"
        >
          <SendShoppingList />
        </Portal>
      )}
    </>
  );
};

export default NavbarMenu;
