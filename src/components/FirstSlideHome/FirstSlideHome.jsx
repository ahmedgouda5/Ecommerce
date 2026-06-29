import imgSlideOne from "../../slider-image-3.e9246f1ed167885a8705.png";
import imgSlideTwo from "../../slider-image-4.80544bff18da9fb1af7a.jpg";
import imgSlideThree from "../../slider-image-5.009aeddf44bdc15c6619.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function FirstSlideHome() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    dotsClass: "slick-dots !bottom-4",
  };

  const slides = [
    { img: imgSlideOne, title: "Summer Collection", subtitle: "Up to 50% off on selected items" },
    { img: imgSlideTwo, title: "New Arrivals", subtitle: "Discover the latest trends" },
    { img: imgSlideThree, title: "Premium Quality", subtitle: "Shop the finest products" },
  ];

  return (
    <section className="container-app pt-6 pb-8">
      <div className="rounded-2xl overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, idx) => (
            <div key={idx} className="relative">
              <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
                <img
                  src={slide.img}
                  className="w-full h-full object-cover"
                  alt={slide.title}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 via-secondary-900/40 to-transparent">
                  <div className="h-full flex items-center px-8 md:px-16">
                    <div className="max-w-md animate-fade-in-up">
                      <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-neutral-300 text-sm md:text-base mb-4">
                        {slide.subtitle}
                      </p>
                      <Link to="/Products" className="btn-primary btn-md">
                        Shop Now
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
