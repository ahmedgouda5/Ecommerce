import ProductsRecent from "../ProductsRecent/ProductsRecent";
import FirstSlideHome from "../FirstSlideHome/FirstSlideHome";
import SimpleSlider from "../SimpleSlider/SimpleSlider";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <FirstSlideHome />

      {/* Categories Section */}
      <SimpleSlider />

      {/* Featured Products */}
      <ProductsRecent />

      {/* CTA Section */}
      <section className="container-app py-12 md:py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary-dark/20 border border-primary/20 p-8 md:p-12">
          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              New Season Collection
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              Discover the latest trends and premium products in our new collection
            </p>
            <Link to="/Products" className="btn-primary btn-lg">
              <i className="fa-solid fa-bag-shopping"></i>
              Shop Now
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-dark/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
