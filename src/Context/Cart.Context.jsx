import { createContext, useContext, useState } from "react";
import axios from "axios";
import { userContext } from "./Context";
import toast from "react-hot-toast";
export const cartContext = createContext(null);

export default function CartProvider({ children }) {
  const { token } = useContext(userContext);
  const [cartInfo, setCartInfo] = useState(null);
  async function getCartItem() {
    try {
      const option = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "GET",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(option);
      setCartInfo(data);
    } catch (error) {
      if (error.response.data.message.includes("No cart")) {
        setCartInfo([]);
      }
    }
  }

  async function addProductToCart(id) {
    try {
      const option = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "POST",
        headers: {
          token,
        },
        data: {
          productId: id,
        },
      };
      let { data } = await axios.request(option);
      setCartInfo(data);
      toast.success("product adding successfully");
    } catch (error) {
      toast.error(error);
    }
  }

  async function removeItem({ id }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "DELETE",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      if (data.numOfCartItems == 0) {
        setCartInfo([]);
      } else {
        setCartInfo(data);
      }
      console.log(data);
      toast.success("product removed successfully");
    } catch (error) {
      toast.error(error);
    }
  }
  async function updateProductCount({ id, count }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "PUT",
        headers: {
          token,
        },
        data: {
          count,
        },
      };
      let { data } = await axios.request(options);
      setCartInfo(data);
      console.log(data);
    } catch (error) {
      toast.error(error);
    }
  }
  async function clearAllItem() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart`,
        method: "DELETE",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
     if(data.message="success"){
      setCartInfo([])
     }
      console.log(data);
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <cartContext.Provider
      value={{
        addProductToCart,
        getCartItem,
        cartInfo,
        removeItem,
        updateProductCount,
        clearAllItem,
        setCartInfo
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
