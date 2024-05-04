import React from 'react'
import Link from 'next/link'
import Searchbutton from '@/components/Searchbutton'
function page() {
  return (
    <div>
       <div className='bg-gray-400 flex flex-wrap flex-col' >
       <div><Searchbutton/></div>
    <h1  className='my-5 text-center text-wrap text-xl  font-bold text-black'>Here are top <span className='font-bold text-3xl underline text-blue-700'>Python courses</span> according to our researches</h1>
    <div className='flex flex-wrap justify-around bg-cover'
      style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className='outline-none outline-black rounded-sm shadow-xl my-5'>
        <img className='w-96 h-96' src="https://i.ytimg.com/vi/s2Vu11Lys0M/maxresdefault.jpg" alt="" />
        <Link href="https://jana-bergant.medium.com/learn-python-courseras-python-for-everybody-specialization-89d089d0a9eb" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
       <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://img-c.udemycdn.com/course/750x422/567828_67d0.jpg" alt="" />
        <Link href="https://www.udemy.com/course/complete-python-bootcamp/?couponCode=IND21PM" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
      <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://prod-discovery.edx-cdn.org/cdn-cgi/image/width=378,height=auto,quality=85,format=webp/media/course/image/2cc794d0-316d-42f7-bbfd-25c34e4cd5df-033e46d516c0.png" alt="" />
        <Link href="https://www.edx.org/learn/python/harvard-university-cs50-s-introduction-to-programming-with-python" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
    </div>
    <div className='flex flex-wrap justify-around bg-cover'
      style={{ backgroundImage:`url("https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?rs=1&pid=ImgDetMain")` }}
    >
      <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://opengraph.githubassets.com/a55962de70ccd2eab9088e37b9f080aa1728ebdd36fe9ea18924467dabdfb5a4/Codecademy/learn-python" alt="" />
        <Link href="https://www.codecademy.com/catalog/language/python?g_network=g&g_productchannel=&g_adid=624951457624&g_locinterest=&g_keyword=codecademy%27s%20learn%20python&g_acctid=243-039-7011&g_adtype=&g_keywordid=kwd-1960775174838&g_ifcreative=&g_campaign=account&g_locphysical=1007792&g_adgroupid=128133970308&g_productid=&g_source={sourceid}&g_merchantid=&g_placement=&g_partition=&g_campaignid=1726903838&g_ifproduct=&utm_id=t_kwd-1960775174838:ag_128133970308:cp_1726903838:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=codecademy%27s%20learn%20python&utm_campaign=INTL_Brand_Exact&utm_content=624951457624&g_adtype=search&g_acctid=243-039-7011&gad_source=1&gclid=Cj0KCQjwltKxBhDMARIsAG8KnqX3tlSFvBg2pj30DTfEFkLBnuJUcthjXGi8reYlSD8SuFWOUnucpusaAq7oEALw_wcB" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
       <div className='outline-none outline-black rounded-sm shadow-lg my-5'>
        <img className='w-96 h-96' src="https://miro.medium.com/v2/resize:fit:1400/1*oa0hp2-eqJK4VKdDDU-7EA.png" alt="" />
        <Link href="https://www.udacity.com/course/programming-for-data-science-nanodegree--nd104?promo=year_end&coupon=MAY40&utm_source=gsem_india_brand&utm_medium=ads_r&utm_campaign=18068487072_c_individuals&utm_term=140610585336&utm_keyword=udacity%20python%20data_e&utm_source=gsem_india_brand&utm_medium=ads_r&utm_campaign=18068487072_c&utm_term=140610585336_in&utm_keyword=udacity%20python%20data_e&gad_source=1&gclid=Cj0KCQjwltKxBhDMARIsAG8KnqVZkOf4Vj4U2S9WMLGAvob6fZWJv3qG5N1-38u1V64LhJnFwxRRw-IaAl1bEALw_wcB" className="bg-blue-700 text-white px-2 py-1">Visit on website</Link>
      </div>
      
      
    </div>
    
  </div>
    </div>
  )
}

export default page
