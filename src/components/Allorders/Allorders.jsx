import axios from "axios";
import { useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export default function Allorders() {
  let { cartId, getCart } = useContext(CartContext);

  function getUserOrders(id) {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/orders/user/666e6047ed0dc0016cfab6ee`)
      .then((data) => data)
      .catch((error) => error);
  }

  const any = async () => {
    await getCart();
    cartId && (await getUserOrders(cartId));
  };

  useEffect(() => {
    any();
  }, [cartId]);

  return (
    <div className="container-app py-8 md:py-12 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8 flex-wrap">
        <Link to="" className="hover:text-primary transition-colors">Home</Link>
        <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
        <span className="text-neutral-300">My Orders</span>
      </nav>

      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-surface flex items-center justify-center">
          <i className="fa-solid fa-box-open text-3xl text-neutral-600"></i>
        </div>
        <h2 className="text-2xl font-display font-bold text-white mb-2">My Orders</h2>
        <p className="text-neutral-500 mb-6">Your order history will appear here</p>
        <Link to="/Products" className="btn-primary btn-md">
          <i className="fa-solid fa-bag-shopping"></i>
          Start Shopping
        </Link>
      </div>
    </div>
  );
}
