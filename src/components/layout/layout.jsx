import React from 'react'
import Footer from './../footer/Footer';
import Navbar from './../navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return <>
  <Navbar/>
    <div className="container min-h-screen pb-[240px] pt-[80px] ">
       <Outlet/>
       
   </div>
  <Footer/>
  </>
}
