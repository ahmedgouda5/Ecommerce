import { useContext } from "react";
import style from "./ProductsRecent.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CartContext } from "../../Context/CartContext";
import { TokenContext } from "../../Context/TokenContext";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductsRecent() {
  function getProduct() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["ProductsRecent"],
    queryFn: getProduct,
  });

  if (error) {
    return (
      <div className="container-app py-16">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-error/10 flex items-center justify-center">
            <i className="fa-solid fa-exclamation-triangle text-2xl text-error"></i>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Something went wrong</h3>
          <p className="text-sm text-neutral-500">Unable to load products. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-app py-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            <span className="text-primary">Featured</span> Products
          </h2>
          <p className="text-sm text-neutral-500 mt-1">
            Discover our handpicked selection of premium products
          </p>
        </div>
        <Link
          to="/Products"
          className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors"
        >
          View All
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : data?.data?.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>

      {/* Mobile View All */}
      <div className="sm:hidden mt-8 text-center">
        <Link to="/Products" className="btn-outline btn-md">
          View All Products
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </Link>
      </div>
    </div>
  );
}
