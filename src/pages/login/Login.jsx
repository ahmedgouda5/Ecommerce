import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { data } from "autoprefixer";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/Context";

export default function Login() {
  const [ErrorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const { token, setToken } = useContext(userContext);

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email"),

    password: Yup.string()
      .required("Password is required")
      .matches(passwordRegex, "Password is not valid"),
  });

  async function handleSubmit(values) {
    let id;
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
        method: "POST",
        data: values,
      };
      id = toast.loading("Waiting...");
      const { data } = await axios.request(options);

      toast.dismiss(id);
      toast.success(" User logged successfully");
      setTimeout(() => {
        if (data.message == "success") {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          navigate("/");
        }
      }, 1000);
    } catch (error) {
      toast.dismiss(id);
      toast.error(error.response.data.message);
      setErrorMsg(error.response.data.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <section>
        <h1 className="text-green-600 text-bold text-2xl mb-3">
          <i class="fa-regular fa-circle-user"></i>
          <span>Register Now</span>
        </h1>
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col ">
            <input
              type="text"
              placeholder="Email"
              className="form-control flex-grow "
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-500">* {formik.errors.email}</div>
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Password"
              className="form-control flex-grow"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-500">* {formik.errors.password}</div>
            ) : (
              ""
            )}
            {ErrorMsg ? <div className="text-red-500">* {ErrorMsg}</div> : ""}
          </div>

          <button className="btn bg-green-600" type="submit">
            Login
          </button>
        </form>
        <Link
          to="/auth/forget"
          className=" flex justify-center items-center  hover:text-primary transition-all duration-300 inline-block">
          <h1 className="mt-3  text-bold">forget your password ?</h1>
        </Link>
      </section>
    </>
  );
}
