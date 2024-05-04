"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function page() {
    const form = useRef();
    const[name,setname] = useState("")
    const [email,setemail] = useState("")
    const [error,seterror] = useState(false)
    const[validiation,setvalidation]= useState(false)


    const sendEmail = (e) => {

        e.preventDefault();
        if (!name&&!email) {
            seterror(true)
            return

        }
        else{
            seterror(false)
        }
        

        emailjs
            .sendForm('service_e3px33m', 'template_f9aq793', form.current, {
                publicKey: '0RZWcFQeBhgzuMf1V',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("message sent");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className=' '>
            <form ref={form} onSubmit={sendEmail} className='flex flex--wrap flex-col items-center gap-5 bg-gray-400 p-12'>

                <div>  <label className='font-bold mr-1' htmlFor='to_name'>Name</label>
                    <input value={name} onChange={(e)=>setname(e.target.value)}  className='border-red-500 p-2' placeholder='enter name here' type="text" name="to_name" />
                </div>
               
                <div> <label className='font-bold mr-1' htmlFor='from_name'>Email</label>
                    <input onChange={(e)=>setemail(e.target.value)} value={email} className='border-red-500 p-2' placeholder='enter your email here' type="email" name="from_name" /></div>
             <div className='flex flex-wrap flex-col'>  <label className='font-bold mr-1' htmlFor='message'>Message</label>
                <textarea className='w-96 h-48 ' placeholder='write your message here' name="message" />
                </div>
             <div>  <input className='bg-blue-600 text-white border-2 border-black px-2 py-1' type="submit" value="Send" /></div> 
             {
              error?<div className='text-red-500 text-xl font-semibold text-center'>*please , check your name or email again </div>:""
             }
            </form>
           
        </div>
    )
}

export default page
