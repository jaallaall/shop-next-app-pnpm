const Invoicedetail: React.FC = (): React.ReactElement => {
  return (
    <>
      <div
        className="mb-3 w-fit items-center rounded-lg bg-success px-6 py-5 text-base text-success-dark"
        role="alert"
      >
        <div className="flex mb-3">
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
          <h5 className="text-inherit">
            پیش ‌فاکتور شما در پنل کاربری ثبت موقت شد.
          </h5>
        </div>
        <p className="text-sm">
          با ارسال به کارشناس پیش‌فاکتور شما در کمتر از سه ساعت اداری برای شما
          ارسال خواهد شد.
        </p>
      </div>
      <div className="border bg-white p-3 rounded-lg">
        <div className="grid grid-cols-[minmax(0,1fr)_repeat(3,_max-content)] md:gap-x-6 gap-x-3 gap-y-3 mb-3 text-gray-600 justify-between">
          <div className="flex flex-col md:col-span-1 col-span-4">
            <h4 className="text-black text-lg mb-2">پیش‌ فاکتور</h4>
            <p>1 مورد در سبد خرید شما موجود می‌باشد</p>
          </div>
          <div className="flex flex-col">
            <span>وضعیت</span>
            <span className="bg-red-50 text-red-300 rounded-md px-3 py-1 mt-2 inline-block w-max">
              ثبت موقت
            </span>
          </div>
          <div className="flex flex-col">
            <span>تاریخ</span>
            <span className="mt-3 block text-black">۱۴۰۲/۰۱/۱۸ </span>
          </div>
          <div className="flex flex-col">
            <span>شماره فاکتور</span>
            <span className="mt-3 block text-black">15208 </span>
          </div>
        </div>
        <div className="md:overflow-hidden overflow-x-auto pb-4 md:pb-0">
          <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
            <thead className="bg-slate-50 dark:bg-slate-700 whitespace-nowrap">
              <tr>
                <th
                  scope="col"
                  className="border border-slate-300 dark:border-slate-600 font-semibold md:p-4 p-2 text-slate-900 dark:text-slate-200"
                >
                  ردیف
                </th>
                <th
                  scope="col"
                  className="border border-slate-300 dark:border-slate-600 font-semibold md:p-4 p-2 text-slate-900 dark:text-slate-200"
                >
                  نام محصول
                </th>
                <th
                  scope="col"
                  className="border border-slate-300 dark:border-slate-600 font-semibold md:p-4 p-2 text-slate-900 dark:text-slate-200"
                >
                  سایز
                </th>
                <th
                  scope="col"
                  className="border border-slate-300 dark:border-slate-600 font-semibold md:p-4 p-2 text-slate-900 dark:text-slate-200"
                >
                  قیمت واحد
                </th>
                <th
                  scope="col"
                  className="border border-slate-300 dark:border-slate-600 font-semibold md:p-4 p-2 text-slate-900 dark:text-slate-200"
                >
                  تعداد
                </th>
                <th
                  scope="col"
                  className="border border-slate-300 dark:border-slate-600 font-semibold md:p-4 p-2 text-slate-900 dark:text-slate-200"
                >
                  قیمت کل
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  scope="row"
                  className="border border-slate-300 dark:border-slate-700 md:p-4 p-2 text-slate-500 dark:text-slate-400"
                >
                  0
                </td>
                <td className="border border-slate-300 dark:border-slate-700 md:p-4 p-2 text-slate-500 dark:text-slate-400">
                  <p className="md:w-auto w-40">
                    زانو 90 درجه جوشی بدون درز شعاع بلند رده 40 بنکن (BENKAN)
                  </p>
                </td>
                <td className="border border-slate-300 dark:border-slate-700 md:p-4 p-2 text-slate-500 dark:text-slate-400">
                  <span>
                    <span className="little" /> {"2.1"}
                  </span>
                </td>
                <td className="border border-slate-300 dark:border-slate-700 md:p-4 p-2 text-slate-500 dark:text-slate-400">
                  <span>
                    1,600,000 <span className="little">ريال</span>
                  </span>
                </td>
                <td className="border border-slate-300 dark:border-slate-700 md:p-4 p-2 text-slate-500 dark:text-slate-400">
                  <span>
                    4 <span className="little">عدد</span>
                  </span>
                </td>
                <td className="border border-slate-300 dark:border-slate-700 md:p-4 p-2 text-slate-500 dark:text-slate-400">
                  <span className="flex items-center mb-2">
                    <span className="bg-red-50 text-red-300 rounded-md px-3 py-1 ml-2 block">
                      20%
                    </span>
                    <del className="discount">6,400,000</del>
                  </span>
                  <span>
                    <span className="text-lg">5,120,000</span>
                    <span className="little">ريال</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="ml-0 mr-auto max-w-[400px]">
          <div className="grid grid-cols-2 bg-success-100 rounded-b-lg text-center">
            <div className="p-2 border-l border-b">
              <span>قیمت کل اقلام</span>
            </div>
            <div className="p-2 border-b">
              <span>
                <b>6,400,000 </b>
                <span className="little">ريال</span>
              </span>
            </div>
            <div className="p-2 border-l border-b">
              <span>تخفیف</span>
            </div>
            <div className="p-2 border-b">
              <span>
                <b>1,280,000 </b>
                <span className="little">ريال</span>
              </span>
            </div>
            <div className="p-2 border-l border-b">
              <span>قیمت کل با تخفیف</span>
            </div>
            <div className="p-2 border-b">
              <span>
                <b>5,120,000 </b>
                <span className="little">ريال</span>
              </span>
            </div>
            <div className="p-2 border-l border-b">
              <span>9% مالیات بر ارزش افزوده</span>
            </div>
            <div className="p-2 border-b">
              <span>
                <b>0 </b>
                <span className="little">ريال</span>
              </span>
            </div>
            <div className="p-2 border-l">
              <span>مبلغ قابل پرداخت</span>
            </div>
            <div className="p-2">
              <span>
                <b> 5,120,000</b>
                <span className="little">ريال</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <button className="bg-success-500 text-white rounded-md px-4 py-3 block w-full hover:bg-success-dark">
              ارسال به کارشناس
            </button>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <button className="border text-primary border-primary-light rounded-lg px-4 py-2 hover:bg-primary hover:text-white">
                پرینت
              </button>
              <button className="border text-primary border-primary-light rounded-lg px-4 py-2 hover:bg-primary hover:text-white">
                دانلود پی‌دی‌اف
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoicedetail;
