"use client"
import Link from 'next/link'
import React, { memo, useState } from 'react'

const LibraryNavbar = () => {
  const [activeLibary, setactiveLibary] = useState("posts")
  return (
    <div className='w-full bg-white sticky top-0 z-[1000]'>
      <div className='pt-10'>
        <h1 className='text-[1.4rem] font-poppins font-semibold px-10 pt-10 pb-6 shadow'>Your Library</h1>
        <nav className='shadow-bottom'>
          <ul className='flex items-end h-[4rem] gap-10 px-10 pb-[.9rem] font-poppins text-sm font-semibold text-[#858585]'>
            {["posts","collection","community"].map((item,id)=>{
              return <Link href={`/creator/library/${item}`} key={id} >
                <li key={id} onClick={()=>{setactiveLibary(item)}} className={`capitalize hover:text-[#0d6efd] hover:underline hover:underline-offset-[1.1rem] hover:decoration-[#0d6efd] hover:decoration-[2.5px] cursor-pointer ${activeLibary===item?"text-[#0d6efd] underline underline-offset-[1.1rem] decoration-[#0d6efd] decoration-[2.5px]":""}`}>{item}</li>
              </Link>
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default memo(LibraryNavbar)
