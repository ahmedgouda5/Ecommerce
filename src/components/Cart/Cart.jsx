import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const {
    getCart,
    cartProducts,
    removeCart,
    totalprice,
    updateCart,
    clearCart,
    totalitems,
  } = useContext(CartContext);

  useEffect(() => {
    getCart();
  }, []);

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="container-app py-16">
        <div className="text-center animate-fade-in-up">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-surface flex items-center justify-center">
            <i className="fa-solid fa-bag-shopping text-4xl text-neutral-600"></i>
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">Your cart is empty</h2>
          <p className="text-neutral-500 mb-6">Looks like you haven&apos;t added anything yet</p>
          <Link to="/Products" className="btn-primary btn-lg">
            <i className="fa-solid fa-arrow-left"></i>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-app py-8 md:py-12 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8 flex-wrap">
        <Link to="" className="hover:text-primary transition-colors">Home</Link>
        <i className="fa-solid fa-chevron-right text-xs text-neutral-700"></i>
        <span className="text-neutral-300">Shopping Cart</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white">
          Shopping Cart
          <span className="text-base font-normal text-neutral-500 ml-2">({totalitems} items)</span>
        </h1>
        <button
          onClick={() => clearCart()}
          className="btn-ghost btn-sm text-error hover:bg-error/10"
        >
          <i className="fa-solid fa-trash"></i>
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartProducts.map((item) => (
            <div
              key={item.product.id}
              className="card p-4 md:p-5 flex flex-col sm:flex-row gap-4 animate-fade-in"
            >
              <Link to={`/Details/${item.product.id}`} className="shrink-0">
                <img
                  src={item.product.imageCover}
                  alt={item.product.title}
                  className="w-24 h-24 object-contain bg-secondary-900 rounded-lg"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/Details/${item.product.id}`} className="text-sm font-medium text-neutral-200 hover:text-primary transition-colors line-clamp-2">
                  {item.product.title}
                </Link>
                <p className="text-xs text-primary mt-1">{item.product.category?.name}</p>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center bg-surface border border-neutral-700 rounded-lg">
                    <button
                      onClick={() => updateCart(item.product.id, item.count - 1)}
                      className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                    >
                      <i className="fa-solid fa-minus text-xs"></i>
                    </button>
                    <span className="w-10 text-center text-sm text-white font-medium">{item.count}</span>
                    <button
                      onClick={() => updateCart(item.product.id, item.count + 1)}
                      className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                    >
                      <i className="fa-solid fa-plus text-xs"></i>
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-white">{item.price} EGP</span>
                    <button
                      onClick={() => removeCart(item.product.id)}
                      className="text-neutral-500 hover:text-error transition-colors"
                    >
                      <i className="fa-solid fa-trash-can text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h2 className="text-lg font-display font-semibold text-white mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Subtotal ({totalitems} items)</span>
                <span className="text-neutral-200">{totalprice} EGP</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <div className="border-t border-neutral-800 pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-xl font-bold text-primary">{totalprice} EGP</span>
                </div>
              </div>
            </div>

            <Link to="/Checkout" className="btn-primary btn-lg w-full">
              <i className="fa-solid fa-lock"></i>
              Proceed to Checkout
            </Link>

            <Link to="/Products" className="btn-ghost btn-md w-full mt-3">
              <i className="fa-solid fa-arrow-left"></i>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
