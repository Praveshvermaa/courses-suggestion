import React from 'react'
import Link from 'next/link'
import Searchbutton from '@/components/Searchbutton'

function page() {
  return (
    <div className='bg-gray-400 flex flex-wrap flex-col' >
       <div><Searchbutton/></div>
    <h1  className='my-5 text-center text-wrap text-xl  font-bold text-black'>Here are top <span className='font-bold text-3xl underline text-blue-700'>DSA courses</span> according to our researches</h1>
    <div className='flex flex-wrap justify-around bg-cover'
      style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className='outline-none outline-black rounded-sm shadow-xl my-5'>
        <img className='w-96 h-96' src="https://th.bing.com/th/id/OIP.2G4dgQ6VWmrJUyrS9gfx_QAAAA?rs=1&pid=ImgDetMain" alt="" />
        <Link href="https://www.geeksforgeeks.org/courses/dsa-self-paced?utm_source=gfg-article&utm_medium=Q1-2023&utm_campaign=dsa-self-paced" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
       <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://th.bing.com/th/id/OIP.dj_AajzQ5014nU9SfnvPFwAAAA?rs=1&pid=ImgDetMain" alt="" />
        <Link href="https://unacademy.com/batch-group/Comprehensive%20Data%20Structures%20&%20Algorithms/6UWLWDZ3" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
      <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://i.ytimg.com/vi/bE0zlj0sq_c/maxresdefault.jpg" alt="" />
        <Link href="https://www.codingninjas.com/cpp-data-structures-and-algorithms-course?utm_campaign=homepage_new_courses" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
    </div>
    <div className='flex flex-wrap justify-around bg-cover'
      style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://3.imimg.com/data3/UR/DE/MY-10297329/screen-shot-2014-05-22-at-12-12-27-pm-500x500.png" alt="" />
        <Link href="https://online.codingblocks.com/courses/data-structures-and-algorithms-online-course" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
       <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://www.apna-college.co.in/wp-content/uploads/2024/01/image.png" alt="" />
        <Link href="https://www.apna-college.co.in/courses/" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
      
      
    </div>
    
  </div>
  )
}

export default page
