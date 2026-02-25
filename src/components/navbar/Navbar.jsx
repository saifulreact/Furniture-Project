import React from 'react'
import './navbar.css'
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GoPersonAdd } from "react-icons/go";



const Navbar = () => {
  return (
   <nav>
    <div className="container flex justify-between items-center py-[30px]">
      <div className="logo_col">
        <img src="logo.png" alt="main_logo" />
      </div>
      <div className="menu">
        <ul className='flex gap-[75px] font-poppin font-medium text-[16px] text-[#000000]'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="btn flex gap-[47px]">
        
        <a href="#"><GoPersonAdd  className='text-[28px]'/></a>
        <a href="#"><IoSearch className='text-[28px]' /></a>
        <a href="#"><IoIosHeartEmpty className='text-[28px]' /></a>
        
        <a href="#"><IoCartOutline className='text-[28px]' /></a>
        
      </div>
    </div>
   </nav>
  )
}

export default Navbar
