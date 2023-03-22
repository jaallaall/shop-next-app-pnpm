import { useCallback } from "react";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  valueQuantity,
} from "redux/cart.slice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

interface Props {
  id: number;
  title: string;
  discount: number;
  size: number;
  price: number;
  quantity?: number;
}

const ProductCard: React.FC<{
  item: Props;
}> = ({ item }): React.ReactElement => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartItems);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      dispatch(valueQuantity({ ...item, quantity: Number(value) }));
    },
    [dispatch, item]
  );

  const isQuan =
    cart.length > 0 ? cart?.find((it) => it.id === item.id)?.quantity : 0;

  return !isQuan ? (
    <button
      type="button"
      className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-dark w-full mt-3"
      onClick={() => dispatch(addToCart(item))}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="btnIcon"
      >
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>
      افزودن به سبد خرید
    </button>
  ) : (
    <div className="grid grid-cols-[50px_1fr_50px] mt-3 gap-2">
      <button
        type="button"
        className="flex justify-center items-center rounded bg-primary uppercase leading-normal text-white hover:bg-primary-dark"
        onClick={() => dispatch(incrementQuantity(item.id))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="fill-current w-4 h-4"
        >
          <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
        </svg>
      </button>
      <input
        type="number"
        className="peer block min-h-[auto] w-full rounded border bg-gray-100 py-[.42rem] px-3 leading-[1.6] outline-none"
        onChange={handleChange}
        value={isQuan}
      />
      <button
        type="button"
        className="flex justify-center items-center rounded bg-primary uppercase leading-normal text-white hover:bg-primary-dark"
        onClick={() => dispatch(decrementQuantity(item.id))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="fill-current w-4 h-4"
        >
          <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
