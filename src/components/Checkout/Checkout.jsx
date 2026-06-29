import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function Checkout() {
  let { onlinePayment, totalprice, cartProducts, totalitems } = useContext(CartContext);

  let myschema = Yup.object().shape({
    details: Yup.string().required("Address details are required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^(?:\+20|0)?(1[0-9]{9}|2[0-9]{8}|3[0-9]{8})$/, "Must be a valid Egyptian number"),
    city: Yup.string().required("City is required"),
  });

  const formik = useFormik({
    initialValues: { details: "", phone: "", city: "" },
    validationSchema: myschema,
    onSubmit: payNow,
  });

  function payNow(values) {
    onlinePayment(values);
  }

  return (
    <div className="container-app py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8 flex-wrap">
        <Link to="" className="hover:text-primary transition-colors">Home</Link>
        <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
        <Link to="/Cart" className="hover:text-primary transition-colors">Cart</Link>
        <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
        <span className="text-neutral-300">Checkout</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Form */}
        <div className="lg:col-span-2">
          <div className="card p-6 md:p-8">
            <h2 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2">
              <i className="fa-solid fa-truck text-primary"></i>
              Shipping Address
            </h2>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              {/* Address Details */}
              <div className="space-y-1.5">
                <label htmlFor="details" className="input-label">
                  Address Details
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="details"
                    id="details"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.details}
                    placeholder="Street address, apartment, suite, etc."
                    className={`input pl-10 ${
                      formik.touched.details && formik.errors.details ? "input-error" : ""
                    }`}
                  />
                  <i className="fa-solid fa-location-dot absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm"></i>
                </div>
                {formik.touched.details && formik.errors.details && (
                  <p className="input-error-text">
                    <i className="fa-solid fa-circle-exclamation text-xs"></i>
                    {formik.errors.details}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="input-label">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder="01xxxxxxxxx"
                    className={`input pl-10 ${
                      formik.touched.phone && formik.errors.phone ? "input-error" : ""
                    }`}
                  />
                  <i className="fa-solid fa-phone absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm"></i>
                </div>
                {formik.touched.phone && formik.errors.phone && (
                  <p className="input-error-text">
                    <i className="fa-solid fa-circle-exclamation text-xs"></i>
                    {formik.errors.phone}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="space-y-1.5">
                <label htmlFor="city" className="input-label">
                  City
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    placeholder="Enter your city"
                    className={`input pl-10 ${
                      formik.touched.city && formik.errors.city ? "input-error" : ""
                    }`}
                  />
                  <i className="fa-solid fa-city absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm"></i>
                </div>
                {formik.touched.city && formik.errors.city && (
                  <p className="input-error-text">
                    <i className="fa-solid fa-circle-exclamation text-xs"></i>
                    {formik.errors.city}
                  </p>
                )}
              </div>

              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className="btn-primary btn-lg w-full mt-2"
              >
                <i className="fa-solid fa-lock"></i>
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h2 className="text-lg font-display font-semibold text-white mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Items ({totalitems})</span>
                <span className="text-neutral-200">{totalprice} EGP</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <div className="border-t border-neutral-800 pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-xl font-bold text-primary">{totalprice} EGP</span>
                </div>
              </div>
            </div>

            {/* Cart Items Preview */}
            {cartProducts && cartProducts.length > 0 && (
              <div className="border-t border-neutral-800 pt-4">
                <h3 className="text-sm font-medium text-neutral-400 mb-3">Items in cart</h3>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {cartProducts.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3">
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="w-12 h-12 object-contain bg-secondary-900 rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-neutral-300 truncate">{item.product.title}</p>
                        <p className="text-xs text-neutral-500">Qty: {item.count}</p>
                      </div>
                      <span className="text-sm text-neutral-300">{item.price} EGP</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Badge */}
            <div className="mt-6 p-3 bg-surface rounded-lg flex items-center gap-2">
              <i className="fa-solid fa-shield-halved text-success"></i>
              <span className="text-xs text-neutral-400">Secure SSL encrypted payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
