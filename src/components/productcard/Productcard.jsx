import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/Cart.Context";
import { wishlistContext } from "../../Context/Wishlist.context";



export default function Productard({ productInfo }) {
  const { imageCover, category, title, price, ratingsAverage, id } =
    productInfo;
  const { addProductToCart } = useContext(cartContext);
  const { addWishProduct } = useContext(wishlistContext);

  return (
    <>
      <div className="col-span-4 md:col-span-3 lg:col-span-2 rounded-md overflow-hidden shadow-lg">
        <div className="relative">
          <div className="overlay  opacity-0 hover:opacity-100 transition-opacity duration-300   gap-3 absolute bg-opacity-20 bg-slate-500 left-0 top-0 right-0 bottom-0 flex justify-center items-center ">
            <Link
              onClick={()=>{addWishProduct(id)}}
              className=" font-bold  hover:rotate-6 hover:scale-110 transition:transform duration-300 w-10 h-10 cursor-pointer bg-primary  flex justify-center items-center text-white  rounded-full"
            >
              <i class="fa-solid fa-heart"></i>
            </Link>
            <div
              onClick={() => {
                addProductToCart(id);
              }}
              className=" font-bold hover:rotate-6 hover:scale-110 transition:transform duration-300  w-10 h-10 cursor-pointer bg-primary  flex justify-center items-center text-white  rounded-full"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <Link
              to={`/product/${id}`}
              className=" font-bold  hover:rotate-6 hover:scale-110 transition:transform duration-300 w-10 h-10 cursor-pointer bg-primary  flex justify-center items-center text-white  rounded-full"
            >
              <i class="fa-solid fa-eye"></i>
            </Link>
          </div>
          <img className="w-full " src={imageCover} alt="" />
        </div>
        <div className="p-4   ">
          <h3 className="text-primary">{category.name}</h3>
          <h2 className="font-semibold line-clamp-2">{title}</h2>
          <div className="flex justify-between items-center py-3">
            <span>{price} EGP</span>
            <span>
              {ratingsAverage} <i class="fa-solid fa-star text-yellow-500"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
