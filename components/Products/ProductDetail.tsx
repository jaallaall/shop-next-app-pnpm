import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import BtnCart from "components/Home/BtnCart";
import { Options, PropsData, TitleType } from "interfaces";
import { useAppSelector } from "redux/hooks";
import { amount } from "utils";

const ProductDetail: React.FC<{
  item: PropsData;
  title: TitleType;
}> = ({ item, title }): React.ReactElement => {
  const cartItem = useAppSelector((state) => state.cartItems);
  return (
    <>
      <div className="grid grid-cols-[repeat(5,minmax(0,_1fr))_180px_minmax(0,_1fr)] gap-3 text-center justify-center items-center">
        {Object.keys(item.types[0])
          .filter((it) => it !== "id")
          .map((itm) => {
            return (
              <div
                className="p-2 text-blue-gray-700 text-[16px] font-medium"
                key={itm}
              >
                {title[itm as keyof TitleType]}
              </div>
            );
          })}
      </div>
      {item.types.map((it, indx) => {
        return (
          <div
            className={`grid grid-cols-[repeat(5,minmax(0,_1fr))_180px_minmax(0,_1fr)] gap-3 text-center justify-center items-center text-blue-gray-500 text-[15px] ${
              indx % 2 === 1 ? "bg-blue-gray-[20]" : "bg-blue-gray-50"
            }`}
            key={indx}
          >
            {Object.keys(it).map((val, inx) => {
              const res = (it as Options)[val];
              const total =
                (cartItem.find((cart) => cart.id === it.id)
                  ?.quantity as number) * it.price;
              if (typeof res === "object") {
                return (
                  <div className="p-2 relative" key={inx}>
                    <Menu>
                      <MenuHandler>
                        <button className="block w-5 h-5 mx-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="fill-current w-full h-full inline-block"
                          >
                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                          </svg>
                        </button>
                      </MenuHandler>

                      <MenuList>
                        {Object.keys(res).map((elm, i) => {
                          return (
                            <div key={i} className="flex justify-between mt-3">
                              <span className="text-blue-gray-500">{elm}</span>
                              <span>{res[elm]}</span>
                            </div>
                          );
                        })}
                      </MenuList>
                    </Menu>
                  </div>
                );
              }
              if (val !== "id") {
                return (
                  <div className="p-2" key={inx}>
                    {typeof res === "boolean" ? (
                      <BtnCart
                        item={{
                          id: it.id,
                          title: item.title,
                          discount: item.discount,
                          price: it.price,
                          size: it.size,
                        }}
                        classes="grid-cols-[30px_1fr_30px]"
                      />
                    ) : val === "price" ? (
                      amount(res)
                    ) : val === "totalPrice" && total > 0 ? (
                      amount(total)
                    ) : (
                      res
                    )}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </>
  );
};

export default ProductDetail;
