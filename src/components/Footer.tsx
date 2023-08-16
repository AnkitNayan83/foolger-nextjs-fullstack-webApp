import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row md:gap-0 items-center justify-between px-5 md:h-[50px] text-white bg-red-500'>
      <span>Foogler</span>
      <span>&copy; All Rights Reserved</span>
      <div>
        foo.info34@xyz.com
      </div>
    </div>
  )
}

export default Footer