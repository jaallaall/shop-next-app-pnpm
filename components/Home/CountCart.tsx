const CountCart: React.FC = (): React.ReactElement => {
  return (
    <div className="grid grid-cols-[50px_1fr_50px] mt-3 gap-2">
      <button
        type="button"
        className="flex justify-center items-center rounded bg-primary uppercase leading-normal text-white hover:bg-primary-dark"
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
      />
      <button
        type="button"
        className="flex justify-center items-center rounded bg-primary uppercase leading-normal text-white hover:bg-primary-dark"
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

export default CountCart;
