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

  return (
    <div className="container mx-auto px-4">
      <div className="shadow-inner my-10 p-5 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold uppercase text-3xl text-[#51A451]">
            Your Cart
          </h2>
          <button
            onClick={() => clearCart()}
            className="bg-[#d1e7dd] hover:bg-[#b3d6c9] text-black font-medium rounded px-4 py-2"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow">
              <p className="font-semibold text-[#51A451] text-xl">
                Total Items: <span>{totalitems}</span>
              </p>
            </div>

            <div className="space-y-4">
              {cartProducts?.map((cartProduct) => (
                <div
                  key={cartProduct.product.id}
                  className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={cartProduct.product.imageCover}
                    className="w-24 h-24 object-contain"
                    alt={cartProduct.product.title}
                  />
                  <div className="flex-1 w-full">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {cartProduct.product.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateCart(cartProduct.product.id, cartProduct.count - 1)
                        }
                        className="h-7 w-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-lg font-bold">−</span>
                      </button>

                      <input
                        type="number"
                        className="w-14 text-center border border-gray-300 rounded-lg py-1"
                        value={cartProduct.count}
                        readOnly
                      />

                      <button
                        onClick={() =>
                          updateCart(cartProduct.product.id, cartProduct.count + 1)
                        }
                        className="h-7 w-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <span className="text-lg font-bold">+</span>
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                      Price: <span className="font-medium">{cartProduct.price} EGP</span>
                    </p>

                    <button
                      onClick={() => removeCart(cartProduct.product.id)}
                      className="text-red-500 hover:underline mt-2 flex items-center gap-1 text-sm"
                    >
                      <i className="fa-solid fa-trash"></i> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout */}
          <div className="bg-white shadow-md rounded-lg p-5 h-fit">
            <h2 className="text-xl font-bold text-center text-[#51A451] mb-4">
              Place Order
            </h2>

            <div className="bg-[#51A451] w-full text-center text-white font-medium py-2 rounded mb-4">
              <Link to="/Checkout">Debit/Credit Card</Link>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-700">Total:</span>
              <span className="text-lg font-bold text-[#51A451]">
                {totalprice} EGP
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
