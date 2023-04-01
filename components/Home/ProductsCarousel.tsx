import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { amount, product, uderscore } from "utils";
import BtnCart from "./BtnCart";

const ProductsCarousel: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h3>پرفروش های پایپ کالا</h3>
        <Link href="/">
          مشاهده بیشتر
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="icon !w-4 !h-4 mr-2"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </Link>
      </div>
      <div className="md:grid md:grid-cols-[200px_minmax(0,1fr)] md:border md:p-3 md:rounded-lg md:border-gray-300">
        <div className="hidden md:flex md:flex-col">
          <h3>اتصالات فلزی</h3>
          <span className="relative h-full w-full">
            <Image
              src="/static/images/Untitled-1_20220919141902.499-45262FA.png"
              fill
              alt="image"
              style={{ objectFit: "scale-down" }}
            />
          </span>
        </div>
        <Swiper
          dir="rtl"
          slidesPerView={1.3}
          centeredSlides={true}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.3,
              spaceBetween: 20,
            },
          }}
          // modules={[Pagination, Navigation]}
          className="mySwiper"
          loop
        >
          {product.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="min-h-[280px] border p-3 flex flex-col rounded-lg bg-white shadow-sm">
                  <Link
                    className="mb-3 text-lg"
                    href={
                      "/" +
                      uderscore(item.grouping) +
                      "/" +
                      uderscore(item.href)
                    }
                  >
                    {item.title}
                  </Link>
                  <div className="flex justify-between mt-auto">
                    <span>بنکن</span>
                    <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pt-[0.55em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                      تا
                      {item.discount}% تخفیف
                    </span>
                  </div>
                  <div className="flex justify-between mt-3">
                    <span>سایز</span>
                    <span>
                      {item.size}
                      عدد
                    </span>
                  </div>
                  <div className="flex justify-between mt-3">
                    <span>قیمت</span>
                    <span>
                      {amount(item.price)} <small>ریال</small>
                    </span>
                  </div>
                  <BtnCart item={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ProductsCarousel;
