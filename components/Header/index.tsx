import { useRect, useScrollDirection } from "hooks";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import CartDetails from "./CartDetails";
import NavbarMenu from "./Menu";
import Search from "./Search";

const Header: React.FC = (): React.ReactElement => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [show, setShow] = useState<boolean>(false);

  const ref = useRef(null);
  const contentRect = useRect(ref);

  const scrollDirection = useScrollDirection();

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <header
      className={`shadow-sm sticky bg-white z-[999] transform transition-transform top-0 duration-300`}
      style={{
        transform:
          scrollDirection === "down"
            ? `translateY(${-contentRect.height}px)`
            : "translateY(0)",
      }}
    >
      <div
        className={`container mx-auto flex items-center px-2 py-3`}
        ref={ref}
      >
        {!matches && (
          <div className="flex-grow">
            <button
              className="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              onClick={handleClick}
            >
              <span className="[&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>
        )}

        <Link href="/" className="flex-grow">
          <Image
            src="/static/images/logo.svg"
            alt="logo"
            width="50"
            height="50"
            className="md:m-0 m-auto"
          />
        </Link>
        {matches && (
          <div className="md:px-8">
            <Search />
          </div>
        )}

        <div className="flex">
          <Link href="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="btnIcon"
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
            ورود / ثبت نام
          </Link>
          {matches && <CartDetails />}
        </div>
      </div>
      <div className="container mx-auto md:px-2">
        <NavbarMenu show={show} />
      </div>
    </header>
  );
};

export default Header;
