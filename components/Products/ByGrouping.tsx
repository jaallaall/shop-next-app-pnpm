import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { uderscore } from "utils";
import { usePathname } from "next/navigation";

// Import Swiper styles
import "swiper/swiper.min.css";

const grouping = [
  {
    title: "لوله مانیسمان سبک - رده 20",
    img: "/static/images/2D2816FE.png",
    id: 1,
    href: "/",
  },
  {
    title: "لوله مانیسمان سبک - رده 20",
    img: "/static/images/2D2816FE.png",
    id: 2,
    href: "/",
  },
  {
    title: "لوله مانیسمان رده 40",
    img: "/static/images/2D2816FE.png",
    id: 3,
    href: "/",
  },
  {
    title: "لوله مانیسمان رده 80",
    img: "/static/images/2D2816FE.png",
    id: 4,
    href: "/",
  },
];

const ByGrouping: React.FC = (): React.ReactElement => {
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
              className="border p-3 flex flex-col rounded-lg bg-white shadow-sm min-h-[120px]"
              href={pathname + "/" + uderscore(item.title)}
            >
              <Image
                src={item.img}
                alt="image"
                width={100}
                height={100}
                style={{ objectFit: "scale-down" }}
                className="mx-auto"
              />

              {item.title}
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ByGrouping;
