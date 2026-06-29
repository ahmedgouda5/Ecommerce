import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Brands() {
  function getbrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }

  let { data, isLoading, error } = useQuery({
    queryKey: ["brands"],
    queryFn: getbrands,
  });

  if (error) {
    return (
      <div className="container-app py-16 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-error/10 flex items-center justify-center">
          <i className="fa-solid fa-exclamation-triangle text-2xl text-error"></i>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Failed to load brands</h3>
        <p className="text-sm text-neutral-500">Please try again later</p>
      </div>
    );
  }

  return (
    <div className="container-app py-8 md:py-12 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8 flex-wrap">
        <Link to="" className="hover:text-primary transition-colors">Home</Link>
        <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
        <span className="text-neutral-300">Brands</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white">
          <span className="text-primary">All</span> Brands
        </h1>
        <p className="text-sm text-neutral-500 mt-1">Shop by your favorite brands</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="card-hover p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-3 skeleton rounded-full" />
                <div className="h-4 w-3/4 mx-auto skeleton rounded" />
              </div>
            ))
          : data?.data.data.map((brand) => (
              <Link key={brand._id} to={`/Products?brand=${brand._id}`}>
                <div className="card-hover p-6 text-center group">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-secondary-900 border border-neutral-800 group-hover:border-primary/30 transition-colors">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-neutral-300 group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
