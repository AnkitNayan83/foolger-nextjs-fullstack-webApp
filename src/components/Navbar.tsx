import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div>
            <span>Home</span>
            <span>Menu</span>
            <span>Contact</span>
        </div>
        <div>
            <span>FOOGLER</span>
        </div>
        <div>
            <span>
                {/* <Image src={Phone} alt='image of a phone'/> */}
            </span>
        </div>
    </div>
  )
}

export default Navbar