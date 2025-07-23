import { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../Context/TokenContext";
import Loadingsmall from "../Loadingsmall/Loadingsmall";
export default function Register() {
  let { token, setToken } = useContext(TokenContext);
  let navigate = useNavigate();
  const [register, setRegister] = useState(null);
  const [userError, setUserError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let myschema = Yup.object().shape({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(3, "Must be greater than 3 characters")
      .required("Name Is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required(" Email Is Required"),

    password: Yup.string()
      .matches(
        /[A-Z][a-z0-9]{3,8}/,
        "Password Not Vaild , Must Start with Capital Letter"
      )
      .required("Password Is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password Not Matched")
      .required("Repassword Is Required"),
    phone: Yup.string()
      .required("Phone Number Is Required ")
      .matches(
        /^(?:\+20|0)?(1[0-9]{9}|2[0-9]{8}|3[0-9]{8})$/,
        "Must Be Egyption Number"
      ),
  });
  function handleRegister(values) {
    setIsLoading(true);
    values;
    return axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .then((data) => {
        setIsLoading(false);
        navigate("/Login");
        setRegister(data.data.message);
        data.data;
        setToken(data.data.token);
        localStorage.setItem("TokenLocal", data.data.token);
        data.data.token;
      })
      .catch((error) => {
        setIsLoading(false);

        setUserError(error.response.data.message);
      });
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: myschema,
    onSubmit: handleRegister,
  });
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-16">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400">
          Create Your Account
        </h2>

        {userError && (
          <div className="p-3 text-sm text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-md border border-red-300 dark:border-red-700">
            {userError}
          </div>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Field Generator */}
          {[
            { name: "name", type: "text", placeholder: "Full Name" },
            { name: "email", type: "email", placeholder: "Email" },
            { name: "password", type: "password", placeholder: "Password" },
            {
              name: "rePassword",
              type: "password",
              placeholder: "Confirm Password",
            },
            { name: "phone", type: "tel", placeholder: "Phone Number" },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                {field.placeholder}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[field.name]}
                placeholder={`Enter your ${field.placeholder.toLowerCase()}...`}
                className="w-full px-4 py-2 text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <p className="mt-1 text-xs text-red-500">
                  {formik.errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-sm transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loadingsmall /> : "Register Now"}
          </button>
        </form>
      </div>
    </div>
  );
}
