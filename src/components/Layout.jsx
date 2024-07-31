import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from "./Navbar";
import Footer from './Footer';
import About from './About';
const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Footer/>
    </div>
  )
}

export default Layout