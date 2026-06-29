import { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../../Context/TokenContext";
import { UserContext } from "../../Context/Usercontext";

export default function Login() {
  let { setToken } = useContext(TokenContext);
  let { setUser } = useContext(UserContext);
  let navigate = useNavigate();
  const [userError, setUserError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  let myschema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .matches(/[A-Z][a-z0-9]{3,8}/, "Password must start with a capital letter")
      .required("Password is required"),
  });

  function handleLogin(values) {
    setIsLoading(true);
    setUserError(null);
    return axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .then((data) => {
        setIsLoading(false);
        setUser(data.data.user);
        setToken(data.data.token);
        localStorage.setItem("TokenLokal", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        setUserError(error.response?.data?.message || "Login failed. Please try again.");
      });
  }

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: myschema,
    onSubmit: handleLogin,
  });

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <i className="fa-solid fa-gem text-secondary-800 text-xl"></i>
          </div>
          <h1 className="text-2xl font-display font-bold text-white mb-2">
            Welcome back
          </h1>
          <p className="text-sm text-neutral-500">
            Sign in to your account to continue shopping
          </p>
        </div>

        {/* Form Card */}
        <div className="card p-6 md:p-8">
          {/* Error Alert */}
          {userError && (
            <div className="mb-6 p-4 rounded-lg bg-error/10 border border-error/30 flex items-start gap-3 animate-fade-in">
              <i className="fa-solid fa-circle-exclamation text-error mt-0.5"></i>
              <p className="text-sm text-error">{userError}</p>
            </div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="you@example.com"
                  className={`input pl-10 ${
                    formik.touched.email && formik.errors.email ? "input-error" : ""
                  }`}
                />
                <i className="fa-regular fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm"></i>
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="input-error-text">
                  <i className="fa-solid fa-circle-exclamation text-xs"></i>
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <Link
                  to="/ForgetPassword"
                  className="text-xs text-primary hover:text-primary-light transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Enter your password"
                  className={`input pl-10 pr-10 ${
                    formik.touched.password && formik.errors.password ? "input-error" : ""
                  }`}
                />
                <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm"></i>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  <i className={`fa-${showPassword ? "regular" : "solid"} fa-eye${showPassword ? "-slash" : ""} text-sm`}></i>
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="input-error-text">
                  <i className="fa-solid fa-circle-exclamation text-xs"></i>
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty) || isLoading}
              className="btn-primary btn-lg w-full"
            >
              {isLoading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  Signing in...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-right-to-bracket"></i>
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-neutral-800"></div>
            <span className="text-xs text-neutral-600">or</span>
            <div className="flex-1 h-px bg-neutral-800"></div>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-neutral-500">
            Don&apos;t have an account?{" "}
            <Link
              to="/Register"
              className="text-primary font-medium hover:text-primary-light transition-colors"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
