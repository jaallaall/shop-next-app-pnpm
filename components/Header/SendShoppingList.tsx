import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Option,
  Select,
} from "@material-tailwind/react";
import { useState } from "react";
import { Icon } from "ui";

const options = [
  { value: "industrial", label: "صنعتی" },
  { value: "structural", label: "ساختمانی" },
  { value: "powerhouse", label: "موتورخانه" },
  { value: "wastewater", label: "فاضلاب" },
];

const SendShoppingList: React.FC = (): React.ReactElement => {
  const [value, setValue] = useState<string>("industrial");
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const handleChange = (event: any) => {
    setValue(event);
  };

  return (
    <>
      <h3 className="hidden md:block p-3">ارسال لیست خرید</h3>
      <div className="scrollbar p-3">
        <div
          className="mb-3 inline-flex w-full items-center rounded-lg bg-primary-light py-5 px-6 text-base text-primary"
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
          ایجاد پیش فاکتور توسط کارشناس ( در کمتر از 3 ساعت )
        </div>
        <div className="relative mb-3">
          <input
            type="tel"
            className="peer block h-12 w-full rounded border bg-gray-100 py-[.62rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleSearch2"
          />
          <label
            htmlFor="exampleSearch2"
            className="pointer-events-none text-blue-gray-700 absolute top-0 right-3 mb-0 max-w-[90%] origin-[100%_0] truncate pt-[0.57rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 font-normal"
          >
            شماره موبایل
          </label>
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex items-center w-full h-12 border rounded-lg cursor-pointer bg-gray-100 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 text-blue-gray-500"
          >
            <div className="flex items-center pr-3">
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span>بارگزاری رزومه</span>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="font-normal text-base [&>*:last-child]:ml-0"
          >
            {"ارسال اطلاعات بیشتر (اختیاری)"}
          </AccordionHeader>
          <AccordionBody>
            <div className="relative">
              <input
                type="text"
                className="peer block h-12 w-full rounded border bg-gray-100 py-[.62rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleSearch2"
              />
              <label
                htmlFor="exampleSearch2"
                className="pointer-events-none text-blue-gray-700 absolute top-0 right-3 mb-0 max-w-[90%] origin-[100%_0] truncate pt-[0.57rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-neutral-200 font-normal"
              >
                نام و نام خانوادگی
              </label>
            </div>

            <div className="mt-3">
              <Select
                label="نوع پروژه"
                onChange={handleChange}
                className="select bg-gray-100 border-gray-200"
              >
                {options.map((item) => (
                  <Option key={item.value} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="relative mt-3" data-te-input-wrapper-init>
              <textarea
                className="peer block w-full rounded border bg-gray-100 py-[.62rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea1"
                rows={5}
                placeholder="Your message"
                defaultValue={""}
              />
              <label
                htmlFor="exampleFormControlTextarea1"
                className="pointer-events-none text-blue-gray-700 absolute top-0 right-3 mb-0 max-w-[90%] origin-[100%_0] truncate pt-[0.57rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-neutral-200 font-normal"
              >
                توضیحات بیشتر
              </label>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="p-3 mt-auto">
        <button
          className="group inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full mt-3"
          type="submit"
        >
          ثبت
        </button>
      </div>
    </>
  );
};

export default SendShoppingList;
