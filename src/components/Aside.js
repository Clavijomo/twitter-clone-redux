import React from 'react'
import {Link, useLocation} from "react-router-dom";

const Aside = () => {  

  const location = useLocation();

  return (
    <div className="h-full md:w-1/3 py-5">      
      <Link 
        to={'/listTweets'}
        className={`${location.pathname === '/listTweets' ? 'font-semibold' : 'font-normal'} px-5 py-3 hover:bg-zinc-200 w-max block transition rounded-full text-xl`}
      >
        Tweets
      </Link>     
      <Link
        to={'/'}
        className={`${location.pathname === '/' ? 'font-semibold' : 'font-normal'} px-5 py-3 hover:bg-zinc-200 w-max block transition rounded-full text-xl`}>
          Explorar
      </Link>
      <Link
        to={'/create'}
        className={`${location.pathname === '/create' ? 'font-semibold' : 'font-normal'} bg-blue-400 block rounded-full w-max text-center py-3 px-10 text-white mt-5 hover:bg-blue-500 transition`}
      >
        Twittear
      </Link> 
    </div>
  )
}

export default Aside;