import React from 'react'

function page() {
  return (
    <div className='flex flex-wrap flex-row bg-gray-400 w-full my-10  justify-evenly' >
    <div className='flex flex-wrap flex-col w-full max-w-48 p-3'> 
      <h1 className='font-bold text-5xl text-center underline'>ABOUT US</h1>
      <p className='mt-2 p-2 text-2xl font-bold'>"In order to be the best, you must learn from the best ... "</p>
      <p>Unlock Your Potential: Where Knowledge Meets Excellence. Explore the Best Courses on Our Platform Today!"</p>
    </div>
    
      <img className='' src="https://th.bing.com/th/id/OIP.cMDJtLWuf2Ya_k4yQH3GvQHaE8?rs=1&pid=ImgDetMain" alt="" />
    
    
  </div>
  )
}

export default page
