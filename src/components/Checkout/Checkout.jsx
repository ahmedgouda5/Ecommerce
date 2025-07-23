import { useFormik } from "formik";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import * as Yup from "yup";

useFormik;
export default function Checkout() {
  let { onlinePayment } = useContext(CartContext);
  let myschema = Yup.object().shape({
    details: Yup.string().required("details Is Required"),
    phone: Yup.string()
      .required("Phone Number Is Required ")
      .matches(
        /^(?:\+20|0)?(1[0-9]{9}|2[0-9]{8}|3[0-9]{8})$/,
        "Must Be Egyption Number"
      ),

    city: Yup.string().required("Password Is required"),
  });
  const formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    validationSchema: myschema,

    onSubmit: payNow,
  });
  function payNow(values) {
    onlinePayment(values);
  }
  return (
    <>
      <div className="container mx-auto ">
        <form onSubmit={formik.handleSubmit} className="mx-auto w-[70%] my-10">
          {" "}
          <h1 className="font-medium text-3xl my-5">Address Details</h1>
          <div className="relative z-0  mb-5 group ">
            <input
              type="text"
              name="details"
              id="details"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.details}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder="Enter Your details ....
"
            />
            <label
              htmlFor="details"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            ></label>
          </div>
          {formik.touched.details && formik.errors.details ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">{formik.errors.details}</span>
            </div>
          ) : (
            ""
          )}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder="Enter Your phone...
 "
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            ></label>
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">{formik.errors.phone}</span>
            </div>
          ) : (
            ""
          )}{" "}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="city"
              id="city"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.city}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder="Enter Your city... "
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            ></label>
          </div>
          {formik.touched.city && formik.errors.city ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">{formik.errors.city}</span>
            </div>
          ) : (
            ""
          )}
          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className="w-[80%] text-xl mx-auto text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
          >
            Proceed To Chekout
          </button>
        </form>
      </div>
    </>
  );
}
