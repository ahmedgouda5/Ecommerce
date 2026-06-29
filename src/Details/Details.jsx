import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import style from "./Details.module.css";
import Loading from "../components/Loading/Loading";
import Slider from "react-slick";
import { CartContext } from "../Context/CartContext";
import { TokenContext } from "../Context/TokenContext";
import toast from "react-hot-toast";
import ProductCard from "../components/ProductsRecent/ProductCard";

export default function Details() {
  let { addProductCart } = useContext(CartContext);
  let { token } = useContext(TokenContext);
  let navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  let { id } = useParams();

  function getDetailsProducts(id) {
    setIsLoading(true);
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((data) => {
        setDetails(data.data.data);
        setIsLoading(false);
        getRelatedProducts(data.data.data.category._id);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }

  function getRelatedProducts(categoryId) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`)
      .then((data) => {
        setRelatedProducts(data.data.data.slice(0, 6));
      })
      .catch(() => {});
  }

  useEffect(() => {
    getDetailsProducts(id);
    setQuantity(1);
    setWishlisted(false);
    window.scrollTo(0, 0);
  }, [id]);

  function handleAddToCart() {
    if (!token) {
      toast.error("Please login to add items to cart");
      navigate("/Login");
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addProductCart(details.id);
    }
    toast.success(`Added ${quantity} item(s) to cart!`);
  }

  function handleBuyNow() {
    if (!token) {
      toast.error("Please login to purchase");
      navigate("/Login");
      return;
    }
    addProductCart(details.id);
    navigate("/Cart");
  }

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: details?.title,
        text: details?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  }

  if (isLoading) return <Loading />;

  if (!details) {
    return (
      <div className="container-app py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
        <Link to="/Products" className="btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  const discount = details.priceAfterDiscount
    ? Math.round(((details.price - details.priceAfterDiscount) / details.price) * 100)
    : 0;

  const allImages = [details.imageCover, ...(details.images || [])];

  return (
    <div className="animate-fade-in">
      <div className="container-app py-6 md:py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6 flex-wrap">
          <Link to="" className="hover:text-primary transition-colors">Home</Link>
          <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
          <Link to="/Products" className="hover:text-primary transition-colors">Products</Link>
          <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
          <Link to={`/Catrgories`} className="hover:text-primary transition-colors">
            {details.category?.name}
          </Link>
          <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
          <span className="text-neutral-300 truncate max-w-[200px]">{details.title}</span>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-secondary-900 rounded-2xl overflow-hidden border border-neutral-800 group">
              <img
                src={allImages[selectedImage]}
                alt={details.title}
                className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
              />
              {discount > 0 && (
                <span className="absolute top-4 left-4 badge bg-error text-white text-sm px-3 py-1">
                  -{discount}% OFF
                </span>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto scroll-thin pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === idx
                        ? "border-primary shadow-glow"
                        : "border-neutral-800 hover:border-neutral-600"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${details.title} ${idx + 1}`}
                      className="w-full h-full object-contain p-2 bg-secondary-900"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category & Brand */}
            <div className="flex items-center gap-3">
              <span className="badge-primary">{details.category?.name}</span>
              {details.brand?.name && (
                <span className="badge bg-surface text-neutral-400 border border-neutral-700">
                  {details.brand.name}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
              {details.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fa-solid fa-star text-sm ${
                      star <= Math.round(details.ratingsAverage)
                        ? "text-primary"
                        : "text-neutral-700"
                    }`}
                  ></i>
                ))}
              </div>
              <span className="text-sm text-neutral-400">
                {details.ratingsAverage} ({details.ratingsQuantity} reviews)
              </span>
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white">
                {details.priceAfterDiscount || details.price}
                <span className="text-base font-normal text-neutral-500 ml-1">EGP</span>
              </span>
              {details.priceAfterDiscount && (
                <>
                  <span className="text-xl text-neutral-600 line-through">
                    {details.price} EGP
                  </span>
                  <span className="badge bg-success/20 text-success">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${
                details.quantity > 0 ? "bg-success" : "bg-error"
              }`}></div>
              <span className={`text-sm font-medium ${
                details.quantity > 0 ? "text-success" : "text-error"
              }`}>
                {details.quantity > 0 ? `In Stock (${details.quantity} available)` : "Out of Stock"}
              </span>
            </div>

            {/* Description */}
            <p className="text-neutral-400 leading-relaxed">
              {details.description}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">Quantity</label>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-surface border border-neutral-700 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  >
                    <i className="fa-solid fa-minus text-xs"></i>
                  </button>
                  <span className="w-12 text-center text-white font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(details.quantity || 99, quantity + 1))}
                    className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  >
                    <i className="fa-solid fa-plus text-xs"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                disabled={details.quantity === 0}
                className="btn-primary btn-lg flex-1"
              >
                <i className="fa-solid fa-bag-shopping"></i>
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                disabled={details.quantity === 0}
                className="btn btn-lg bg-white text-secondary-800 font-semibold hover:bg-neutral-200 flex-1"
              >
                <i className="fa-solid fa-bolt"></i>
                Buy Now
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  if (!token) {
                    toast.error("Please login to add to wishlist");
                    navigate("/Login");
                    return;
                  }
                  setWishlisted(!wishlisted);
                  toast.success(wishlisted ? "Removed from wishlist" : "Added to wishlist!");
                }}
                className={`btn btn-md flex-1 ${
                  wishlisted
                    ? "bg-error/10 text-error border border-error/30"
                    : "btn-secondary"
                }`}
              >
                <i className={`${wishlisted ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                {wishlisted ? "Wishlisted" : "Add to Wishlist"}
              </button>
              <button onClick={handleShare} className="btn-secondary btn-md flex-1">
                <i className="fa-solid fa-share-nodes"></i>
                Share
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <i className="fa-solid fa-truck text-primary"></i>
                <div>
                  <p className="text-xs font-medium text-neutral-300">Free Shipping</p>
                  <p className="text-xs text-neutral-500">Orders over 500 EGP</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <i className="fa-solid fa-rotate-left text-primary"></i>
                <div>
                  <p className="text-xs font-medium text-neutral-300">Easy Returns</p>
                  <p className="text-xs text-neutral-500">30 day returns</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <i className="fa-solid fa-shield-halved text-primary"></i>
                <div>
                  <p className="text-xs font-medium text-neutral-300">Secure Payment</p>
                  <p className="text-xs text-neutral-500">SSL encrypted</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <i className="fa-solid fa-headset text-primary"></i>
                <div>
                  <p className="text-xs font-medium text-neutral-300">24/7 Support</p>
                  <p className="text-xs text-neutral-500">Dedicated help</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold text-white mb-6">
              <span className="text-primary">Related</span> Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
