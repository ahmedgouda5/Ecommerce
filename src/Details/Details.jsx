import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";
import Loading from "../components/Loading/Loading";
import Slider from "react-slick";
import { CartContext } from "../Context/CartContext";

export default function Details() {
  let { addProductCart } = useContext(CartContext);
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();
  function getDetailsProducts(id) {
    setIsLoading(true);
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((data) => {
        setDetails(data.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setDetails(error);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getDetailsProducts(id);
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
  };
  return (
    <>
      <div className="container mx-auto mb-10">
        <div className="flex justify-center items-center  ">
          {isLoading ? <Loading /> : ""}
        </div>
        <div className="flex mt-5 flex-col md:flex-row">
          <div className="md:w-1/4">
            <Slider {...settings} className="md:w-full w-80 md:mx-0 mx-auto">
              {details?.images.map((src, idx) => (
                <img className="" key={idx} src={src} />
              ))}
            </Slider>
          </div>
          <div className="w-3/4 self-center md:mx-10  mt-12">
            <h2 className="font-bold text-3xl pb-4">{details?.slug}</h2>{" "}
            <p className="my-2 text-green-500 font-medium text-xl">
              {" "}
              {details?.category.name}
            </p>
            <p className="text-gray-600 text-[18px]">{details?.description}</p>
            <div className="flex justify-between items-center py-2">
              <p className="text-xl">
                Price :{details?.price}
                <span className="font-semibold"> EGP</span>{" "}
              </p>
              <p className="font-medium text-xl">
                {details?.ratingsAverage}
                <i className={`fa-solid fa-star ${style.icon} px-2 `}></i>
              </p>
            </div>
            <div className="text-center mt-5 mb-6 ">
              {" "}
              <button
                onClick={() => {
                  addProductCart(details.id);
                }}
                className="w-[75%]  bg-green-500 text-white py-1 rounded-md"
              >
                + Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
