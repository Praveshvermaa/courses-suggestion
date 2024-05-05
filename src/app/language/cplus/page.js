import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header/Header'
import Searchbutton from '@/components/Searchbutton'
import Footer from '@/components/Footer/Footer'

function page() {
  return (
    <div className='bg-gray-400'>
       <div>  <Header/></div> 
      <div><Searchbutton/></div>
       
    <h1  className='text-center text-wrap text-xl  font-bold text-black my-5'>Here are top <span className='text-3xl underline text-blue-700'>C++ courses</span> according to our researches</h1>
    <div className='flex flex-wrap justify-around bg-cover'
    style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className='outline-none outline-black rounded-sm shadow-xl my-5'>
        <img className='w-96 h-96' src="https://m.media-amazon.com/images/I/71heLki-rBL._SL1500_.jpg" alt="" />
        <Link href="https://www.udemy.com/course/cpp-deep-dive/?couponCode=ST14MT32124" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
       <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://images-na.ssl-images-amazon.com/images/I/51qcB0n9I8L.jpg" alt="" />
        <Link href="https://www.coursera.org/specializations/coding-for-everyone" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
      <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://industryoutreachmagazine.com/wp-content/uploads/2022/05/8F24CF6E-D342-4C65-ACFC-0B5366F22C90.jpeg" alt="" />
        <Link href="https://www.codingninjas.com/cpp-data-structures-and-algorithms-course" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
    </div>
    <div className='flex flex-wrap justify-around bg-cover'
    style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://static.startuptalky.com/2021/06/GeeksforGeeks-founder-StartupTalky.jpg" alt="" />
        <Link href="https://www.geeksforgeeks.org/courses/cpp-programming-basic-to-advanced?utm_source=geeksforgeeks&utm_medium=gblog%2Bbest%2Bcpp%2Bcourses_for_beg&utm_campaign=cpp_self_paced%2Bpromotion" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
       <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://i.ytimg.com/vi/tIGsN6i2PMQ/maxresdefault.jpg" alt="" />
        <Link href="https://www.codecademy.com/learn/learn-c-plus-plus" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
      
      
    </div>
    <div><Footer/></div>
    
  </div>
  )
}

export default page
