import { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../../Context/TokenContext";
import { UserContext } from "../../Context/Usercontext";
import Loadingsmall from "../Loadingsmall/Loadingsmall";
export default function Register() {
  let { setToken } = useContext(TokenContext);
  let { setUser } = useContext(UserContext);
  let navigate = useNavigate();
  const [register, setRegister] = useState(null);
  const [userError, setUserError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let myschema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required(" Email Is Required"),

    password: Yup.string()
      .matches(/[A-Z][a-z0-9]{3,8}/, "Password Not Vaild")
      .required("Password Is required"),
  });
  function handleLogin(values) {
    setIsLoading(true);
    values;
    return axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .then((data) => {
        setIsLoading(false);
        navigate("/");
        setRegister(data.data.message);
        setUser(data.data.user);
        setToken(data.data.token);

        localStorage.setItem("TokenLokal", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
      })
      .catch((error) => {
        setIsLoading(false);

        setUserError(error.response.data.message);
      });
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: myschema,
    onSubmit: handleLogin,
  });
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
        <h3 className="text-3xl font-bold text-center text-green-600 dark:text-green-400">
          Login Now
        </h3>

        {userError && (
          <div className="p-3 text-sm text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-md border border-red-300 dark:border-red-700">
            {userError}
          </div>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-green-600"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-600 transition-all"
            >
              Email
            </label>
          </div>
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs">{formik.errors.email}</p>
          )}

          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              className="peer w-full border-b-2  bg-transparent text-sm text-gray-900 dark:text-white placeholder-transparent "
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-green-600 transition-all"
            >
              Password
            </label>
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-xs">{formik.errors.password}</p>
          )}

          {/* Button + Link */}
          <div className="flex flex-col gap-3 mt-4">
            <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loadingsmall /> : "Login Now"}
            </button>

            <Link
              to="/ForgetPassword"
              className="text-sm text-center text-green-700 dark:text-green-400 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
