import { usePathname } from "next/navigation";

const Search: React.FC = (): React.ReactElement => {
  const pathname = usePathname();
  return (
    <div className="md:grid md:grid-cols-[400px_200px] my-6">
      <div className="relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 absolute right-3 top-3 text-neutral-400"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="search"
          className="peer block min-h-full w-full rounded-lg border-0 bg-blue-gray-50 py-[.62rem] pl-3 pr-10 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        />
        <label className="pointer-events-none absolute top-0 right-10 mb-0 max-w-[90%] origin-[100%_0] truncate pt-[0.57rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">
          جستجو در{" "}
          {decodeURIComponent(pathname as string)
            .split("/")[2]
            .replace(/_/g, " ")}
        </label>
      </div>
      <button className="bg-primary text-white px-6 py-3 md:mr-3 md:mt-0 mt-3 rounded-lg hover:bg-primary-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-4 w-4 fill-current inline-block ml-2"
        >
          <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
        </svg>
        اعمال فیلتر
      </button>
    </div>
  );
};

export default Search;
