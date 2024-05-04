"use client"
import React from 'react'
import Link from 'next/link';

function Footer() {
  return (
   <>
   <div className='bg-slate-800 mt-5 p-5 flex flex-wrap justify-evenly items-center mx-auto w-full  gap-10'>
   <div className='flex justify-evenly items-center mx-auto flex-col gap-3'>
    <h4 className='font-bold text-xl underline text-white'>Resourches </h4>
    <Link href={"/"} 
    className='text-white'
           
            >Home
         </Link>
         <Link href={"/about"} 
          className='text-white'
           
            >About us
         </Link>
         <Link  href={"#"}
          className='text-white'
           
            >Services
         </Link>
    </div> 
    <div className='flex justify-evenly items-center mx-auto flex-col gap-3 text-white'>
    <h4 className='font-bold text-xl underline '>Connect us  </h4>
    <Link  href={"https://www.linkedin.com/in/pravesh-verma-835609273/"}>linkedin</Link>
   
   
    </div>
    
    <div className='flex justify-evenly items-center mx-auto flex-col gap-3'>
    <h4 className='font-bold text-xl underline text-white'>Get Help</h4>

    <Link  href={"/contact"}
     className='text-white'
           
            >Contact us
         </Link>
         
        

    </div>
   </div>
   </>
  )
}

export default Footer
