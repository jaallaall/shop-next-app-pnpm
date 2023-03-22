import { Dialog } from "@material-tailwind/react";
import { useOnClickOutside } from "hooks";
import Link from "next/link";
import { useRef, useState } from "react";
import { MenuLg, MegaMenu } from "./MegaMenu";
import SendShoppingList from "./SendShoppingList";
import { useMediaQuery } from "usehooks-ts";

const NavbarMenu: React.FC<{ show: boolean }> = ({
  show,
}): React.ReactElement => {
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
          {!matches ? (
            <div ref={ref}>
              <div
                onClick={handleClick}
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 cursor-pointer p-2"
              >
                دسته بندی
              </div>
              {showMenu && (
                <div className="md:absolute left-0 right-0 bg-white rounded-br-lg rounded-bl-lg overflow-hidden md:h-[calc(100vh_-_150px)]">
                  <MegaMenu />
                </div>
              )}
            </div>
          ) : (
            <MenuLg />
          )}

          <ul className="ml-auto flex flex-col lg:flex-row">
            <li>
              <a
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 p-2"
                href={"/"}
              >
                {"ایجاد پیش فاکتور"}
              </a>
            </li>
            <li onClick={() => setOpen(true)}>
              <button className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 p-2">
                {"ارسال لیست خرید"}
              </button>
            </li>
            <li>
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
      <Dialog
        open={open}
        handler={() => setOpen(false)}
        className="md:my-5 mt-0 flex flex-col h-[calc(100vh_-_50px)] lg:max-w-[30%] lg:min-w-0 min-w-full"
      >
        <SendShoppingList />
      </Dialog>
    </>
  );
};

export default NavbarMenu;
