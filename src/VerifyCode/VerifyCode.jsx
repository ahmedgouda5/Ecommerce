import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

export default function VerifyCode() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  function apiVerifyCode(resetCode) {
    return axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", resetCode)
      .then(() => {
        setLoading(false);
        toast.success("Successfully verified!");
        navigate("/ResetPassword");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Verification failed. Please try again.");
      });
  }

  const formik = useFormik({
    initialValues: { resetCode: "" },
    onSubmit: (values) => {
      setLoading(true);
      apiVerifyCode(values);
    },
  });

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
            <i className="fa-solid fa-shield-halved text-primary text-xl"></i>
          </div>
          <h1 className="text-2xl font-display font-bold text-white mb-2">Verify Code</h1>
          <p className="text-sm text-neutral-500">
            Enter the verification code sent to your email
          </p>
        </div>

        <div className="card p-6 md:p-8">
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="resetCode" className="input-label">Verification Code</label>
              <div className="relative">
                <input
                  type="text"
                  name="resetCode"
                  id="resetCode"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.resetCode}
                  placeholder="Enter 6-digit code"
                  className="input pl-10 text-center tracking-[0.5em] text-lg font-mono"
                  maxLength={6}
                />
                <i className="fa-solid fa-key absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm"></i>
              </div>
            </div>

            <button
              disabled={!formik.values.resetCode || loading}
              type="submit"
              className="btn-primary btn-lg w-full"
            >
              {loading ? (
                <><i className="fa-solid fa-spinner fa-spin"></i> Verifying...</>
              ) : (
                <><i className="fa-solid fa-check-circle"></i> Verify Code</>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/ForgetPassword" className="text-sm text-primary hover:text-primary-light transition-colors">
              <i className="fa-solid fa-arrow-left mr-1"></i>
              Resend code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
