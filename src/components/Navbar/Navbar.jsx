import { useContext, useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TokenContext } from "../../Context/TokenContext";
import { UserContext } from "../../Context/Usercontext";
import { CartContext } from "../../Context/CartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(TokenContext);
  const { user } = useContext(UserContext);
  const { getLoggedUserCart, cartitems } = useContext(CartContext);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const catDropdownRef = useRef(null);
  const searchRef = useRef(null);

  function logout() {
    localStorage.removeItem("TokenLokal");
    setToken(null);
    setShowDropdown(false);
    setMobileOpen(false);
    navigate("/Login");
  }

  useEffect(() => {
    if (token) getLoggedUserCart();
  }, [token]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setShowDropdown(false);
      if (catDropdownRef.current && !catDropdownRef.current.contains(e.target))
        setShowCategories(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/Products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  }

  const navLinks = [
    { to: "", label: "Home", icon: "fa-house" },
    { to: "Products", label: "Products", icon: "fa-grid-2" },
    { to: "Catrgories", label: "Categories", icon: "fa-layer-group" },
    { to: "Brands", label: "Brands", icon: "fa-tag" },
  ];

  const categories = [
    { to: "/Catrgories", label: "All Categories", icon: "fa-grid-2" },
    { to: "/Products?sort=newest", label: "New Arrivals", icon: "fa-sparkles" },
    { to: "/Products?sort=popular", label: "Best Sellers", icon: "fa-fire" },
    { to: "/Products?sort=price-low", label: "Price: Low to High", icon: "fa-arrow-up-wide-short" },
    { to: "/Products?sort=price-high", label: "Price: High to Low", icon: "fa-arrow-down-wide-short" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-secondary-800/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-neutral-800/50"
            : "bg-secondary-800 border-b border-neutral-800"
        }`}
      >
        <div className="container-app">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              to=""
              className="flex items-center gap-2 shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <i className="fa-solid fa-gem text-secondary-800 text-sm"></i>
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                Luxe<span className="text-primary">Store</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === ""}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Categories Dropdown */}
              <div className="relative" ref={catDropdownRef}>
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-200 flex items-center gap-1"
                >
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </button>
                {showCategories && (
                  <div className="absolute right-0 mt-2 w-56 bg-surface border border-neutral-700 rounded-xl shadow-xl overflow-hidden animate-fade-in-down">
                    <div className="py-2">
                      {categories.map((cat) => (
                        <Link
                          key={cat.label}
                          to={cat.to}
                          onClick={() => setShowCategories(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <i className={`fa-solid ${cat.icon} text-primary w-5 text-center`}></i>
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 bg-surface border border-neutral-700 rounded-lg text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                />
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-sm"></i>
              </form>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Mobile Search Toggle */}
              <button
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  setTimeout(() => searchRef.current?.focus(), 100);
                }}
                className="md:hidden btn-icon text-neutral-400 hover:text-white hover:bg-white/5"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

              {token ? (
                <>
                  {/* Wishlist */}
                  <NavLink
                    to="WishList"
                    className="btn-icon text-neutral-400 hover:text-primary hover:bg-primary/10 relative"
                  >
                    <i className="fa-regular fa-heart text-lg"></i>
                  </NavLink>

                  {/* Cart */}
                  <NavLink
                    to="/Cart"
                    className="btn-icon text-neutral-400 hover:text-primary hover:bg-primary/10 relative"
                  >
                    <i className="fa-solid fa-bag-shopping text-lg"></i>
                    {cartitems > 0 && (
                      <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center bg-primary text-secondary-800 text-[10px] font-bold rounded-full px-1 animate-bounce-in">
                        {cartitems}
                      </span>
                    )}
                  </NavLink>

                  {/* User Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                        <span className="text-secondary-800 text-sm font-bold">
                          {user.name?.charAt(0)?.toUpperCase() || "U"}
                        </span>
                      </div>
                      <span className="hidden xl:block text-sm text-neutral-300 font-medium max-w-[100px] truncate">
                        {user.name}
                      </span>
                      <i className="fa-solid fa-chevron-down text-xs text-neutral-500 hidden xl:block"></i>
                    </button>

                    {showDropdown && (
                      <div className="absolute right-0 mt-2 w-56 bg-surface border border-neutral-700 rounded-xl shadow-xl overflow-hidden animate-fade-in-down">
                        <div className="px-4 py-3 border-b border-neutral-800">
                          <p className="text-sm font-medium text-white truncate">{user.name}</p>
                          <p className="text-xs text-neutral-500 truncate">{user.email}</p>
                        </div>
                        <div className="py-2">
                          <Link
                            to="/Allorders"
                            onClick={() => setShowDropdown(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <i className="fa-solid fa-box w-5 text-center text-primary"></i>
                            My Orders
                          </Link>
                          <Link
                            to="/WishList"
                            onClick={() => setShowDropdown(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <i className="fa-regular fa-heart w-5 text-center text-primary"></i>
                            Wishlist
                          </Link>
                          <div className="border-t border-neutral-800 my-1"></div>
                          <button
                            onClick={logout}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-error hover:bg-error/10 transition-colors w-full"
                          >
                            <i className="fa-solid fa-right-from-bracket w-5 text-center"></i>
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="hidden sm:flex items-center gap-2">
                  <NavLink to="Login" className="btn-ghost btn-sm">
                    Sign In
                  </NavLink>
                  <NavLink to="Register" className="btn-primary btn-sm">
                    Sign Up
                  </NavLink>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden btn-icon text-neutral-400 hover:text-white hover:bg-white/5"
              >
                <i className="fa-solid fa-bars text-lg"></i>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {searchOpen && (
            <div className="md:hidden pb-3 animate-fade-in-down">
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 bg-surface border border-neutral-700 rounded-lg text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-sm"></i>
              </form>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Slide-out Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-secondary-800 border-l border-neutral-800 z-50 lg:hidden animate-slide-in-right flex flex-col">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800">
              <Link
                to=""
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <i className="fa-solid fa-gem text-secondary-800 text-sm"></i>
                </div>
                <span className="text-lg font-display font-bold text-white">
                  Luxe<span className="text-primary">Store</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="btn-icon text-neutral-400 hover:text-white"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            {/* User Info - Mobile */}
            {token && (
              <div className="p-4 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-secondary-800 font-bold">
                      {user.name?.charAt(0)?.toUpperCase() || "U"}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">{user.name}</p>
                    <p className="text-xs text-neutral-500 truncate">{user.email}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Links - Mobile */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="px-3 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === ""}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-neutral-400 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    <i className={`fa-solid ${link.icon} w-5 text-center`}></i>
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {token && (
                <>
                  <div className="border-t border-neutral-800 my-4 mx-3"></div>
                  <div className="px-3 space-y-1">
                    <NavLink
                      to="/Cart"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      <i className="fa-solid fa-bag-shopping w-5 text-center"></i>
                      Cart
                      {cartitems > 0 && (
                        <span className="ml-auto badge-primary">{cartitems}</span>
                      )}
                    </NavLink>
                    <NavLink
                      to="/WishList"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      <i className="fa-regular fa-heart w-5 text-center"></i>
                      Wishlist
                    </NavLink>
                    <NavLink
                      to="/Allorders"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      <i className="fa-solid fa-box w-5 text-center"></i>
                      My Orders
                    </NavLink>
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-neutral-800">
              {token ? (
                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-error bg-error/10 hover:bg-error/20 transition-colors"
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                  Sign Out
                </button>
              ) : (
                <div className="flex gap-2">
                  <NavLink
                    to="Login"
                    onClick={() => setMobileOpen(false)}
                    className="btn-secondary btn-md flex-1"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="Register"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary btn-md flex-1"
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
