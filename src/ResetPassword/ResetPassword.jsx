import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function apiResetPassword(valuesReset) {
    return axios
      .put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", valuesReset)
      .then(() => {
        toast.success("Password reset successfully!");
        setLoading(false);
        navigate("/Login");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Reset failed. Please try again.");
      });
  }

  let myschema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[A-Z][a-z0-9]{3,8}/, "Password must start with a capital letter")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", newPassword: "" },
    validationSchema: myschema,
    onSubmit: (values) => {
      apiResetPassword(values);
      setLoading(true);
    },
  });

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-success/10 flex items-center justify-center">
            <i className="fa-solid fa-lock-open text-success text-xl"></i>
          </div>
          <h1 className="text-2xl font-display font-bold text-white mb-2">New Password</h1>
          <p className="text-sm text-neutral-500">
            Enter your email and new password
          </p>
        </div>

        <div className="card p-6 md:p-8">
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="email" className="input-label">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="you@example.com"
                  className={`input pl-10 ${formik.touched.email && formik.errors.email ? "input-error" : ""}`}
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

            <div className="space-y-1.5">
              <label htmlFor="newPassword" className="input-label">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  id="newPassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.newPassword}
                  placeholder="Enter new password"
                  className={`input pl-10 pr-10 ${formik.touched.newPassword && formik.errors.newPassword ? "input-error" : ""}`}
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
              {formik.touched.newPassword && formik.errors.newPassword && (
                <p className="input-error-text">
                  <i className="fa-solid fa-circle-exclamation text-xs"></i>
                  {formik.errors.newPassword}
                </p>
              )}
            </div>

            <button
              disabled={!(formik.isValid && formik.dirty) || loading}
              type="submit"
              className="btn-primary btn-lg w-full"
            >
              {loading ? (
                <><i className="fa-solid fa-spinner fa-spin"></i> Resetting...</>
              ) : (
                <><i className="fa-solid fa-check-circle"></i> Reset Password</>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/Login" className="text-sm text-primary hover:text-primary-light transition-colors">
              <i className="fa-solid fa-arrow-left mr-1"></i>
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
