import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function WishList() {
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
        toast.success("Removed from wishlist");
        setWishlists((products) => products.filter((p) => p._id !== id));
      })
      .catch(() => {});
  }

  if (loading) {
    return (
      <div className="container-app py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card p-4 flex gap-4">
              <div className="w-20 h-20 skeleton rounded-lg shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 skeleton rounded" />
                <div className="h-3 w-1/2 skeleton rounded" />
                <div className="h-4 w-1/3 skeleton rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!wishlists || wishlists.length === 0) {
    return (
      <div className="container-app py-16">
        <div className="text-center animate-fade-in-up">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-surface flex items-center justify-center">
            <i className="fa-regular fa-heart text-4xl text-neutral-600"></i>
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">Your wishlist is empty</h2>
          <p className="text-neutral-500 mb-6">Save items you love for later</p>
          <Link to="/Products" className="btn-primary btn-lg">
            <i className="fa-solid fa-arrow-left"></i>
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-app py-8 md:py-12 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8 flex-wrap">
        <Link to="" className="hover:text-primary transition-colors">Home</Link>
        <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
        <span className="text-neutral-300">Wishlist</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
        My Wishlist
        <span className="text-base font-normal text-neutral-500 ml-2">({wishlists.length} items)</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlists.map((item) => (
          <div key={item._id} className="card p-4 flex gap-4 group animate-fade-in">
            <Link to={`/Details/${item._id}`} className="shrink-0">
              <img
                src={item.imageCover}
                alt={item.slug}
                className="w-20 h-20 object-contain bg-secondary-900 rounded-lg"
              />
            </Link>
            <div className="flex-1 min-w-0">
              <Link to={`/Details/${item._id}`} className="text-sm font-medium text-neutral-200 hover:text-primary transition-colors line-clamp-2">
                {item.title}
              </Link>
              <p className="text-lg font-bold text-primary mt-1">{item.price} EGP</p>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => {
                    addProductCart(item._id);
                    toast.success("Added to cart!");
                  }}
                  className="btn-primary btn-sm flex-1"
                >
                  <i className="fa-solid fa-bag-shopping text-xs"></i>
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishList(item._id)}
                  className="btn-icon text-neutral-500 hover:text-error hover:bg-error/10"
                >
                  <i className="fa-solid fa-trash-can text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
