import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({subsets:["latin"]})
const Heading = (Props:{title:string,heading:string}) => {
  return (
    <div className='flex flex-col space-y-5' >
      <div className='flex items-center gap-4'>
        <div className='w-[20px] h-[40px] bg-reddish rounded-md'/>
        <p className='text-reddish text-[16px] font-semibold'>{Props.title}</p>
      </div>
      <h1 className={`${inter.className} tracking-[4%] leading-[48px] text-[36px] font-semibold`}>{Props.heading}</h1>
    </div>
  )
}

export default Heading
