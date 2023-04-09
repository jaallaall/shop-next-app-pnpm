import BtnCart from "components/Home/BtnCart";
import { PropsData, TitleType } from "interfaces";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "ui";
import { amount } from "utils";

// Import Swiper styles
import "swiper/swiper.min.css";
import { useAppSelector } from "redux/store";

type ItemType = keyof Omit<TitleType, "detail">;

const ProductDetailXs: React.FC<{ item: PropsData; title: TitleType }> = ({
  item,
  title,
}): React.ReactElement => {
  const [open, setOpen] = useState<number[]>([]);

  const { cartItems } = useAppSelector((state) => state.cartReducer);

  const handleClick = (id: number) => {
    const arr = [];
    arr.push(id);
    setOpen(arr);
  };

  const handleClickClose = () => {
    setOpen([]);
  };

  return (
    <Swiper
      slidesPerView={1.3}
      centeredSlides={true}
      spaceBetween={20}
      //   navigation={{
      //     prevEl: prevRef.current,
      //     nextEl: nextRef.current,
      //   }}
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
      {item?.types?.map((slide) => {
        return (
          <SwiperSlide key={slide.id} className="bg-white p-3 rounded-lg">
            {Object.keys(slide)
              .filter((it) => it !== "id")
              .map((itm) => {
                const total =
                  (cartItems.find((cart) => cart.id === slide.id)
                    ?.quantity as number) * slide.price;

                if (
                  typeof slide[itm as ItemType] !== "object" &&
                  itm !== "detail" &&
                  itm !== "sale"
                )
                  return (
                    <div
                      className="grid grid-cols-2 gap-3 p-2 items-center"
                      key={itm}
                    >
                      <div className="text-blue-gray-700 text-[16px] font-medium">
                        {title[itm as ItemType]}
                      </div>

                      <div className="text-left">
                        {itm === "price"
                          ? amount(slide[itm])
                          : itm === "totalPrice" && total > 0
                          ? amount(total)
                          : slide[itm as ItemType]}
                      </div>
                    </div>
                  );
              })}
            <div className="grid grid-cols-2 gap-3 p-2 items-center">
              <div className="text-blue-gray-700 text-[16px] font-medium">
                {"تخفیف"}
              </div>

              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pt-[0.55em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700 ml-0 mr-auto">
                {item.discount}%
              </span>
            </div>
            <BtnCart
              item={{
                id: slide.id,
                title: item.title,
                discount: item.discount,
                price: slide.price,
                size: slide.size,
              }}
              classes="grid-cols-[30px_1fr_30px] mt-3"
            />
            <button
              className="block p-2 mt-2 font-bold text-[16px] text-center w-full"
              onClick={() => handleClick(slide.id)}
            >
              جزییات بیشتر
            </button>
            <Modal
              open={open.includes(slide.id)}
              onClose={handleClickClose}
              className="rounded-t-lg top-auto min-h-[200px] p-3"
            >
              {Object.keys(slide.detail).map((elm, i) => {
                return (
                  <div key={i} className="flex justify-between mt-3">
                    <span className="text-blue-gray-500">{elm}</span>
                    <span>{(slide.detail as any)[elm]}</span>
                  </div>
                );
              })}
            </Modal>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductDetailXs;
