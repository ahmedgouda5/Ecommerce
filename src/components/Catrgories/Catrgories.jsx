import axios from "axios";
import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Categories() {
  function getCategories() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }

  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  if (isLoading) {
    return (
      <div className="flex justify-center mb-6">
        {isLoading ? <Loading /> : null}
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className=" text-4xl font-medium mb-7">Categories</h1>
      {/* <div className="flex justify-center mb-6">
        {isLoading ? <Loading /> : null}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 cursor-pointer">
        {data?.data.data.map((category) => (
          <Link key={category._id} to={`/SubCategories/${category._id}`}>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
              <img
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
                src={category.image}
                alt={category.slug}
              />
              <div className="p-4">
                <h3 className="text-center font-semibold text-lg text-green-500 mb-2">
                  {category.name}
                </h3>
                <p className="text-center text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
