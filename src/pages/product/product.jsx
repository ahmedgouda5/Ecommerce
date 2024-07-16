import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../Context/Cart.Context";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/Loading";

export default function Product() {
  const { addProductToCart } = useContext(cartContext);

  const [product, setProduct] = useState(null);
  async function gatProduct() {
    const option = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "GET",
    };
    let { data } = await axios.request(option);
    setProduct(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    gatProduct();
  }, []);

  return (
    <>
      {product ? (
        <div className="grid grid-cols-12 gap-3">
          {product.map((product) => (
            <div key={product.id} className="col-span-4 md:col-span-3 lg:col-span-2 rounded-md overflow-hidden shadow-lg">
              <div className="relative">
                <div className="overlay  opacity-0 hover:opacity-100 transition-opacity duration-300   gap-3 absolute bg-opacity-20 bg-slate-500 left-0 top-0 right-0 bottom-0 flex justify-center items-center ">
                  <Link
                    to={"/wishlist"}
                    className=" font-bold  hover:rotate-6 hover:scale-110 transition:transform duration-300 w-10 h-10 cursor-pointer bg-primary  flex justify-center items-center text-white  rounded-full"
                  >
                    <i class="fa-solid fa-heart"></i>
                  </Link>
                  <div
                    onClick={() => {
                      addProductToCart(product.id);
                    }}
                    className=" font-bold hover:rotate-6 hover:scale-110 transition:transform duration-300  w-10 h-10 cursor-pointer bg-primary  flex justify-center items-center text-white  rounded-full"
                  >
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <Link
                      to={`/product/${product.id}`}
                    className=" font-bold  hover:rotate-6 hover:scale-110 transition:transform duration-300 w-10 h-10 cursor-pointer bg-primary  flex justify-center items-center text-white  rounded-full"
                  >
                    <i class="fa-solid fa-eye"></i>
                  </Link>
                </div>
                <img className="w-full " src={product.imageCover} alt="" />
              </div>
              <div className="p-4   ">
                <h3 className="text-primary">{product.category.name}</h3>
                <h2 className="font-semibold line-clamp-2">{product.title}</h2>
                <div className="flex justify-between items-center py-3">
                  <span>{product.price} EGP</span>
                  <span>
                    {product.ratingsAverage}{" "}
                    <i class="fa-solid fa-star text-yellow-500"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
