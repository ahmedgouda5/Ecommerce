import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "./Context";
import toast from "react-hot-toast";

export const wishlistContext = createContext(null);

export default function WishlistProvider({ children }) {
  const { token } = useContext(userContext);
  const [wishlist, setWishlist] = useState(null);

  async function addWishProduct(id) {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/wishlist",
        method: "POST",
        headers: {
          token,
        },
        data: {
          productId: id,
        },
      };
      const { data } = await axios.request(options);
      toast.success("Product added successfully to your wishlist");
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  }
  async function getWishlist() {
    try {
      const option = {
        url: "https://ecommerce.routemisr.com/api/v1/wishlist",
        method: "GET",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(option);
      setWishlist(data);

    } catch (error) {
      if (error.response.data.message.includes("No cart")) {
        setWishlist([]);
      }
    }
  }
  useEffect(()=>{
    getWishlist()
  },[])


  async function removeProduct({ id} ) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/wishlist/${id}}`,
        method: "DELETE",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      setWishlist(data)
      toast.success("product removed successfully");
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <wishlistContext.Provider value={{ addWishProduct , getWishlist ,wishlist ,removeProduct}}>
      {children}
    </wishlistContext.Provider>
  );
}
