import axios from "axios";
import { useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Allorders() {
  let { cartId, getCart } = useContext(CartContext);

  function getUserOrders(id) {
    return axios
      .get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/666e6047ed0dc0016cfab6ee`
      )
      .then((data) => {
        data;
      })
      .catch((error) => {
        error;
      });
  }
  const any = async () => {
    await getCart();
    cartId && (await getUserOrders(cartId));
  };
  useEffect(() => {
    any();
  }, [cartId]);

  return (
    <>
      <h1>Your Orders</h1>
      <div></div>
    </>
  );
}
