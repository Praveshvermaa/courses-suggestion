"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


function SingUp() {
  const route =  useRouter()
  const router = useRouter()
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [contact, setcontact] = useState()
  const [error, seterror] = useState(false)
  const handleSumbit = async () => {


    if (!username || !email || !password || !contact) {
      seterror(true)
      return false
    }
    else {
      seterror(false)

    }
    let data = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ username, email, password, contact })
    })
    data = await data.json()

    if (data.success) {
      
      const {result} = data
      delete  result.password
      localStorage.setItem("user",JSON.stringify(result))
      route.push("/")

      
    }
    



  }

  return (

    <div className='w-full '>
      <div className='flex flex-wrap flex-col gap-14  w-full  '>
        <div className='    '>
          <div> <label className=' left-1 z-index z-50'>username</label></div>
          <input onChange={(e) => setusername(e.target.value)} value={username} type='text' name='name' id='name' placeholder='enter username name' className=' border top-3 z-0 px-2 py-1' />
          {error && !username ? <span className='text-red-700 text-xl'>please,enter valid username</span> : ""}
        </div>
        <div className='  '>
          <div>   <label className=' left-1 z-index z-50 '>Email</label></div>
          <input onChange={(e) => setemail(e.target.value)} value={email} type='text' name='name' id='name' placeholder='enter email' className=' border top-3 z-0 px-2 py-1' />
          {error && !email ? <span className='text-red-700 text-xl'>please,enter valid email</span> : ""}
        </div>
        <div className='    '>
          <div>   <label className=' left-1 z-index z-50'>password</label></div>
          <input onChange={(e) => setpassword(e.target.value)} value={password} type='password' name='name' id='name' placeholder='enter password' className=' border top-3 z-0 px-2 py-1' />
          {error && !password ? <span className='text-red-700 text-xl'>please,enter valid password</span> : ""}
        </div>
        <div className='   '>



          <div className='   '>
            <div>  <label className=' left-1 z-index z-50 '>contact no</label></div>
            <input onChange={(e) => setcontact(e.target.value)} value={contact} type='text' name='name' id='name' placeholder='enter contact no.' className=' border top-3 z-0 px-2 py-1' />
            {error && !contact ? <span className='text-red-700 text-xl'>please,enter valid contact no</span> : ""}
          </div>
          <div className='flex justify-center '>
            <button onClick={handleSumbit} className='mt-2 text-center px-2 py-1 bg-slate-800 text-white font-bold rounded-sm'>Sing up

            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default SingUp
