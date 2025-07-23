import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loadingsmall from "../components/Loadingsmall/Loadingsmall";

export default function VerifyCode() {
  const [loading, setloading] = useState(false);

  let navigate = useNavigate();

  function apiVerifyCode(resetCode) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        resetCode
      )
      .then((data) => {
        data;
        setloading(false);

        toast.success("Successfully verified!");
        navigate("/ResetPassword");
      })
      .catch((error) => {
        error;
        setloading(false);

        toast.error("Verification failed. Please try again.");
      });
  }

  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: handleVerifyCode,
  });

  function handleVerifyCode(values) {
    setloading(true);

    apiVerifyCode(values);
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="container mx-auto my-12 w-[75%]">
          <h1 className="font-bold text-2xl">Enter Code Here :</h1>
          <div className="relative z-0 mb-5 group">
            <input
              type="text"
              name="resetCode"
              id="resetCode"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.resetCode}
              className="block py-2.5 my-10 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder="Code"
            />
            <label
              htmlFor="resetCode"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            ></label>
          </div>
          {formik.touched.resetCode && formik.errors.resetCode ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">{formik.errors.resetCode}</span>
            </div>
          ) : (
            ""
          )}

          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            {loading ? <Loadingsmall /> : " Verify"}
          </button>
        </div>
      </form>
    </>
  );
}
