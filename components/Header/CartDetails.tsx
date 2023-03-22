import {
  Button,
  Dialog,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import {
  handleChangeChecked,
  removeFromCart,
  valueQuantity,
} from "redux/cart.slice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useMediaQuery } from "usehooks-ts";
import { amount } from "utils";

interface Props {
  id: number;
  title: string;
  discount: number;
  size: number;
  price: number;
  quantity?: number;
}

const CartDetails: React.FC = (): React.ReactElement => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const matches = useMediaQuery("(min-width: 768px)");
  const cart = useAppSelector((state) => state.cartItems);
  const checked = useAppSelector((state) => state.checked);

  const getItemsCount = () => {
    return cart?.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const getItemsPrice = () => {
    return cart?.reduce((accumulator, item) => accumulator + item.price, 0);
  };
  const getItemsDiscount = () => {
    return cart?.reduce((accumulator, item) => accumulator + item.discount, 0);
  };

  const totalWithDiscount = (getItemsPrice() * 100) / getItemsDiscount();

  // const handleClickOutside = () => {
  //   setOpen(false);
  // };

  const handleClickRemove = (item: Props) => {
    setOpen(false);
    dispatch(removeFromCart(item.id));
  };

  // useOnClickOutside(ref, handleClickOutside);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, item: Props) => {
      const { value } = e.target;
      dispatch(valueQuantity({ ...item, quantity: Number(value) }));
    },
    [dispatch]
  );

  const basket = (
    <>
      <div
        className="mb-4 rounded-lg bg-secondary-100 p-4 text-base text-secondary-800"
        role="alert"
      >
        <h4 className="mb-3">{cart.length} مورد در سبد خرید شما موجود است</h4>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>جمع پیش فاکتور</span>
            <span>
              {amount(getItemsPrice())} <small>ریال</small>
            </span>
          </li>
          <li className="flex justify-between">
            <span>تخفیف</span>
            <span>
              {amount(getItemsDiscount())} <small>ریال</small>
            </span>
          </li>
          <li className="flex justify-between">
            <span>مالیات</span>
            <span>
              {checked ? amount((totalWithDiscount / 100) * 9) : 0}{" "}
              <small>ریال</small>
            </span>
          </li>
          <li className="flex justify-between">
            <span>مبلغ قابل پرداخت</span>
            <span>
              {checked
                ? amount((totalWithDiscount / 100) * 9)
                : amount(totalWithDiscount - getItemsCount())}{" "}
              <small>ریال</small>
            </span>
          </li>
        </ul>
      </div>
      <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <h4 className="text-gray-400">شیوه پرداخت (رسمی / غیر رسمی )</h4>
      <div className="flex items-baseline my-3">
        <p className="ml-3">پرداخت رسمی شامل ۹٪ مالیات بر ارزش افزوده</p>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={(e) => dispatch(handleChangeChecked(e.target.checked))}
            checked={checked}
          />
          <div
            className="w-24 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:-translate-x-16 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:text-right text-left before:content-[attr(data-off)] peer-checked:before:content-[attr(data-on)] before:p-1 before:block"
            data-on="رسمی"
            data-off="غیر رسمی"
          />
        </label>
      </div>
      {cart?.map((item) => {
        return (
          <div key={item.id} className="py-3 border-t">
            <div className="flex justify-between">
              <h5>{item.title}</h5>
              <button
                className="inline-block flex-[0_0_20px] h-6 rounded-sm p-0.5 border mr-2 fill-danger"
                onClick={() => handleClickRemove(item)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between mt-2 items-center">
              <span>سایز : {item.size}</span>
              <span>
                قیمت واحد : {amount(item.price)} <small>ریال</small>
              </span>
            </div>
            <div className="flex justify-between mt-3 items-center">
              <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pt-[0.55em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                درصد تخفیف : {item.discount}%
              </span>
              <span className="flex items-center">
                تعداد :
                <input
                  type="number"
                  className="peer block min-h-[auto] rounded border bg-gray-100 py-[.22rem] px-2 leading-[1.6] outline-none max-w-[100px] mr-2"
                  onChange={(e) => handleChange(e, item)}
                  // value={item.quantity}
                />
              </span>
            </div>
          </div>
        );
      })}
      <div className="sticky bottom-0 mt-6 bg-white md:p-3">
        <Button
          className="w-full"
          onClick={() => router.push("/invoicedetail")}
        >
          مشاهده پیش فاکتور
        </Button>
      </div>
    </>
  );

  const btn = (
    <button className="md:mr-4 md:flex block">
      <span className="relative md:inline-block block w-5 h-5 md:mb-0 mb-3 m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="fill-current w-full h-full"
        >
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
        <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700 absolute -top-2 -right-2">
          {cart.length}
        </span>
      </span>
      خلاصه پیش‌ فاکتور
    </button>
  );

  if (!matches) {
    return (
      <>
        <div
          className="md:relative md:mr-6 mr-2 text-xs md:text-base"
          onClick={() => setOpen(true)}
        >
          {btn}
        </div>

        <Dialog open={open} handler={() => setOpen(false)} size={"xxl"}>
          <div className="flex p-3">
            <button onClick={() => setOpen(false)} className="btnIcon !ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" />
              </svg>
            </button>
            <h5>خلاصه پیش‌ فاکتور</h5>
          </div>
          <div className="scrollbar h-screen p-3">{basket}</div>
        </Dialog>
      </>
    );
  }

  return (
    <Menu lockScroll placement="top-end">
      {cart.length > 0 ? <MenuHandler>{btn}</MenuHandler> : btn}
      <MenuList className="scrollbar max-h-[calc(100vh_-_60px)] mt-6">
        {basket}
      </MenuList>
    </Menu>
  );
};

export default CartDetails;
