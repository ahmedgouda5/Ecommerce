import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/Cart.Context";
import Loading from "./../../components/loading/Loading";

export default function Cart() {
  const { cartInfo, removeItem, updateProductCount, clearAllItem } = useContext(cartContext);

  return (
    <>
      {cartInfo == null ? (
        <Loading />
      ) : (
        <section>
          <div className="bg-slate-100 p-5 rounded-md">
            <div className="flex gap-3 items-center ">
              <h1 className="text-2xl">Shop cart </h1>
              <span>
                <i class="fa-solid fa-cart-shopping text-lg"></i>
              </span>
            </div>
            {cartInfo.length == 0 ? (
              <div className="flex justify-center gap-3 items-center flex-col py-16">
                <span>there are not items yet</span>
                <Link to={"/"} className="btn form-control bg-primary">
                  Add your first product to cart
                </Link>
              </div>
            ) : (
              <>
                {cartInfo.data.products.map((product) => (
                  <div
                    key={product._id}
                    className="product grid grid-cols-12 gap-3 mt-5"
                  >
                    <div className="col-span-1">
                      <img
                        src={product.product.imageCover}
                        alt=""
                        className="w-full "
                      />
                    </div>
                    <div className="flex justify-between items-center col-span-11">
                      <div>
                        <h1>product Name:{product.product.title}</h1>
                        <h1 className="my-2 text-primary">
                          product price:{product.price}
                        </h1>
                        <span
                          onClick={() => {
                            removeItem({ id: product.product.id });
                          }}
                          className="cursor-pointer px-1 py-1 rounded-md text-white bg-red-700 inline-block"
                        >
                          <i class="fa-solid fa-trash-can text-sm "></i> remove
                        </span>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            updateProductCount({
                              id: product.product.id,
                              count: product.count + 1,
                            });
                          }}
                          className=" px-2 py-1 text-white rounded-md bg-primary"
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <span className="mx-3">{product.count}</span>
                        <button
                          onClick={() => {
                            updateProductCount({
                              id: product.product.id,
                              count: product.count - 1,
                            });
                          }}
                          className=" px-2 py-1 text-white rounded-md bg-primary"
                        >
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={clearAllItem}
                  className="btn bg-red-600 mt-4 ms-auto block"
                >
                  clear cart
                </button>
              </>
            )}
          </div>
          <Link to={"/checkout"} className="flex justify-end my-2 items-center">
            <button 
            className="btn  bg-primary form-control text-lg ">
              next step <i class="fa-solid fa-greater-than"></i>
            </button>
          </Link>
        </section>
      )}
    </>
  );
}
