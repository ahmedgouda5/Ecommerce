import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function apiForgetPassword(email) {
    return axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", email)
      .then((data) => {
        toast.success("Reset code sent to your email");
        setLoading(false);
        navigate("/VerifyCode");
        return data;
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response?.data?.message || "Failed to send reset code");
      });
  }

  let myschema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: myschema,
    onSubmit: (values) => {
      apiForgetPassword(values);
      setLoading(true);
    },
  });

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-warning/10 flex items-center justify-center">
            <i className="fa-solid fa-key text-warning text-xl"></i>
          </div>
          <h1 className="text-2xl font-display font-bold text-white mb-2">Reset Password</h1>
          <p className="text-sm text-neutral-500">
            Enter your email and we&apos;ll send you a reset code
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

            <button
              disabled={!(formik.isValid && formik.dirty) || loading}
              type="submit"
              className="btn-primary btn-lg w-full"
            >
              {loading ? (
                <><i className="fa-solid fa-spinner fa-spin"></i> Sending...</>
              ) : (
                <><i className="fa-solid fa-paper-plane"></i> Send Reset Code</>
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
