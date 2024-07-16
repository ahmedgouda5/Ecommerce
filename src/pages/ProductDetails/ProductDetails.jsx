import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import ReactImageGallery from "react-image-gallery";
import { cartContext } from "../../Context/Cart.Context";

export default function ProductDetails() {
  const [details, setDetails] = useState(null);
  let { id } = useParams();
  const { addProductToCart } = useContext(cartContext);

  async function getProductDetails() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );

    setDetails(data.data);
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  const imageItems = details?.images.map((imageUrl) => {
    return {
      original: imageUrl,
      thumbnail: imageUrl,
    };
  });

  return (
    <>
      {details ? (
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4">
            <ReactImageGallery
              items={imageItems}
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
          <div className="col-span-8">
            <h1 className="text-2xl font-semibold">{details.title}</h1>
            <h3 className="mt-2 text-primary font-bold">
              {details.category.name}
            </h3>
            <p className="mt-5 text-slate-500">{details.description}</p>
            <div className="flex justify-between items-center my-5">
              <span>{details.price} EGP</span>
              <span>
                {details.ratingsAverage}
                <i class="fa-solid fa-star text-yellow-500"></i>
              </span>
            </div>
            <span
              onClick={() => {
                addProductToCart(details.id);
              }}
              className="btn bg-primary  w-full form-control inline-block"
            >
              add to cart
            </span>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
