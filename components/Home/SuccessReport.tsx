import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";
import { SetStateAction, useState } from "react";
import { Pagination } from "swiper";

const report = [
  {
    id: 1,
    img: "/static/images/بانک آینده.png",
    alt: "",
    title: "ساختمان مرکزی بانک آینده",
    status: "خاتمه یافته",
    master: " بانک آینده",
  },
  {
    id: 2,
    img: "/static/images/سیتی سنتر.png",
    alt: "",
    title: "سیتی سنتر اصفهان",
    status: "خاتمه یافته",
    master: " بانک آینده",
  },
  {
    id: 3,
    img: "/static/images/فکور صنعت.png",
    alt: "",
    title: "مجتمع فولاد پایا",
    status: "خاتمه یافته",
    master: " بانک آینده",
  },
];

const SuccessReport: React.FC = (): React.ReactElement => {
  const [paginationRef, setPaginationRef] = useState<HTMLElement | null>(null);
  return (
    <>
      <div className="flex justify-between mb-6">
        <h3>گزارش موفقیت</h3>
      </div>
      <Swiper
        // onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{ el: paginationRef, clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        dir="rtl"
      >
        {report.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="min-h-[280px] border p-3 flex flex-col rounded-lg bg-white">
                <div className="relative h-48">
                  <Image src={item.img} alt={item.alt} fill />
                </div>
                <Link className="mt-3 text-lg" href={"/"}>
                  {item.title}
                </Link>
                <div className="flex mt-2">
                  <span>وضعیت پروژه: </span>
                  <span>{item.status}</span>
                </div>
                <div className="flex mt-1">
                  <span>کارفرما: </span>
                  <span>{item.master} </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        ref={(node: SetStateAction<HTMLElement | null>) =>
          setPaginationRef(node)
        }
        className="flex justify-center py-3 gap-x-1 pagination-slider"
      />
    </>
  );
};

export default SuccessReport;
