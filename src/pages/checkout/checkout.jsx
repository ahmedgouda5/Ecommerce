import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { cartContext } from "./../../Context/Cart.Context";
import { userContext } from "../../Context/Context";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartInfo, setCartInfo } = useContext(cartContext);
  const { token } = useContext(userContext);
  const [order, setOrder] = useState(null);
  const navigate=useNavigate()

  async function createCashOrder(values) {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.data._id}`,
      method: "POST",
      headers: {
        token,
      },
      data: {
        values,
      },
    };
    let { data } = await axios.request(options);
    setCartInfo([]);
    navigate("/allorders")
  }
  async function createOnlineOrder(values) {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.data._id}?url=http://localhost:5173`,
      method: "POST",
      headers: {
        token,
      },
      data: {
        values,
      },
    };
    let { data } = await axios.request(options);
    console.log(data);
    toast.loading("redirect to payment gateway");
    setTimeout(() => {
      if (data.status == "success") {
        window.location.href = data.session.url;
      }
    }, 2000);
  }

  const formik = useFormik({
    initialValues: {
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    onSubmit: (values) => {
      if (order == "cash") createCashOrder(values);
      else createOnlineOrder(values);
    },
  });
  return (
    <>
      <h1 className="text-2xl mb-3 font-bold">shipping Address</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="city"
          name="shippingAddress.city"
          className=" mb-4 form-control w-full"
          value={formik.values.shippingAddress.city}
          onChange={formik.handleChange}
        />
        <input
          type="tel"
          placeholder="phone"
          className=" mb-4 form-control w-full"
          name="shippingAddress.phone"
          value={formik.values.shippingAddress.phone}
          onChange={formik.handleChange}
        />
        <textarea
          className="form-control w-full "
          name="shippingAddress.details"
          placeholder="details"
          value={formik.values.shippingAddress.details}
          onChange={formik.handleChange}
        ></textarea>
        <button
          onClick={() => {
            setOrder("cash");
          }}
          className=" btn bg-blue-500 mt-3 "
        >
          cash order
        </button>
        <button
          onClick={() => {
            setOrder("online ");
          }}
          className="bg-primary btn ml-3 mt-3 "
        >
          online order
        </button>
      </form>
    </>
  );
}
