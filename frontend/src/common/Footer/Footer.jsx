import { ShoppingCartOutlined } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-14 bg-[#2B3445]'>
     <div  className='pt-10 flex justify-around w-[90%] m-auto'>
     <div className=''>
     <div className='flex gap-2'>
        <ShoppingCartOutlined className=''/>
        <p className='text-[24px] text-white ' variant='body2'> E-commerce</p>
        </div>
        <p className='text-center justify-center'>
        Best information about the company gies here but now lorem ipsum is
        </p>
        <div className=''>
            <p className='text-black font-semibold'>Our Social Media</p>
           <div className='flex gap-3'>
           <GrInstagram className='text-[32px]' />
            <FaFacebookSquare  className='text-[32px]' />
            <TfiTwitterAlt   className='text-[32px]'/>
           </div>
        </div>
     </div>


        <div className='flex justify-around'>
            <div> 
                <ul>
                    <li className='text-[24px] text-white'>Pages</li>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Find store</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div> 
                <ul>
                <li className='text-[24px] text-white'>Pages</li>
                    <li>About Us</li>
                    <li>Find store</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div> 
                <ul>
                <li className='text-[24px] text-white'>User Info</li>
                    <li>My Account</li>
                    <li>Log In</li>
                    <li>Sing Up</li>
                    <li>Dashboard</li>
                </ul>
            </div>
        </div>


       
     </div>
     <div className=' bg-[#444C5C] text-white' > 
            <p className='text-[16px] text-center text-white '>Copy@ 2022 all rights  ENG:Muha.</p>
        </div>
    </div>
  )
}

export default Footer