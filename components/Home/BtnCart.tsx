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

const BtnCart: React.FC<{
  item: Props;
  classes?: string | boolean;
}> = ({ item, classes }): React.ReactElement => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartItems);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const num = Number(value) === 0 ? "" : Number(value);
      dispatch(valueQuantity({ ...item, quantity: num }));
    },
    [dispatch, item]
  );

  const findObj = cart?.find((it) => it.id === item.id);
  const quantity = findObj !== undefined ? findObj.quantity : 0;

  if (quantity === 0) {
    return (
      <button
        type="button"
        className={`inline-block rounded bg-primary pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-dark
         w-full ${classes || "px-6 mt-3"}`}
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
    );
  }

  return (
    <div
      className={`grid ${classes || "grid-cols-[50px_1fr_50px] mt-3"} gap-2`}
    >
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
        className={`peer block min-h-[auto] w-full rounded border py-[.42rem] px-3 leading-[1.6] outline-none ${
          classes ? "bg-white" : "bg-gray-100"
        } `}
        onChange={handleChange}
        value={quantity}
        min={0}
      />
      <button
        type="button"
        className="flex justify-center items-center rounded bg-primary uppercase leading-normal text-white hover:bg-primary-dark"
        onClick={() => dispatch(decrementQuantity(item.id))}
      >
        {quantity > 1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-current w-4 h-4"
          >
            <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-current w-4 h-4"
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default BtnCart;
