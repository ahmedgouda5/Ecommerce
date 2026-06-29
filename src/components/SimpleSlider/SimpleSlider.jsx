import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function SimpleSlider() {
  const [categories, setCategories] = useState([]);

  function getCategory() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/categories")
      .then((data) => {
        setCategories(data.data.data);
      })
      .catch(() => {});
  }

  useEffect(() => {
    getCategory();
  }, []);

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    slidesToShow: 7,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="container-app py-8 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-display font-bold text-white">
            <span className="text-primary">Shop</span> by Category
          </h2>
        </div>
        <Link
          to="/Catrgories"
          className="text-sm font-medium text-primary hover:text-primary-light transition-colors flex items-center gap-1"
        >
          View All
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </Link>
      </div>

      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category._id} className="px-2">
            <Link to={`/SubCategories/${category._id}`}>
              <div className="relative overflow-hidden group cursor-pointer rounded-xl">
                <img
                  className="w-full h-[160px] md:h-[180px] object-cover transition-transform duration-500 group-hover:scale-110"
                  src={category.image}
                  alt={category.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white text-xs md:text-sm font-semibold truncate">
                    {category.name}
                  </h3>
                  <div className="w-0 group-hover:w-6 h-0.5 bg-primary transition-all duration-500 mt-1"></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}
