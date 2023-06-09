"use client";

import { useFormik } from "formik";
import { Api } from "interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setUser } from "redux/auth.slice";
import { useAppDispatch } from "redux/store";
import { Loader } from "ui";
import { formData, validationSchema } from "utils";
import PasswordShow from "./PasswordShow";
// import CountDown from "./CountDown";

const Register: React.FC = (): React.ReactElement => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showPass1, setShowPass1] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { back } = useRouter();

  const dispatch = useAppDispatch();

  // const { mutate, isLoading } = useAuthenticate();

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const body = formData({
        Phone: values.phone,
        Password: values.password,
        ConfirmPassword: values.confirmPassword,
        FirstName: values.firstName,
        LastName: values.lastName,
      });
      setLoading(true);
      setError(false);
      fetch(Api.SIGNUP, {
        method: "POST",
        body,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            dispatch(setUser(data));
            setError(false);
            setErrorMessage("");
            setLoading(false);
            resetForm();
            back();
          }
          setErrorMessage("حساب کاربری موجود است");
          setError(true);
          setLoading(false);
        })
        .catch((error) => {
          setErrorMessage("Error creating post. " + error);
          setError(true);
          setLoading(false);
        });
    },
  });

  return (
    <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
      {error && <div className="mb-2 text-red-300">{errorMessage}</div>}
      <div className="flex flex-col">
        <h3 className="mb-3">ثبت نام</h3>
      </div>
      <form className="justify-center mb-3" onSubmit={formik.handleSubmit}>
        <div className="relative">
          <input
            className="block rounded-md border px-3 py-2.5 w-full text-sm text-gray-900 dark:bg-gray-700 border-gray-200 bg-gray-50 appearance-none focus:outline-none focus:ring-0 peer focus:placeholder:opacity-100"
            placeholder=" "
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            id="firstName"
          />
          <label
            htmlFor="firstName"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[100%_0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
          >
            نام
          </label>
        </div>
        {formik.touched.firstName && formik.errors.firstName && (
          <div className="text-danger mt-1 text-sm">
            {formik.errors.firstName}
          </div>
        )}
        <div className="relative mt-2">
          <input
            className="block rounded-md border px-3 py-2.5 w-full text-sm text-gray-900 dark:bg-gray-700 border-gray-200 bg-gray-50 appearance-none focus:outline-none focus:ring-0 peer focus:placeholder:opacity-100"
            placeholder=" "
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            id="lastName"
          />
          <label
            htmlFor="lastName"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[100%_0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
          >
            نام خانوادگی
          </label>
        </div>
        {formik.touched.lastName && formik.errors.lastName && (
          <div className="text-danger mt-1 text-sm">
            {formik.errors.lastName}
          </div>
        )}
        <div className="relative mt-2">
          <input
            className="block rounded-md border px-3 py-2.5 w-full text-sm text-gray-900 dark:bg-gray-700 border-gray-200 bg-gray-50 appearance-none focus:outline-none focus:ring-0 peer placeholder:opacity-0"
            type="tel"
            name="phone"
            placeholder="091"
            value={formik.values.phone}
            onChange={formik.handleChange}
            id="phone"
          />
          <label
            htmlFor="phone"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[100%_0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1 peer-focus:placeholder:opacity-100"
          >
            شماره همراه
          </label>
        </div>
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-danger mt-1 text-sm">{formik.errors.phone}</div>
        )}
        <div className="relative mt-2">
          <input
            className="block rounded-md border px-3 py-2.5 w-full text-sm text-gray-900 dark:bg-gray-700 border-gray-200 bg-gray-50 appearance-none focus:outline-none focus:ring-0 peer focus:placeholder:opacity-100"
            placeholder=" "
            type={showPass ? "text" : "password"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            id="password"
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[100%_0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
          >
            گذرواژه
          </label>
          <PasswordShow showPass={showPass} setShowPass={setShowPass} />
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className="text-danger mt-1 text-sm">
            {formik.errors.password}
          </div>
        )}
        <div className="relative mt-2">
          <input
            className="block rounded-md border px-3 py-2.5 w-full text-sm text-gray-900 dark:bg-gray-700 border-gray-200 bg-gray-50 appearance-none focus:outline-none focus:ring-0 peer focus:placeholder:opacity-100"
            placeholder=" "
            type={showPass1 ? "text" : "password"}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            id="confirmPassword"
          />
          <label
            htmlFor="confirmPassword"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[100%_0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
          >
            تکرار گذرواژه
          </label>
          <PasswordShow showPass={showPass1} setShowPass={setShowPass1} />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="text-danger mt-1 text-sm">
            {formik.errors.confirmPassword}
          </div>
        )}
        <button
          className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full mt-3"
          type="submit"
        >
          <Loader loading={loading} />
          ثبت‌ نام
          <span aria-hidden="true" className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </span>
        </button>
      </form>
      {/* <PinInputCustom
          isClicked={isClicked}
          telephone={values.telephone}
          setPincode={setPincode}
          pincode={pincode}
          setValidate={setValidate}
          validate={validate}
          setDisabled={setDisabled}
          disabled={disabled}
          setError={setError}
          error={error}
          /> */}
    </div>
  );
};

export default Register;
