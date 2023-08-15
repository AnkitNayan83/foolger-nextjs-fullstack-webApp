import React, { useState } from 'react'

interface prop {
  setHideNotification: (show:boolean) => void
}

const Notification = ({setHideNotification}:prop) => {
  return (
    <div className='flex items-center justify-between bg-red-500 h-10 pr-[10px]'>
        <span></span>
        <span className='text-white'>Free delivery for all orders above RS.250</span>
        <span onClick={()=>setHideNotification(false)} className='text-white font-extrabold cursor-pointer'>X</span>
    </div>
  )
}

export default Notification