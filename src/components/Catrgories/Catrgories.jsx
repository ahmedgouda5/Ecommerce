import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Categories() {
  function getCategories() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (error) {
    return (
      <div className="container-app py-16 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-error/10 flex items-center justify-center">
          <i className="fa-solid fa-exclamation-triangle text-2xl text-error"></i>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Failed to load categories</h3>
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
        <span className="text-neutral-300">Categories</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white">
          <span className="text-primary">Browse</span> Categories
        </h1>
        <p className="text-sm text-neutral-500 mt-1">Find what you&apos;re looking for</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="card-hover overflow-hidden">
                <div className="aspect-square skeleton" />
                <div className="p-4">
                  <div className="h-4 w-3/4 mx-auto skeleton rounded" />
                </div>
              </div>
            ))
          : data?.data.data.map((category) => (
              <Link key={category._id} to={`/SubCategories/${category._id}`}>
                <div className="card-hover overflow-hidden group">
                  <div className="aspect-square overflow-hidden bg-secondary-900">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={category.image}
                      alt={category.slug}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-semibold text-neutral-200 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
