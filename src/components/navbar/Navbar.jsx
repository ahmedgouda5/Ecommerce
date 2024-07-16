import React, { useContext, useEffect } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../Context/Context";
import { cartContext } from "../../Context/Cart.Context";

export default function Navbar() {
  const { getCartItem, cartInfo } = useContext(cartContext);
  const { token, logOut } = useContext(userContext);
  useEffect(() => {
    getCartItem();
  }, []);
  return (
    <>
      <nav className="bg-slate-100 p-3 fixed top-0 left-0 right-0 z-50">
        <div className="container flex  items-center gap-8 ">
          <h1>
            <img src={logo} alt="" />
          </h1>
          {token ? (
            <ul className="flex items-center gap-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return `relative before:h-[2px] hover:font-bold hover:before:w-full hover:before:text-primary before:absolute before:left-0 before:-bottom-2 before:bg-primary before:transition-[width] before:duration-300
                                    ${
                                      isActive
                                        ? "font-bold before:w-full"
                                        : "before:w-0 "
                                    }`;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Product"
                  className={({ isActive }) => {
                    return `relative before:h-[2px] hover:font-bold hover:before:w-full hover:before:text-primary before:absolute before:left-0 before:-bottom-2 before:bg-primary before:transition-[width] before:duration-300
                                    ${
                                      isActive
                                        ? "font-bold before:w-full"
                                        : "before:w-0 "
                                    }`;
                  }}
                >
                  product
                </NavLink>
              </li>
              <li>
                <NavLink
                 to={"/wishlist"}
                  className={({ isActive }) => {
                    return `relative before:h-[2px] hover:font-bold hover:before:w-full hover:before:text-primary before:absolute before:left-0 before:-bottom-2 before:bg-primary before:transition-[width] before:duration-300
                                    ${
                                      isActive
                                        ? "font-bold before:w-full"
                                        : "before:w-0 "
                                    }`;
                  }}
                >
                  Wish list
                </NavLink>
              </li>
              <li>
                <NavLink
                 to={"/category/:id"}
                  className={({ isActive }) => {
                    return `relative before:h-[2px] hover:font-bold hover:before:w-full hover:before:text-primary before:absolute before:left-0 before:-bottom-2 before:bg-primary before:transition-[width] before:duration-300
                                    ${
                                      isActive
                                        ? "font-bold before:w-full"
                                        : "before:w-0 "
                                    }`;
                  }}
                >
                  categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/brand"
                  className={({ isActive }) => {
                    return `relative before:h-[2px] hover:font-bold hover:before:w-full hover:before:text-primary before:absolute before:left-0 before:-bottom-2 before:bg-primary before:transition-[width] before:duration-300
                                    ${
                                      isActive
                                        ? "font-bold before:w-full"
                                        : "before:w-0 "
                                    }`;
                  }}
                >
                  brand
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allorders"
                  className={({ isActive }) => {
                    return `relative before:h-[2px] hover:font-bold hover:before:w-full hover:before:text-primary before:absolute before:left-0 before:-bottom-2 before:bg-primary before:transition-[width] before:duration-300
                                    ${
                                      isActive
                                        ? "font-bold before:w-full"
                                        : "before:w-0 "
                                    }`;
                  }}
                >
                  orders
                </NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}
          {token ? (
            <Link to={"/cart"} className="ms-auto relative">
              <i class="fa-solid fa-cart-shopping text-lg"></i>
              <span className="bg-primary w-5 h-5 text-white text-sm rounded-full absolute top-0 text-center right-0 translate-x-1/2 -translate-y-1/2">
                {cartInfo == null ? (
                  <i class="fa-solid fa-spinner fa-spin text-white"></i>
                ) : (
                  cartInfo.numOfCartItems || 0
                )}
              </span>
            </Link>
          ) : (
            ""
          )}

          {token ? (
            <ul className="flex items-center gap-6 ">
              <li>
                <NavLink to="https://www.instagram.com">
                  <i class="fa-brands fa-instagram"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.facebook.com">
                  <i class="fa-brands fa-facebook"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.tiktok.com">
                  <i class="fa-brands fa-tiktok"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.twitter.com">
                  <i class="fa-brands fa-twitter"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.youtube.com">
                  <i class="fa-brands fa-youtube"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.linkedin.com">
                  <i class="fa-brands fa-linkedin"></i>
                </NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}

          <ul className="flex items-center gap-6  ">
            {!token ? (
              <>
                <li>
                  <NavLink
                    to="/auth/signup"
                    className={({ isActive }) => {
                      return `relative before:h-[2px] hover:font-bold hover:before:w-full hover:before:text-primary before:absolute before:left-0 before:-bottom-2 before:bg-primary before:transition-[width] before:duration-300
                                    ${
                                      isActive
                                        ? "font-bold before:w-full"
                                        : "before:w-0 "
                                    }`;
                    }}
                  >
                    signup
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/auth/login"
                    className={({ isActive }) => {
                      return `relative before:h-[2px] hover:font-bold hover:before:w-full hover:before:text-primary before:absolute before:left-0 before:-bottom-2 before:bg-primary before:transition-[width] before:duration-300
                                    ${
                                      isActive
                                        ? "font-bold before:w-full"
                                        : "before:w-0 "
                                    }`;
                    }}
                  >
                    login
                  </NavLink>
                </li>
              </>
            ) : null}
            {token ? (
              <li>
                <span to="/logout" onClick={logOut} className="cursor-pointer">
                  <i class="fa-solid fa-right-from-bracket"></i>
                </span>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
