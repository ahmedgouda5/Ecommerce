import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../Context/Context";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Loading from "../../components/loading/Loading";

export default function AllOrders() {
  const [orders, setOrders] = useState(null);
  const { token } = useContext(userContext);
  const { id } = jwtDecode(token);
  async function getAllOrders() {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
    );
    console.log(data);
    setOrders(data);
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      {orders ? (
        orders.map((order) => (
          <div className="order border-2 border-slate-200 rounded p-4 mt-4">
            <div className="flex justify-between items-center ">
              <div>
                <h1>order id </h1>
                <h5 className="font-semibold">#{order.id}</h5>
              </div>
              <div>
                {order.isDelivered ? (
                  <span className="btn btn-red-500  inline-block bg-lime-500 mx-2 text-white">
                    تم التوصيل
                  </span>
                ) : (
                  <span className="btn btn-red-500  inline-block bg-red-700 mx-2 text-white">
                    قيد التوصيل
                  </span>
                )}
                {order.isPaid ? (
                  <span className="btn btn-red-500  inline-block  bg-blue-700 text-white">
                    تم مدفوع
                  </span>
                ) : (
                  <span className="btn btn-red-500  inline-block  bg-blue-700 text-white">
                    غير مدفوع
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-12 ">
              {order.cartItems.map((product)=>(<div className="product col-span-12 md:col-span-4 lg:col-span-3 border-2 border-slate-200 rounded overflow-hidden p-3">
                  <img
                    src={product.product.imageCover}
                    className="w-full"
                  />
                  <h3 className="font-bold line-clamp-2">{product.product.title}</h3>
                  <span className="mt-2 font-semibold text-primary">{product.price} EGP</span>
                </div>))}
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
}
 
