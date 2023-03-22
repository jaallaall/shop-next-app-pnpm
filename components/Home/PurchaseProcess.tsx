import Image from "next/image";

const PurchaseProcess: React.FC = (): React.ReactElement => {
  return (
    <>
      <h3>فرآیند خرید از پایپ‌ کالا</h3>
      <div className="md:grid md:grid-cols-4 grid-cols-2 gap-4 mt-12">
        <div className="bg-white p-3 rounded-md shadow-sm">
          <span className="w-12 h-12 block relative before:bg-danger-100 before:w-14 before:h-14 before:block before:absolute before:top-0 before:right-0 before:rounded-full -mt-10 mb-5">
            <Image
              src="/static/images/icon1.svg"
              alt="icon1"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </span>
          <h3>ثبت لیست خرید</h3>
          <p>
            با دو روش بارگذاری لیست خرید یا انتخاب کالا از دسته بندی های سایت
          </p>
        </div>
        <div className="bg-white p-3 rounded-md shadow-sm">
          <span className="w-12 h-12 block relative before:bg-danger-100 before:w-14 before:h-14 before:block before:absolute before:top-0 before:right-0 before:rounded-full -mt-10 mb-5">
            <Image
              src="/static/images/icon2.svg"
              alt="icon2"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </span>
          <h3>صدور پیش فاکتور توسط پایپ کالا</h3>
          <p>ارسال پیش فاکتور با قیمت نهایی توسط کارشناسان فروش پایپ کالا</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow-sm">
          <span className="w-12 h-12 block relative before:bg-danger-100 before:w-14 before:h-14 before:block before:absolute before:top-0 before:right-0 before:rounded-full -mt-10 mb-5">
            <Image
              src="/static/images/icon3.svg"
              alt="icon3"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </span>
          <h3>تایید و تعیین روش پرداخت</h3>
          <p>تایید پیش فاکتور نهایی و تعیین روش پرداخت توسط شما</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow-sm">
          <span className="w-12 h-12 block relative before:bg-danger-100 before:w-14 before:h-14 before:block before:absolute before:top-0 before:right-0 before:rounded-full -mt-10 mb-5">
            <Image
              src="/static/images/icon4.svg"
              alt="icon4"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </span>
          <h3>ارسال بار به محل پروژه</h3>
          <p>ارسال بار از انبار به سراسر کشور در محل پروژه شما</p>
        </div>
      </div>
    </>
  );
};

export default PurchaseProcess;
