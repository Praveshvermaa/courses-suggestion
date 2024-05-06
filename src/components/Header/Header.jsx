"use client"
import React, { useEffect, useState } from 'react'
import { useRouter,usePathname } from 'next/navigation'

import Link from 'next/link'
// import { FaSearch } from "react-icons/fa";

function Header() {
  const route = useRouter()
  const pathname = usePathname()
 // const[inputtext,setinputtext]=useState("")
 const [details,setdetails] = useState()
 useEffect(()=>{
  const user = localStorage.getItem("user")
  if (!user ) {
    route.push("/courses")

    
  }
  
 
  else if(user && pathname=="/courses"){
    route.push("/")
  }
  else{
    setdetails(JSON.parse(user))
   
  }
 },[])
 const logouthandle = ()=>{
  localStorage.removeItem("user")
  route.push("/courses")
 }
 

  return (
    <div className='w-full  bg-slate-200  '
    
    >
    <nav className='bg-gray-400 w-full bg-cover '
    style={{ backgroundImage:`url("https://png.pngtree.com/thumb_back/fh260/background/20201014/pngtree-abstract-waving-particle-technology-background-abstract-gradient-design-template-for-brochures-image_416117.jpg")` }}
    >
        <div className='flex flex-wrap justify-around items-center mx-auto gap-2 max-w-3xl shadow-lg outline-none w-full hover:opacity-90 bg-gray-200 rounded-lg'>
            <div><img className='w-16 h-12 my-2' src="https://www.creativefabrica.com/wp-content/uploads/2022/07/29/PV-logo-design-Graphics-35052075-1.jpg" alt="logo" /></div>
            {
              details?<div className='flex gap-2 md:gap-24'>
              <Link  href={"/"} 
             className='text-black font-bold hover:text-orange-500 active:text-orange-500'
              >Home
           </Link>
           <Link href={"/about"} 
           className='text-black font-bold hover:text-orange-500 active:text-orange-500'
              
              >About
           </Link>
           <Link href={"/contact"} 
           className='text-black font-bold hover:text-orange-500 active:text-orange-500'
             
              >Contact
           </Link>
           <button  onClick={logouthandle} className='px-2 py-1 rounded-md border-2 border-black outline-black bg-blue-800 font-bold text-orange-400'>Logout</button>
            </div>: <Link href={"#"} className='px-0 py-1 md:px-2 rounded-md border-2 border-black outline-black bg-blue-800 font-bold text-orange-400'>Login/Singup</Link>
            }
          
         
    
    
    
        </div>

      
      
    </nav>
    </div>
  );
}

export default Header
