import { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../../Context/TokenContext";

export default function Register() {
  let { setToken } = useContext(TokenContext);
  let navigate = useNavigate();
  const [userError, setUserError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  let myschema = Yup.object().shape({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(3, "Must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .matches(/[A-Z][a-z0-9]{3,8}/, "Password must start with a capital letter")
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^(?:\+20|0)?(1[0-9]{9}|2[0-9]{8}|3[0-9]{8})$/, "Must be a valid Egyptian number"),
  });

  function handleRegister(values) {
    setIsLoading(true);
    setUserError(null);
    return axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .then((data) => {
        setIsLoading(false);
        setToken(data.data.token);
        localStorage.setItem("TokenLokal", data.data.token);
        navigate("/Login");
      })
      .catch((error) => {
        setIsLoading(false);
        setUserError(error.response?.data?.message || "Registration failed. Please try again.");
      });
  }

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", rePassword: "", phone: "" },
    validationSchema: myschema,
    onSubmit: handleRegister,
  });

  const fields = [
    { name: "name", type: "text", label: "Full Name", placeholder: "John Doe", icon: "fa-user" },
    { name: "email", type: "email", label: "Email Address", placeholder: "you@example.com", icon: "fa-envelope" },
    { name: "password", type: "password", label: "Password", placeholder: "Create a password", icon: "fa-lock", hasToggle: true, toggleKey: "showPassword" },
    { name: "rePassword", type: "password", label: "Confirm Password", placeholder: "Confirm your password", icon: "fa-lock", hasToggle: true, toggleKey: "showRePassword" },
    { name: "phone", type: "tel", label: "Phone Number", placeholder: "01xxxxxxxxx", icon: "fa-phone" },
  ];

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <i className="fa-solid fa-gem text-secondary-800 text-xl"></i>
          </div>
          <h1 className="text-2xl font-display font-bold text-white mb-2">
            Create your account
          </h1>
          <p className="text-sm text-neutral-500">
            Join LuxeStore and start shopping today
          </p>
        </div>

        {/* Form Card */}
        <div className="card p-6 md:p-8">
          {userError && (
            <div className="mb-6 p-4 rounded-lg bg-error/10 border border-error/30 flex items-start gap-3 animate-fade-in">
              <i className="fa-solid fa-circle-exclamation text-error mt-0.5"></i>
              <p className="text-sm text-error">{userError}</p>
            </div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {fields.map((field) => {
              const toggleState = field.toggleKey === "showPassword" ? showPassword : field.toggleKey === "showRePassword" ? showRePassword : false;
              const setToggleState = field.toggleKey === "showPassword" ? setShowPassword : field.toggleKey === "showRePassword" ? setShowRePassword : null;
              const inputType = field.type === "password" ? (toggleState ? "text" : "password") : field.type;

              return (
                <div key={field.name} className="space-y-1.5">
                  <label htmlFor={field.name} className="input-label">
                    {field.label}
                  </label>
                  <div className="relative">
                    <input
                      type={inputType}
                      id={field.name}
                      name={field.name}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values[field.name]}
                      placeholder={field.placeholder}
                      className={`input pl-10 ${field.hasToggle ? "pr-10" : ""} ${
                        formik.touched[field.name] && formik.errors[field.name] ? "input-error" : ""
                      }`}
                    />
                    <i className={`fa-solid ${field.icon} absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm`}></i>
                    {field.hasToggle && (
                      <button
                        type="button"
                        onClick={() => setToggleState(!toggleState)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                      >
                        <i className={`fa-${toggleState ? "regular" : "solid"} fa-eye${toggleState ? "-slash" : ""} text-sm`}></i>
                      </button>
                    )}
                  </div>
                  {formik.touched[field.name] && formik.errors[field.name] && (
                    <p className="input-error-text">
                      <i className="fa-solid fa-circle-exclamation text-xs"></i>
                      {formik.errors[field.name]}
                    </p>
                  )}
                </div>
              );
            })}

            <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty) || isLoading}
              className="btn-primary btn-lg w-full mt-2"
            >
              {isLoading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  Creating account...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-user-plus"></i>
                  Create Account
                </>
              )}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-neutral-800"></div>
            <span className="text-xs text-neutral-600">or</span>
            <div className="flex-1 h-px bg-neutral-800"></div>
          </div>

          <p className="text-center text-sm text-neutral-500">
            Already have an account?{" "}
            <Link to="/Login" className="text-primary font-medium hover:text-primary-light transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
