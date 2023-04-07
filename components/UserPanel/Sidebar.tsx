"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch } from "react";
import { useAppSelector } from "redux/hooks";

const menu = [
  { title: "وضعیت سفارش‌ها", id: 1, href: "/user-panel", order: true },
  { title: "پیش فاکتور های صادره", id: 2, href: "/user-panel/user-order" },
  { title: "اطلاعات کاربری", id: 3, href: "/" },
  { title: "خروج", id: 4, href: "/" },
];

const Sidebar: React.FC<{ setOpen?: Dispatch<boolean> }> = ({
  setOpen,
}): React.ReactElement => {
  const cart = useAppSelector((state) => state.cartItems);
  return (
    <>
      <div className="flex gap-x-2 items-center bg-primary text-white pt-6 pb-3 px-3 rounded-t-sm rounded-b-xl md:mx-0 mx-3">
        <Image
          src="/static/images/face-2.jpg"
          alt="avatar"
          className="inline-block relative object-cover object-center rounded-full"
          width={50}
          height={50}
        />
        <h5 className="text-inherit">9390157719</h5>
      </div>
      <div className="p-2 overflow-hidden">
        <div className="scrollbar h-full p-2">
          <ul>
            {menu.map((item) => {
              return (
                <li
                  key={item.id}
                  className="[&:not(:first-child)]:border-t"
                  onClick={() => setOpen && setOpen(false)}
                >
                  <Link href={item.href} className="py-3 flex items-center">
                    <span className="flex-grow">{item.title}</span>
                    {item?.order && (
                      <span className="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700">
                        {cart.length}
                      </span>
                    )}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      fill="currentColor"
                      className="w-3 h-3 ml-0 mr-auto"
                    >
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
