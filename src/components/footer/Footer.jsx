import React from 'react'
import Amazone from "../../assets/images/amazon-pay.png"
import American from "../../assets/images/American-Express-Color.png"
import mastercard from "../../assets/images/mastercard.webp"
import paypal from "../../assets/images/paypal.png"
import appStore from "../../assets/images/get-google-play.png"
import appleStore from "../../assets/images/get-apple-store.png"


export default function Footer() {
    return <>
        <footer className='bg-slate-100  py-4 absolute left-0 right-0 bottom-0'>
            <div className="container">
                <h1 className='text-2xl text-semibold  '> Get the frashcart App </h1>
                <p className='pt-2'>
                    we will send your alink, open it on your phone to download the app
                </p>
                <div className='flex gap-4'>
                    <input type="text" placeholder='Email...' className='flex-grow form-control' />
                    <button className='btn bg-primary uppercase'>share app link</button>
                </div>
               <div className='flex justify-between items-center mt-4'>
               <div className='flex gap-3'>
                    <span> Payment partners</span>
                    <div className='flex items-center'>
                        <img src={Amazone} className='w-10' />
                        <img src={American} className='w-10'  />
                        <img src={mastercard}  className='w-10' />
                        <img src={paypal} className='w-10'  />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <span>Get deliveries with frashcart</span>
                    <div className='flex '>
                        <img src={appStore} className='w-20'  alt="" />
                        <img src={appleStore} className='w-20'  alt="" />
                    </div>
                </div>
               </div> 
            </div>
        </footer>

    </>
}
