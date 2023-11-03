'use client'
import React, { useState } from 'react'
import Input from './Input'
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
    
    

  return (
   <div className='w-[100%] h-[200px] flex md:flex-row gap-10  flex-col items-center justify-center bg-black'>
          <div className='w-[33%] flex justify-center  text-center items-center'>
             <h1 className="italic text-white text-xl ">Lunar<span className="text-red-500">Eclipse</span></h1> 
           </div>

          <span className='md:w-[33%]  h-full grid content-end text-center '>
             <p className='text-white align-bottom'> © 2021 All rights reserved.</p>
              <p className='text-white align-bottom'>Created by<span className=' italic text-red-500'>Tuncay</span></p>
          </span>

          <div className='w-[33%] flex gap-3 items-center justify-center '>
                <FaGithub size={30} className= "hover:text-red-500 text-white cursor-pointer"/>
                <FaLinkedin size={30} className= "hover:text-red-500 text-white cursor-pointer"/>
                <FaTwitter size={30} className= "hover:text-red-500 text-white cursor-pointer"/>
          </div>
   </div>
      
    
  )
}

export default Footer