import Image from 'next/image'
import React from 'react'

const Menubar = () => {
  return (
    <div className='bg-red-500 text-white absolute left-0 top-[50px] w-full h-[calc(100vh-60px)] flex flex-col gap-20 items-center justify-center text-3xl z-10'>
        <span>Menu</span>
        <span>Contact</span>
        <span>Orders</span>
        <span>Cart</span>
        <span>Logout</span>
    </div>
  )
}

export default Menubar