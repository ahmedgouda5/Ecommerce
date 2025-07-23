import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";
import Loadingsmall from "../components/Loadingsmall/Loadingsmall";

export default function WishListContextProvider() {
  const [loading, setLoading] = useState(true);
  let { addProductCart } = useContext(CartContext);
  const [wishlists, setWishlists] = useState(null);

  function getProductWishlist() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers: { token: localStorage.getItem("TokenLokal") },
      })
      .then((data) => {
        setWishlists(data.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getProductWishlist();
  }, []);

  function removeFromWishList(id) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        headers: { token: localStorage.getItem("TokenLokal") },
      })
      .then(() => {
        toast.success("Successfully Deleted!");
        setWishlists((products) =>
          products.filter((product) => product._id !== id)
        );
      })
      .catch(() => {});
  }

  if (loading) return <Loadingsmall />;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto p-5 rounded-lg flex-1">
        {wishlists?.length ? (
          <h1 className="text-3xl font-bold mb-8 text-black">
            Your Favorites
          </h1>
        ) : null}

        {wishlists?.length === 0 && (
          <div className="flex flex-col justify-center items-center my-24">
            <i className="fa-regular fa-heart text-7xl text-black font-medium"></i>
            <p className="font-medium text-3xl py-5">You Have No Favorites</p>
          </div>
        )}

        {wishlists?.map((wishlist) => (
          <div
            key={wishlist._id}
            className="flex items-center justify-between border-b border-gray-300 py-4 transition-all duration-300 hover:bg-gray-200"
          >
            <div className="flex items-center gap-4">
              <img
                src={wishlist.imageCover}
                alt={wishlist.slug}
                className="w-20 h-20 rounded-lg object-cover shadow-md"
              />
              <div>
                <h3 className="text-lg font-bold">{wishlist.slug}</h3>
                <p className="text-green-600 font-semibold">
                  {wishlist.price} EGP
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => addProductCart(wishlist._id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishList(wishlist._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

