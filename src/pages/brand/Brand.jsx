import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../components/loading/Loading'

export default function Brand() {
    const [brands,setBrands]=useState(null)
 async function getAllBrands(){
    const option={
        url:"https://ecommerce.routemisr.com/api/v1/brands",
        method:"GET"
    }
    let {data}= await axios.request(option)
    console.log(data.data);
    setBrands(data.data)
  }

  useEffect(() => {
    getAllBrands()
  }, [])




  return<>
  {brands ? <div className='grid grid-cols-12 gap-3'>
    <h1 className='uppercase text-2xl font-bold col-span-12 text-center py-2 text-primary'>all brands</h1>
   {brands.map((brands)=>(
     <div className=' col-span-3 md:col-span-4 border-2 rounded-md '>
     <div>
         <img src={brands.image} alt="" className='w-full' />
     </div>
     <div className='text-center '>
         <h1 className='font-bold'>{brands.name}</h1>
     </div>
 </div>
   ))}
  </div>:<Loading/>}
  </>
}
