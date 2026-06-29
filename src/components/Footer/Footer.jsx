import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { label: "All Products", to: "/Products" },
      { label: "Categories", to: "/Catrgories" },
      { label: "Brands", to: "/Brands" },
      { label: "New Arrivals", to: "/Products?sort=newest" },
    ],
    Account: [
      { label: "My Orders", to: "/Allorders" },
      { label: "Wishlist", to: "/WishList" },
      { label: "Cart", to: "/Cart" },
      { label: "Checkout", to: "/Checkout" },
    ],
    Support: [
      { label: "Contact Us", to: "#" },
      { label: "Shipping Info", to: "#" },
      { label: "Returns", to: "#" },
      { label: "FAQ", to: "#" },
    ],
  };

  return (
    <footer className="bg-secondary-900 border-t border-neutral-800">
      {/* Newsletter Section */}
      <div className="container-app py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-surface rounded-2xl border border-neutral-800">
          <div>
            <h3 className="text-xl font-display font-semibold text-white mb-1">
              Stay in the loop
            </h3>
            <p className="text-sm text-neutral-400">
              Get notified about new products, sales, and exclusive offers.
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-2.5 bg-secondary-800 border border-neutral-700 rounded-lg text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            />
            <button type="button" className="btn-primary btn-md shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-app pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <i className="fa-solid fa-gem text-secondary-800 text-sm"></i>
              </div>
              <span className="text-xl font-display font-bold text-white">
                Luxe<span className="text-primary">Store</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-500 mb-4 max-w-xs">
              Premium shopping experience with curated products and exceptional service.
            </p>
            <div className="flex gap-3">
              {["instagram", "facebook", "x-twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-surface border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-primary hover:border-primary/30 transition-all duration-200"
                >
                  <i className={`fa-brands fa-${social} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-neutral-500 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-app py-6 border-t border-neutral-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {currentYear} LuxeStore. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
