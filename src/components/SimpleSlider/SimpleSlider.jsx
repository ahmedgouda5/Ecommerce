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
        data.data.data;
      })
      .catch((error) => {
        setCategories(error);
        error;
      });
  }
  useEffect(() => {
    getCategory();
  }, []);

  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    swipeToSlide: true,
    // slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,

          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,

          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto px-3 md:px-0">
      <h1 className="font-medium text-3xl pb-7">All Categories</h1>
      <div>
        <Slider {...settings} className="md:w-full w-80 md:mx-0 mx-auto ">
          {categories.map((category) => (
            <Link key={category?._id} to={`/SubCategories/${category._id}`}>
              {" "}
              <div className="px-6">
                <div className="relative overflow-hidden group cursor-pointer">
                  <img
                    className="w-full h-[200px] rounded-md transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:blur-sm group-hover:shadow-2xl"
                    src={category?.image}
                    alt={category?.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <h2 className="text-white text-lg font-semibold">
                      {category?.name}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
