import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TokenContext } from "../../Context/TokenContext";
import { UserContext } from "../../Context/Usercontext";
import { CartContext } from "../../Context/CartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(TokenContext);
  const { user } = useContext(UserContext);
  const { getLoggedUserCart, cartitems } = useContext(CartContext);

  const [toggleNav, setToggleNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleNavbar() {
    setToggleNav(!toggleNav);
  }

  function logout() {
    localStorage.removeItem("TokenLokal");
    setToken(null);
    navigate("/login");
  }

  useEffect(() => {
    getLoggedUserCart();
  }, []);

  return (
    <nav className="bg-[#F8F9FA] sticky dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={""} className="flex items-center text-3xl font-bold text-[#4D5963] space-x-1">
          <span>Fresh</span>
          <span>Cart</span>
        </Link>

        <button
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`w-full md:flex md:items-center md:w-auto ${toggleNav ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium mt-4 md:mt-0 mx-9 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent rounded-lg p-4 md:p-0">
            {token ? (
              <>
                <li><NavLink to={""} className="nav-link">Home</NavLink></li>
                <li><NavLink to={"Products"} className="nav-link">Products</NavLink></li>
                <li><NavLink to={"Catrgories"} className="nav-link">Categories</NavLink></li>
                <li><NavLink to={"Brands"} className="nav-link">Brands</NavLink></li>
              </>
            ) : (
              <>
                <li><NavLink to={"Login"} className="nav-link">Login</NavLink></li>
                <li><NavLink to={"Register"} className="nav-link">Register</NavLink></li>
              </>
            )}
          </ul>

          {token && (
            <div className="ms-auto flex items-center gap-4 mt-4 md:mt-0">
              <div className="hidden md:flex gap-3 text-xl text-gray-700 dark:text-white">
                <Link><i className="fa-brands fa-instagram"></i></Link>
                <Link><i className="fa-brands fa-facebook"></i></Link>
                <Link><i className="fa-brands fa-x-twitter"></i></Link>
                <Link><i className="fa-brands fa-youtube"></i></Link>
                <Link><i className="fa-brands fa-linkedin"></i></Link>
                <Link><i className="fa-brands fa-pinterest-p"></i></Link>
              </div>

              <div className="relative">
                <NavLink to="/Cart" className="text-2xl text-black dark:text-white relative">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-2 rounded-full">
                    {cartitems}
                  </span>
                </NavLink>
              </div>

              <NavLink to="Wishlist" className="flex items-center text-gray-700 dark:text-white">
                <i className="fa-regular fa-heart text-2xl text-green-500"></i>
                <span className="px-2 font-medium hidden md:block">Favorites</span>
              </NavLink>

              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 inline-flex items-center"
                >
                  {user.name}
                  <svg className="w-2.5 h-2.5 ms-2" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-black border rounded-lg shadow-lg z-50">
                    <ul className="py-2 text-sm text-gray-700 dark:text-white">
                      <li>
                        <button
                          onClick={logout}
                          className="block w-full text-left px-4 py-2 hover:bg-green-500 dark:hover:bg-green-600 hover:text-white"
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
