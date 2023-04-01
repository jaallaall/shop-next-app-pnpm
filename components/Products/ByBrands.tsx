import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { uderscore } from "utils";
import { usePathname } from "next/navigation";

// Import Swiper styles
import "swiper/swiper.min.css";

const grouping = [
  {
    img: "/static/images/mirab.v4.jpg35-removebg-preview.pngب-2D2816FE.png",
    id: 1,
    alt: "image",
    title: " میراب",
    href: "/",
  },
  {
    img: "/static/images/ارتعاشات-صنعتی.png46-2D2816FE.png",
    id: 2,
    alt: "image",
    title: " ارتعاشات صنعتی",
    href: "/",
  },
  {
    img: "/static/images/download__2_.v4.jpg40-removebg-preview-2D2816FE.png",
    id: 3,
    alt: "image",
    title: " فاراب ",
    href: "/",
  },
];

const ByBrands: React.FC = (): React.ReactElement => {
  const pathname = usePathname();
  return (
    <Swiper
      dir="rtl"
      slidesPerView={1.3}
      centeredSlides={true}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6.3,
          spaceBetween: 20,
        },
      }}
      // modules={[Pagination, Navigation]}
      className="mySwiper"
      loop
      style={{
        marginTop: 16,
        marginBottom: 20,
      }}
    >
      {grouping.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Link
              className="border p-3 flex flex-col rounded-lg bg-white shadow-sm min-h-[110px] text-center"
              href={pathname + "/" + uderscore(item.title)}
            >
              <span className="relative h-14 block mx-auto mb-3 w-full">
                <Image
                  src={item.img}
                  alt="image"
                  fill
                  style={{ objectFit: "scale-down" }}
                />
              </span>

              {item.title}
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ByBrands;
