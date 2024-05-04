import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Searchbutton from '@/components/Searchbutton'

function page() {
  return (
    <div className='bg-gray-400'>
       <div><Searchbutton/></div>
     
    <h1  className='my-5 text-center text-wrap text-xl  font-bold  mt-10 pt-5'>Here are top <span className='font-bold underline text-blue-700 text-3xl'>Java courses</span>  according to our researches</h1>
    <div className='flex flex-wrap justify-around bg-cover'
    style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className='outline-none outline-black rounded-sm shadow-xl my-5'>
        <img className='w-96 h-96' src="https://i.ytimg.com/vi/kma8a5qi0HQ/maxresdefault.jpg" alt="" />
        <Link href="https://www.udemy.com/course/java-the-complete-java-developer-course/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-EI4Dni58oNZK.3yThkbGcA&utm_medium=udemyads&utm_source=aff-campaign&couponCode=ST14MT32124" className='bg-blue-700 text-white px-2 py-1'>Visit on website</Link>
      </div>
       <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://th.bing.com/th/id/OIP.9HD1ThIvnry3dh7gXoOp0AHaD4?rs=1&pid=ImgDetMain" alt="" />
        <Link href="https://www.coursera.org/specializations/java-programming?irclickid=ytd26J1aHxyPUlu2taT6i1SeUkHUWlznEzMG2k0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=3294490&utm_content=b2c" className='bg-blue-700 text-white px-2 py-1'>Visit on website</Link>
      </div>
      <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://th.bing.com/th/id/OIP.srC3qvvJ6vAzoiM7kTBYJgHaEK?rs=1&pid=ImgDetMain" alt="" />
        <Link href="https://www.geeksforgeeks.org/courses/Java-Programming-basic-to-advanced?utm_source=geeksforgeeks&utm_medium=article%20gblog&utm_campaign=java_self_paced%20promotion" className='bg-blue-700 text-white px-2 py-1'>Visit on website</Link>
      </div>
    </div>
    <div className='flex flex-wrap justify-around bg-cover'
    style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://i.ytimg.com/vi/mGjlWrhhNF0/maxresdefault.jpg" alt="" />
        <Link href="https://www.udemy.com/course/java-programming-tutorial-for-beginners/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-qf_CfDXGiyXdsMjAlXrSSw&utm_medium=udemyads&utm_source=aff-campaign&couponCode=ST14MT32124" className='bg-blue-700 text-white px-2 py-1'>Visit on website</Link>
      </div>
       <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://i.ytimg.com/vi/5IYDvoVNXHc/maxresdefault.jpg" alt="" />
        <Link href="https://zerotomastery.io/courses/java-bootcamp/"className='bg-blue-700 text-white px-2 py-1'>Visit on website</Link>
      </div>
      
      
    </div>
   
  </div>
  )
}

export default page
