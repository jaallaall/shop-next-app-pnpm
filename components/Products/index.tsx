"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { Icon, Breadcrumbs } from "ui";
import { product, products } from "utils";

const breadcrumbs = [
  { title: "صفحه نخست", id: 1, href: "/" },
  { title: "لوله فلزی", id: 2, href: "/" },
  { title: "لوله مانیسمان (فولادی بدون درز)", id: 3, href: "/" },
];

const Products: React.FC = (): React.ReactElement => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section>
      <div className="container px-3 mx-auto">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        {products.map((item, index) => {
          return (
            <Accordion
              key={item.id}
              className="bg-white rounded-md mb-4"
              open={open === index + 1}
              icon={<Icon id={index + 1} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                className="font-normal text-base px-3 [&>*:last-child]:ml-0"
              >
                {item.title}
              </AccordionHeader>
              <AccordionBody>
                <div className="grid grid-cols-7 gap-3 text-center">
                  <div>سایز</div>
                  <div>نوع اتصال</div>
                  <div>واحد</div>
                  <div>توضیحات بیشتر</div>
                  <div>قیمت واحد</div>
                  <div>خرید</div>
                  <div>قیمت کل</div>
                </div>
                {/* {item.types.map((it, i) => {
                  console.log(Object.values(it)[i]);
                  <div className="" key={i}>
                    {Object.values(it)[i]}
                  </div>;
                })} */}
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
