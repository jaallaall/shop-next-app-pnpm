const Order: React.FC = (): React.ReactElement => {
  return (
    <section>
      <div className="container px-3 mx-auto">
        <form className="md:p-10 p-4 bg-gray-200 rounded-lg">
          <div className="grid md:grid-cols-[repeat(2,_minmax(0,1fr))_max-content] gap-4">
            <div className="relative">
              <input
                type="text"
                className="peer block min-h-full w-full rounded-lg border-0 bg-white py-[.62rem] p-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              />
              <label className="pointer-events-none absolute top-0 right-3 mb-0 max-w-[90%] origin-[100%_0] truncate pt-[0.57rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">
                محصول مورد نظر را تایپ کنید.
              </label>
            </div>
            <div className="relative">
              <input
                type="number"
                className="peer block min-h-full w-full rounded-lg border-0 bg-white py-[.62rem] p-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              />
              <label className="pointer-events-none absolute top-0 right-3 mb-0 max-w-[90%] origin-[100%_0] truncate pt-[0.57rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200">
                تعداد را وارد کنید
              </label>
            </div>
            <button className="flex items-center bg-primary rounded-lg text-white py-2 px-4 hover:bg-primary-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="fill-current w-5 h-5 ml-2"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              افزودن به پیش‌فاکتور
            </button>
          </div>
        </form>
        <div
          className="mt-3 inline-flex w-full items-center rounded-lg bg-primary-light px-6 py-5 text-base text-primary"
          role="alert"
        >
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          با افزودن نام و مقدار کالا های مورد نظرتان، پیش فاکتور بسازید و آنرا
          دریافت کنید.
        </div>
        <div
          className="mt-3 inline-flex w-full items-center rounded-lg bg-success px-6 py-5 text-base text-success-dark"
          role="alert"
        >
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          کالاهای بدون قیمت را به پیش فاکتور اضافه کنید و پس از صدور پیش فاکتور
          نهایی توسط کارشناس از قیمت روز مطلع شوید
        </div>
      </div>
    </section>
  );
};

export default Order;
