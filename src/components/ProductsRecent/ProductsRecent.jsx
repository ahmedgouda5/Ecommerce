import { useContext } from "react";
import style from "./ProductsRecent.module.css";
import axios from "axios";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CartContext } from "../../Context/CartContext";

export default function ProductsRecent() {
  let { addProductCart } = useContext(CartContext);

  function getProduct() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  const { data, isLoading } = useQuery({
    queryKey: ["ProductsRecent"],
    queryFn: getProduct,
  });

  function addToWishList(productId) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/wishlist?",
        { productId },
        { headers: { token: localStorage.getItem("TokenLokal") } }
      )
      .then((data) => data)
      .catch((error) => error);
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data?.data?.data.map((product) => (
        <div
          key={product.id}
          className="md:w-1/6 p-2 relative transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between h-full">
            <Link to={`/Details/${product.id}`}>
              <img
                className="w-full h-48 object-contain p-4"
                src={product.imageCover}
                alt={product.name}
              />
              <div className="px-4 py-2">
                <h2 className="text-sm text-green-500 mb-1">{product.category.name}</h2>
                <p className="font-semibold text-base text-gray-800">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-900 font-bold">{product.price} <span className="text-sm">EGP</span></p>
                  <p className="flex items-center text-yellow-500 font-medium">
                    {product.ratingsAverage}
                    <i className="fa-solid fa-star ml-1"></i>
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex justify-between items-center px-4 pb-4 mt-auto">
              <button
                onClick={() => addProductCart(product.id)}
                className="bg-green-500 text-white px-4 py-1 rounded-md text-sm hover:bg-green-600 transition-colors"
              >
                + Add
              </button>
              <button
                onClick={() => addToWishList(product.id)}
                className="text-red-400 hover:text-red-600 transition-colors text-xl"
              >
                <i className="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
