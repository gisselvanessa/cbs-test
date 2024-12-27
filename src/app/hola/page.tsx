'use client'
import React, { useEffect } from 'react'
import Cookies from "js-cookie";

export default function Page (){
    useEffect(() => {
        const token = Cookies.get();
        console.log(token)
      }, []);
  return (
    <div className='text-black'>
      holaa
    </div>
  )
}


