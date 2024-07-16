import React, { useContext } from "react";
import { wishlistContext } from "../../Context/Wishlist.context";
import Loading from "../../components/loading/Loading";

export default function Wishlist() {
  const { wishlist , removeProduct } = useContext(wishlistContext);
  return (
    <>
      {wishlist == null ? (
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
            {wishlist.length == 0 ? (
              <div className="flex justify-center gap-3 items-center flex-col py-16">
                <span>there are not items yet</span>
                <Link to={"/"} className="btn form-control bg-primary">
                  Add your first product to wishlist
                </Link>
              </div>
            ) : (
              <>
                {wishlist.data.map((product) => (
                  <div
                    key={product._id}
                    className="product grid grid-cols-12 gap-3 mt-5"
                  >
                    <div className="col-span-1">
                      <img
                        src={product.imageCover}
                        alt=""
                        className="w-full "
                      />
                    </div>
                    <div className="flex justify-between items-center col-span-11">
                      <div>
                        <h1>product Name:{product.title}</h1>
                        <h1 className="my-2 text-primary">
                          product price:{product.price}
                        </h1>
                        <span
                         onClick={() => {
                          removeProduct({ id:product.id });
                        }} 
                         className="cursor-pointer px-1 py-1 rounded-md text-white bg-red-700 inline-block">
                          <i class="fa-solid fa-trash-can text-sm "></i> remove
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}
