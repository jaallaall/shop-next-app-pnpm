const Invoicedetail: React.FC = (): React.ReactElement => {
  return (
    <section>
      <div className="container px-3 mx-auto">
        <div
          className="mb-4 rounded-lg bg-success-100 py-5 px-6 text-base text-success-700"
          role="alert"
        >
          <div>
            <h4 className="mb-2 text-2xl font-medium leading-tight">
              پیش ‌فاکتور شما در پنل کاربری ثبت موقت شد.
            </h4>
            <p className="mb-4">
              با ارسال به کارشناس پیش‌فاکتور شما در کمتر از سه ساعت اداری برای
              شما ارسال خواهد شد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoicedetail;
