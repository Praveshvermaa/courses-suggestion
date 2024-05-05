"use client"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Login from '@/components/Login'
import SingUp from '@/components/SingUp'
import React, { useState } from 'react'

function Page() {
    const [login, setlogin] = useState(true)
    return (
        <div >
             <div>  <Header/></div> 
        
           
            <div className='flex bg-gray-400 flex-col flex-wrap gap-6 items-center my-auto p-6'>
                <h1 className='font-bold text-3xl underline'>Login/singup page</h1>
                <div>{login ? <Login /> : <SingUp />}</div>
                <button className='' onClick={() => setlogin((prev) => !prev)}>{login ? "Have you created account ? Singup" : "Account Already exist? Go Login"}</button>

            </div>
           

           
        </div>
    )
}

export default Page
