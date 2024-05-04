"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Searchbutton() {
    const [isinputtext,setisinputtext]= useState(false)
    const [selectinput,setselectinput] = useState("")
    const arr = ["DSA","Java","C++","Javascript","Python"]
  return (
    <div>
          <div className='bg-slate-800 flex justify-center items-center mx-auto mt-5 md:w-full md:h-12 gap-1'>
           <div className='flex flex-col flex-wrap relative shadow-lg rounded-lg'>
            <input  onClick={()=>{setisinputtext(!isinputtext)}} value={selectinput} className='shadow-lg text-black bg-white border-2 outline outline-black rounded-md px-2 py-1 font-bold' placeholder='click here to select course'  type="text" />
            {
                isinputtext?<ul className='absolute top-9'>
                    <li onClick={()=>setselectinput("DSA")} className='bg-white px-10 py-1 cursor-pointer'>DSA</li>
                    <li  onClick={()=>setselectinput("java")} className='bg-white px-10 py-1 cursor-pointer'>Java</li>
                    <li  onClick={()=>setselectinput("cplus")} className='bg-white px-10 py-1 cursor-pointer'>C++</li>
                    <li  onClick={()=>setselectinput("javascript")} className='bg-white px-10 py-1 cursor-pointer'>Javascript</li>
                    <li  onClick={()=>setselectinput("python")} className='bg-white px-10 py-1 cursor-pointer' >Python</li>

                </ul>:""
            }
          
            </div>
            <div>
           
           <Link href={`/language/${selectinput}`} 
           className="shadow-lg rounded-lg border-2 outline px-3 py-1 outline-black bg-blue-800 text-white">Search

           </Link>
           </div>

           
    
        </div>
      
    </div>
  )
}

export default Searchbutton
