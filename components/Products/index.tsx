"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Breadcrumbs, Icon } from "ui";
import { useMediaQuery } from "usehooks-ts";
import { products } from "utils";
import ByGrouping from "./ByGrouping";
import Description from "./Description";
import ProductDetail from "./ProductDetail";
import ProductDetailXs from "./ProductDetailXs";
import Search from "./Search";

const title = {
  size: "سایز",
  type: "نوع",
  unit: "واحد",
  detail: "جزییات",
  price: "قیمت",
  sale: "خرید",
  totalPrice: "قیمت کل",
};

const Products: React.FC = (): React.ReactElement => {
  const [open, setOpen] = useState(0);

  const pathname = usePathname();

  const matches = useMediaQuery("(min-width: 768px)");

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section>
      <div className="container px-3 mx-auto">
        <Breadcrumbs pathname={pathname as string} />
        <div className="grid md:grid-cols-2 rounded-r-2xl overflow-hidden mb-6">
          <div className=" text-white text-center p-4 relative min-h-[150px]">
            <Image
              src="/static/images/removebg-preview.png"
              alt="images"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="md:p-8 p-4 md:min-h-[300px] min-h-[100px] flex items-center justify-center rounded-r-2xl rounded-br-2xl bg-primary text-white text-center -mr-10 relative z-10">
            <h1 className="md:text-3xl text-xl text-inherit">
              {decodeURIComponent(pathname as string)
                ?.split("/")[2]
                .replace(/_/g, " ")}
            </h1>
          </div>
        </div>
        <div>
          <h3>بر اساس دسته بندی</h3>
        </div>
        <ByGrouping />
        <Search />
        {products.map((item, index) => {
          return (
            <Accordion
              key={item.id}
              className="md:bg-white bg-blue-gray-50 rounded-md mb-4"
              open={open === index + 1}
              icon={<Icon id={index + 1} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                className="font-normal text-base px-3 [&>*:last-child]:ml-0 [&>*:last-child]:mr-3 text-right"
              >
                {item.title}

                {matches && (
                  <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pt-[0.55em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700 ml-4 mr-auto">
                    تا
                    {item.discount}% تخفیف
                  </span>
                )}
              </AccordionHeader>
              <AccordionBody>
                {matches ? (
                  <ProductDetail item={item} title={title} />
                ) : (
                  <ProductDetailXs item={item} title={title} />
                )}
              </AccordionBody>
            </Accordion>
          );
        })}
        <Description />
      </div>
    </section>
  );
};

export default Products;
