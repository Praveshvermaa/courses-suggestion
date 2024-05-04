"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Login() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState(false)
  const [Isresult, setIsresult] = useState(true)
  const router = useRouter()
  const errorhandle = async () => {
    if (!email || !password) {
      seterror(true)
      return false

    }
    else {
      seterror(false)
    }
    let data = await fetch("http://localhost:3000/api/users",

      {
        method: "Post",
        body: JSON.stringify({ email, password, login: true })
      })
    data = await data.json()
    if (data.success) {


      const { result } = data
      delete result.password
      localStorage.setItem("user", JSON.stringify(result))
      router.push("/")
    }
    else {
      // alert("please, create account first !!")
      setIsresult(false)
    }









  }
  return (
    <div>
      <div className='flex flex-wrap flex-col gap-10 w-full items-center mt-5'>
        <div className=' '>
          <label className=' font-bold'>Email</label><br />
          <input value={email} onChange={(e) => setemail(e.target.value)} type='text' name='name' id='name' placeholder='enter email' className=' border top-3 z-0 px-2 py-1' />
          {error && !email ? <div className='text-red-800 text-xl '>* please, enter valid email</div> : ""}
        </div>
        <div className=''>
          <label className='  font-bold'>password</label><br />
          <input value={password} onChange={(e) => setpassword(e.target.value)} type='password' name='name' id='name' placeholder='enter password' className=' border top-3 z-0 px-2 py-1' />
          {error && !password ? <div className='text-red-800 text-xl '>* please, enter valid password</div> : ""}
        </div>
        <div>
          <button onClick={errorhandle} className='px-2 py-1 bg-slate-800 text-white font-bold rounded-sm'>Login</button>
        </div>
        <div>
        {Isresult ? "" : <div className='text-red-500 text-xl font-semibold '>* your account is not found , Please  sign up first</div>}
        </div>
      </div>
    </div>
  )
}

export default Login
