import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../loading/Loading'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export default function Catagoryslider() {
    async function getCategory() {
        const option = {
            url: "https://ecommerce.routemisr.com/api/v1/categories",
            method: "GET"
        }

        return  axios.request(option)

    }

    const {data,isFetching,isLoading}=useQuery({
        queryKey:["categories"],
        queryFn:getCategory,
      })
    
      if(isLoading) return <Loading/>


    return <>
        <section className='my-6'>
            <h1>shop popular categories</h1>
            <swiper-container loop={true} slides-per-view="6" >
                { data.data.data.map((Category) => (
                    <swiper-slide key={Category._id}>
                        <Link to={`/category/${Category._id}`}>
                            <img src={Category.image} className='w-full h-72 object-cover' alt="" />
                            <h1>{Category.name}</h1>
                        </Link>
                    </swiper-slide>
                ))}
            </swiper-container>
        </section>
    </>
}
