import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider: React.FC = (): React.ReactElement => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={20}
      className="mySwiper"
      dir="rtl"
    >
      <SwiperSlide>
        <Link href="/" className="md:h-[calc(100vh_-_100px)] h-[50vh] block ">
          <Image
            src="/static/images/5-2D2816FE (1).png"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
