import React, { useEffect, useState } from "react";
import Productard from "./../../components/productcard/Productcard";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import Homeslider from "../../components/Homeslider/Homeslider";
import Catagoryslider from "./../../components/Catagoryslider/Catagoryslider";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  async function gatProduct() {
    const option = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "GET",
    };
    return  axios.request(option);
  }

  const {data,isLoading,isFetching} = useQuery({
    queryKey: ["product"],
    queryFn: gatProduct,
  });

  if(isLoading){
   return <Loading/>
  }

  // console.log(data.data.data);

  return (
    <>
      <Homeslider />
      <Catagoryslider />
      <div className="grid grid-cols-12 gap-5">
        {data.data.data.map((product) => (
          <Productard productInfo={product} key={product.id} />
        ))}
      </div>
      
    </>
  );
}
