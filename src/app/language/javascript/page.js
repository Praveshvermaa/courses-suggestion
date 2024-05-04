import React from 'react'
import Link from 'next/link'
import Searchbutton from '@/components/Searchbutton'

function page() {
  return (
    <div className='bg-gray-400 flex flex-wrap flex-col' >

<div><Searchbutton/></div>
    <h1  className='my-5 text-center text-wrap text-xl  font-bold text-black'>Here are top <span className='font-bold text-3xl underline text-blue-700'>Javascript courses</span> according to our researches</h1>
    <div className='flex flex-wrap justify-around bg-cover'
      style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className='outline-none outline-black rounded-sm shadow-xl my-5'>
        <img className='w-96 h-96' src="https://static-assets.codecademy.com/assets/course-landing-page/meta/16x9/introduction-to-javascript.jpg" alt="" />
        <Link href="https://www.codecademy.com/learn/introduction-to-javascript" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
       <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://1.bp.blogspot.com/-4a6r93rAmts/YYE_wXph_HI/AAAAAAAAC9M/8OjTZMNDsLU4hrg6b__H4xgOBGBRxy0fQCLcBGAsYHQ/s16000/the-complete-javascript-course-2021-from-zero-to-expert.png" alt="" />
        <Link href="https://www.udemy.com/course/the-complete-javascript-course/?couponCode=NVDPRODIN35" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
      <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10nbaEZ60XfIS2fjUX0XL5viLvn78jL9pUSOuRP6Vx_bGk2BVwn7LZh4n&s" alt="" />
        <Link href="https://www.coursera.org/learn/learn-javascript" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
    </div>
    <div className='flex flex-wrap justify-around bg-cover'
      style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://media.geeksforgeeks.org/wp-content/uploads/20230809133232/JavaScript-Complete-Guide-copy-2.webp" alt="" />
        <Link href="https://www.geeksforgeeks.org/courses/javascript?utm_source=geeksforgeeks&utm_medium=gblog+best_online_courses_with_cert&utm_campaign=master_javascript+promotion" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
       <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2027JiQtg-n4rQ1yFLD3DVoIpuj0LzYEd_SLhSW_U&s" alt="" />
        <Link href="https://www.udemy.com/course/javascript-flash-course-beginner-to-advanced/?couponCode=NVDPRODIN35" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
      
      
    </div>
    
  </div>
  )
}

export default page
