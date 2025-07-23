import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
export let CartContext = createContext();
export function CartContextProvider(props) {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalitems, settotalitems] = useState(null);
  const [cartId, setcartId] = useState(null);
  const [cartitems, setcartitems] = useState(0);
  const [totalprice, settotalprice] = useState(0);
  function addProductCart(productId) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId },
        {
          headers: { token: localStorage.getItem("TokenLokal") },
        }
      )
      .then((data) => {
        data;
        toast.success(data.data.message);
        settotalprice(data.data.data.totalCartPrice);
        data.data.data.totalCartPrice, "price";
        settotalitems(data.data.numOfCartItems);
        setcartitems(data.data.numOfCartItems);
      })
      .catch((error) => {
        error;
      });
  }
  function getCart() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: { token: localStorage.getItem("TokenLokal") },
      })
      .then((data) => {
        setCartProducts(data.data.data.products);
        settotalprice(data.data.data.totalCartPrice);
        settotalitems(data.data.numOfCartItems);
        setcartitems(data.data.numOfCartItems);

        setcartId(data.data.data.cartOwner);
        data.data.data.cartOwner;
      })
      .catch((error) => {});
  }
  function removeCart(id) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        headers: { token: localStorage.getItem("TokenLokal") },
      })
      .then((data) => {
        getCart();
        settotalprice(data.data.totalCartPrice);

        return data;
      })
      .catch((error) => {});
  }
  function updateCart(id, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        { count: count },
        {
          headers: { token: localStorage.getItem("TokenLokal") },
        }
      )
      .then((data) => {
        data;
        setCartProducts(data.data.data.products);
        settotalprice(data.data.data.totalCartPrice);

        return data;
      })
      .catch((error) => {
        error;
      });
  }
  function onlinePayment(shippingAddress) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/orders/checkout-session/666e6047ed0dc0016cfab6ee?url=http://localhost:5173",
        { shippingAddress },
        {
          headers: { token: localStorage.getItem("TokenLokal") },
        }
      )
      .then((data) => {
        data?.data.session.url;
        window.location.href = data?.data.session.url; 

        return data;
      })
      .catch((error) => {
        error;
      });
  }
  function clearCart() {
    return axios
      .delete(
        "https://ecommerce.routemisr.com/api/v1/cart",

        {
          headers: { token: localStorage.getItem("TokenLokal") },
        }
      )
      .then((data) => {
        setCartProducts([]);
        toast.success("Successfully Deleted");
        return data;
      })
      .catch((error) => {});
  }
  async function getLoggedUserCart() {
    try {
      const data = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { headers: { token: localStorage.getItem("TokenLokal") } }
      );
      setcartitems(data.data.numOfCartItems);
    } catch (error) {}
  }
  return (
    <CartContext.Provider
      value={{
        addProductCart,
        getCart,
        cartProducts,
        removeCart,
        totalprice,
        updateCart,
        onlinePayment,
        clearCart,
        totalitems,
        cartId,
        getLoggedUserCart,
        cartitems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
