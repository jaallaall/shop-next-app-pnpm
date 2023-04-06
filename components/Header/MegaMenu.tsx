import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "ui";

import { megaMenu } from "utils";

export const MenuLg: React.FC = (): React.ReactElement => {
  const [show, setShow] = useState<number[]>([1]);
  const handleMouseDown = (id: number) => {
    const arrId = [];
    arrId.push(id);
    setShow(arrId);
  };
  return (
    <Menu placement="top-start" lockScroll>
      <li>
        <MenuHandler>
          <div className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 cursor-pointer p-2">
            دسته بندی
          </div>
        </MenuHandler>
      </li>
      <MenuList className="bg-white rounded-br-lg rounded-bl-lg overflow-hidden md:h-[calc(100vh_-_150px)]">
        <div className="md:grid md:grid-cols-[200px_minmax(0,1fr)_250px] h-full">
          <div className="scrollbar border-l bg-gray-200">
            {megaMenu.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="py-3 px-2 hover:bg-white text-[15px] text-gray-800 flex justify-between"
                  onMouseEnter={() => handleMouseDown(item.id)}
                >
                  {item.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </Link>
              );
            })}
          </div>

          {megaMenu.map((item) => {
            return (
              show.includes(item.id) && (
                <>
                  <div className="md:grid md:grid-cols-3 gap-3 p-3 scrollbar h-screen">
                    {item.subMenu.map((subItem) => {
                      return (
                        <div key={subItem.id}>
                          <Link
                            href={subItem.href}
                            className="block text-[16px] border-r-2 border-primary pr-2"
                          >
                            {subItem.title}
                          </Link>
                          {subItem.sub.map((it, i) => (
                            <Link
                              href={it.href}
                              key={i}
                              className="pt-2 block "
                            >
                              {it.name}
                            </Link>
                          ))}
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-2 scrollbar border-r pr-2">
                    <h4 className="border-r-2 border-primary pr-2">برندها</h4>
                    {item.brands.map((it) => (
                      <Link
                        href={it.href}
                        key={it.id}
                        className="flex items-center p-1"
                      >
                        <Image
                          src={it.img}
                          alt={it.alt}
                          width="20"
                          height="20"
                          className="ml-1"
                        />
                        <span>{it.name}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )
            );
          })}
        </div>
      </MenuList>
    </Menu>
  );
};

export const MegaMenu: React.FC<{
  setShow: (e: boolean) => void;
}> = ({ setShow }): React.ReactElement => {
  const [open, setOpen] = useState(0);
  const [open1, setOpen1] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  const handleOpen1 = (value: number) => {
    setOpen1(open1 === value ? 0 : value);
  };

  return (
    <div className="md:grid md:grid-cols-[200px_minmax(0,1fr)_250px] h-full">
      {megaMenu.map((item, index) => {
        return (
          <Accordion
            key={item.id}
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
            className={open === index + 1 ? "bg-gray-100" : ""}
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="font-normal text-base px-3 [&>*:last-child]:ml-0"
            >
              <Link href={item.href} className="block text-[16px]">
                {item.name}
              </Link>
            </AccordionHeader>
            <AccordionBody>
              {item.subMenu.map((subItem, indx) => (
                <Accordion
                  key={subItem.id}
                  open={open1 === indx + 1}
                  icon={<Icon id={indx + 1} open={open1} />}
                  className="px-4"
                >
                  <AccordionHeader
                    onClick={() => handleOpen1(indx + 1)}
                    className="font-normal text-base py-2 [&>*:last-child]:ml-0"
                  >
                    {subItem.title}
                  </AccordionHeader>

                  <AccordionBody key={indx}>
                    {subItem.sub.map((it, i) => {
                      return (
                        <Link
                          href={it.href}
                          key={i}
                          className="pt-2 block"
                          onClick={() => setShow(false)}
                        >
                          {it.name}
                        </Link>
                      );
                    })}
                  </AccordionBody>
                </Accordion>
              ))}
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
};
