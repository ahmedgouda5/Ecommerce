import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function SubCategories() {
  const [subcategories, setsubcatagrioes] = useState(null);
  let { id } = useParams();
  function getSubCategories(id) {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
      .then((data) => {
        setsubcatagrioes(data.data.data);
      })
      .catch((error) => {});
  }
  useEffect(() => {
    getSubCategories(id);
  }, [id]);
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center cursor-pointer">
      <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg">
        <img
          src={subcategories?.image}
          alt=""
          className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h2 className="text-white text-2xl font-bold">
            {subcategories?.name}
          </h2>
        </div>
      </div>
    </div>
  );
}
