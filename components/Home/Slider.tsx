import Image from "next/image";
import Link from "next/link";
// import { SetStateAction, useState } from "react";
// import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider: React.FC = (): React.ReactElement => {
  // const [paginationRef, setPaginationRef] = useState<HTMLElement | null>(null);
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}
        className="mySwiper"
        dir="rtl"
        // pagination={{ el: paginationRef, clickable: true }}
        // modules={[Pagination]}
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
      {/* <div
        ref={(node: SetStateAction<HTMLElement | null>) =>
          setPaginationRef(node)
        }
        className="flex justify-center py-3 gap-x-1 pagination-slider"
      /> */}
    </>
  );
};

export default Slider;
