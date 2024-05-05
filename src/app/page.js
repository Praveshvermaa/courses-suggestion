"use client"
import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Searchbutton from '@/components/Searchbutton'


function Home() {
  return (
    <div>
      
   <div>  <Header/></div>  
    <div><Searchbutton/></div>
    

    
   
    <div className='bg-gray-400'>
    
    <div className='w-full bg-gray-400 flex flex-wrap gap-5 items-center mt-5  bg-cover p-12 justify-around'
     style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className=''>
        <p className='font-bold text-xl text-white text-center underline'>DSA Courses </p>
        <img className='w-80 h-80 border-2 border-black outline-none shadow-lg rounded-lg' src="https://miro.medium.com/max/1200/1*-EFdnPuVrwUOmYte11v0OA.png" alt="image" />
        <Link href={"/language/DSA"}
        className='px-5 py-1 bg-blue-700 text-white shadow-lg rounded-sm'
        >Click to view DSA courses</Link>

      </div>
      <div className=' '>
      <p className='font-bold text-xl text-white text-center underline'>Java Courses </p>
        <img className='w-80 h-80 border-2 border-black outline-none shadow-lg rounded-lg' src="https://th.bing.com/th/id/OIP.lT2MFAkuTPhZW__tqbkF1wHaEo?rs=1&pid=ImgDetMain" alt="image" />
        <Link href={"/language/java"} 
        className='px-5 py-1 bg-blue-700 text-white shadow-lg rounded-sm'>Click to view java courses</Link>

      </div>
      <div className=' '>
      <p className='font-bold text-xl text-white text-center underline'>C++ Courses </p>
        <img className='w-80 h-80 border-2 border-black outline-none shadow-lg rounded-lg' src="https://www.creativefabrica.com/wp-content/uploads/2019/10/25/c_1.jpg" alt="image" />
        <Link href={"/language/cplus"} 
        className='px-5 py-1 bg-blue-700 text-white shadow-lg rounded-sm'>Click to view c++ courses</Link>

      </div>



      
    </div>
    <div className='w-full bg-gray-400 flex flex-wrap gap-5 items-center mt-5  bg-cover p-12 justify-around'
     style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className=''>
      <p className='font-bold text-xl text-white text-center underline'>Javascript Courses </p>
        <img className='w-80 h-80 border-2 border-black outline-none shadow-lg rounded-lg' src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/10/What-Is-JavaScript-Featured.jpg" alt="image" />
        <Link href={"/language/javascript"}
        className='px-5 py-1 bg-blue-700 text-white shadow-lg rounded-sm'
        >Click to view javascript courses</Link>

      </div>
      <div className=' '>
      <p className='font-bold text-xl text-white text-center underline'>Python Courses </p>
        <img className='w-80 h-80 border-2 border-black outline-none shadow-lg rounded-lg' src="https://th.bing.com/th/id/OIP.PZp47W_mKqXubp_WHAksygHaDI?rs=1&pid=ImgDetMain" alt="image" />
        <Link href={"/language/python"} 
        className='px-5 py-1 bg-blue-700 text-white shadow-lg rounded-sm'>Click to view pyhton courses</Link>

      </div>
     



      
    </div>



    

    </div>
    <div><Footer/></div>
   
    </div>
  )
}

export default Home
