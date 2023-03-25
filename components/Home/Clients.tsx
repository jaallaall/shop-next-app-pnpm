import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper";

const clients = [
  {
    img: "/static/images/عمران- اخری-F6CCE99B-806DEFA8.png",
    id: 1,
    alt: "image",
    title: "شرکت عمران آذرستان",
  },
  {
    img: "/static/images/Vazanss_prev_ui-F6CCE99B-806DEFA8.png",
    id: 2,
    alt: "image",
    title: "شرکت وزان",
  },
  {
    img: "/static/images/index_prev_ui -F6CCE99B-806DEFA8.png",
    id: 3,
    alt: "image",
    title: "پرستیژلند",
  },
  {
    img: "/static/images/عمران- اخری-F6CCE99B-806DEFA8.png",
    id: 4,
    alt: "image",
    title: "شرکت عمران آذرستان",
  },
  {
    img: "/static/images/Vazanss_prev_ui-F6CCE99B-806DEFA8.png",
    id: 5,
    alt: "image",
    title: "شرکت وزان",
  },
  {
    img: "/static/images/index_prev_ui -F6CCE99B-806DEFA8.png",
    id: 6,
    alt: "image",
    title: "پرستیژلند",
  },
  {
    img: "/static/images/عمران- اخری-F6CCE99B-806DEFA8.png",
    id: 7,
    alt: "image",
    title: "شرکت عمران آذرستان",
  },
  {
    img: "/static/images/Vazanss_prev_ui-F6CCE99B-806DEFA8.png",
    id: 8,
    alt: "image",
    title: "شرکت وزان",
  },
  {
    img: "/static/images/index_prev_ui -F6CCE99B-806DEFA8.png",
    id: 9,
    alt: "image",
    title: "پرستیژلند",
  },
];

const Clients: React.FC = (): React.ReactElement => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="flex justify-between mb-6">
        <h3>مشتریان</h3>
      </div>
      <div className="grid md:grid-cols-[70px_minmax(0,_1fr)_70px] md:gap-5 items-center">
        <button
          ref={nextRef}
          className="w-8 h-8 p-2 bg-white rounded-md hover:bg-primary-light hidden md:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width={"100%"}
            height={"100%"}
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
        <Swiper
          slidesPerView={1.8}
          centeredSlides={true}
          spaceBetween={20}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          dir="rtl"
          loop
          autoplay={{
            delay: 3500,
            // disableOnInteraction: false,
            // pauseOnMouseEnter: true,
          }}
        >
          {clients.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center">
                  <span className="block w-20 h-20 relative">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      // style={{ objectFit: "contain" }}
                    />
                  </span>
                  <span className="block mt-3">{item.title}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          ref={prevRef}
          className="w-8 h-8 p-2 bg-white rounded-md ml-0 mr-auto hover:bg-primary-light hidden md:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width={"100%"}
            height={"100%"}
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Clients;
