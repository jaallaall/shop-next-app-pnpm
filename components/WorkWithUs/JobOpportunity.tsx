import { Button, Input } from "@material-tailwind/react";

const JobOpportunity: React.FC = (): React.ReactElement => {
  return (
    <div className="bg-white rounded-xl mt-5 md:p-10 p-4">
      <h3 className="mb-2">فرصت شغلی به عنوان کارشناس فروش صنعتی</h3>
      <p>
        شرکت پایپ کالا در مسیر رشد و موفقیت خود و در جهت تکمیل تیم کاری خود چشم
        انتظار رزومه ی شما در زمینه های: 1- فروش و دستیار فروش 2- برنامه نویسی
      </p>
      <form className="grid md:grid-cols-4 gap-3 mt-4">
        <Input size="lg" label="نام و نام خانوادگی" className="bg-white" />
        <Input
          type="password"
          size="lg"
          label="شماره موبایل"
          className="bg-white"
        />
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex items-center w-full h-11 border border-gray-400 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 text-blue-gray-500"
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
        <Button>ارسال</Button>
      </form>
    </div>
  );
};

export default JobOpportunity;
