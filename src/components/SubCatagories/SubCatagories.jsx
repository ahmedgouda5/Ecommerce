import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function SubCategories() {
  const [subcategories, setsubcatagrioes] = useState(null);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  function getSubCategories(id) {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
      .then((data) => {
        setsubcatagrioes(data.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getSubCategories(id);
  }, [id]);

  if (loading) {
    return (
      <div className="container-app py-16 text-center">
        <div className="w-64 h-64 mx-auto skeleton rounded-xl"></div>
      </div>
    );
  }

  return (
    <div className="container-app py-8 md:py-12 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8 flex-wrap">
        <Link to="" className="hover:text-primary transition-colors">Home</Link>
        <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
        <Link to="/Catrgories" className="hover:text-primary transition-colors">Categories</Link>
        <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
        <span className="text-neutral-300">{subcategories?.name}</span>
      </nav>

      <div className="flex flex-col items-center">
        <div className="relative w-64 h-64 overflow-hidden rounded-xl shadow-xl group">
          <img
            src={subcategories?.image}
            alt={subcategories?.name}
            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent flex items-end">
            <h2 className="text-white text-xl font-display font-bold p-4 w-full text-center">
              {subcategories?.name}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
