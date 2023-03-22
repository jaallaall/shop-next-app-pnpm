import { useState } from "react";

const Search: React.FC = (): React.ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  const handleFocus = () => {
    setShow(true);
  };
  const handleBlur = () => {
    setShow(false);
  };

  return (
    <div className="relative xl:w-96">
      <input
        type="search"
        className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 py-[.62rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label className="pointer-events-none absolute top-0 right-3 mb-0 max-w-[90%] origin-[100%_0] truncate pt-[0.57rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">
        جستجو در محصولات
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 absolute left-3 top-3 text-neutral-400"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Search;
