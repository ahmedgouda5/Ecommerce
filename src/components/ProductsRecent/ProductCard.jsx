import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { TokenContext } from "../../Context/TokenContext";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  let { addProductCart } = useContext(CartContext);
  let { token } = useContext(TokenContext);
  let navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!token) {
      toast.error("Please login to add items to cart");
      navigate("/Login");
      return;
    }
    addProductCart(product.id);
    toast.success("Added to cart!");
  }

  function handleWishlist(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!token) {
      toast.error("Please login to add items to wishlist");
      navigate("/Login");
      return;
    }
    setWishlisted(!wishlisted);
    toast.success(wishlisted ? "Removed from wishlist" : "Added to wishlist!");
  }

  function handleQuickView(e) {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/Details/${product.id}`);
  }

  const discount = product.priceAfterDiscount
    ? Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100)
    : 0;

  const isNew = product.createdAt && (Date.now() - new Date(product.createdAt).getTime()) < 7 * 24 * 60 * 60 * 1000;
  const isOutOfStock = product.quantity === 0;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/Details/${product.id}`} className="block">
        <div className="card-hover overflow-hidden">
          {/* Image Section */}
          <div className="relative aspect-square bg-secondary-900 overflow-hidden">
            {/* Loading Skeleton */}
            {!imgLoaded && (
              <div className="absolute inset-0 skeleton" />
            )}

            <img
              src={product.imageCover}
              alt={product.name}
              className={`w-full h-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImgLoaded(true)}
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              {isNew && (
                <span className="badge bg-secondary-700 text-primary border border-primary/30">
                  NEW
                </span>
              )}
              {discount > 0 && (
                <span className="badge bg-error/90 text-white">
                  -{discount}%
                </span>
              )}
              {isOutOfStock && (
                <span className="badge bg-neutral-800 text-neutral-400">
                  OUT OF STOCK
                </span>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={handleWishlist}
              className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                wishlisted
                  ? "bg-error text-white shadow-lg"
                  : "bg-secondary-800/80 backdrop-blur-sm text-neutral-400 hover:text-error hover:bg-secondary-800"
              } ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
              <i className={`${wishlisted ? "fa-solid" : "fa-regular"} fa-heart text-sm`}></i>
            </button>

            {/* Quick View Button */}
            <button
              onClick={handleQuickView}
              className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-secondary-800/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg transition-all duration-300 hover:bg-primary hover:text-secondary-800 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <i className="fa-regular fa-eye mr-1.5"></i>
              Quick View
            </button>

            {/* Out of Stock Overlay */}
            {isOutOfStock && (
              <div className="absolute inset-0 bg-secondary-900/60 flex items-center justify-center">
                <span className="text-neutral-400 font-medium text-sm">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-4">
            {/* Category */}
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {product.category?.name}
            </span>

            {/* Title */}
            <h3 className="text-sm font-medium text-neutral-200 mt-1.5 line-clamp-2 group-hover:text-white transition-colors min-h-[2.5rem]">
              {product.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fa-solid fa-star text-xs ${
                      star <= Math.round(product.ratingsAverage)
                        ? "text-primary"
                        : "text-neutral-700"
                    }`}
                  ></i>
                ))}
              </div>
              <span className="text-xs text-neutral-500">
                ({product.ratingsQuantity || 0})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-lg font-bold text-white">
                {product.priceAfterDiscount || product.price}
                <span className="text-xs font-normal text-neutral-500 ml-1">EGP</span>
              </span>
              {product.priceAfterDiscount && (
                <span className="text-sm text-neutral-600 line-through">
                  {product.price} EGP
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="px-4 pb-4">
            <button
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary/10 text-primary text-sm font-semibold rounded-lg border border-primary/20 hover:bg-primary hover:text-secondary-800 hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-primary/10 disabled:hover:text-primary disabled:hover:border-primary/20"
            >
              <i className="fa-solid fa-bag-shopping text-xs"></i>
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
