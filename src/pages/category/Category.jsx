import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { useQuery } from "@tanstack/react-query";

export default function Category() {
  async function getCategory() {
    const option = {
      url: "https://ecommerce.routemisr.com/api/v1/categories",
      method: "GET",
    };

     return await axios.request(option);
   
  }

  const {data,isFetching,isLoading}=useQuery({
    queryKey:["categories"],
    queryFn:getCategory,
  })

  if(isLoading) return <Loading/>
  

  return (
    <>
    <div className="grid grid-cols-12  gap-3">
      {data.data.data.map((product)=>(
        <div className="col-span-4 border-2 rounded-md">
        <div>
          <img
            src={product.image}
            className="w-full h-72 object-cover "
          />
        </div>
        <div className="flex py-3 justify-center text-primary items-center text-2xl font-bold">{product.name}</div>
      </div>
      ))}
         
      </div>
     
    </>
  );
}
