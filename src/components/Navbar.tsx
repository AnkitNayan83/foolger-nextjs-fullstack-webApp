import Image from "next/image";
import React from "react";
import Menubar from "./Menubar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between relative text-red-500 px-5 md:px-20 h-[60px] font-semibold border-b-[2px] border-b-gray-300">
      {/* left */}
      <div className="hidden md:flex items-center gap-[20px]">
        <Link href="/">
          <span className='after:content-[""] after:block after:w-0 after:h-[3px] after:m-auto after:bg-red-500 after:transition-all after:ease-in-out after:delay-150 hover:after:w-[100%] cursor-pointer'>
            Home
          </span>
        </Link>
        <Link href="/menu">
          <span className='after:content-[""] after:block after:w-0 after:h-[3px] after:m-auto after:bg-red-500 after:transition-all after:ease-in-out after:delay-150 hover:after:w-[100%] cursor-pointer'>
            Menu
          </span>
        </Link>
        <Link href="/#footer">
          <span className='after:content-[""] after:block after:w-0 after:h-[3px] after:m-auto after:bg-red-500 after:transition-all after:ease-in-out after:delay-150 hover:after:w-[100%] cursor-pointer'>
            Contact
          </span>
        </Link>
      </div>
      {/* middle */}
      <div className="felx items-center justify-between">
        <Link href={"/"}>
          <span className="text-3xl font-extrabold text-red-500 drop-shadow-2xl ">
            FOOGLER
          </span>
        </Link>
      </div>

      {/* menu */}

      <div className="md:hidden">
        <Menubar />
      </div>

      {/* right */}
      <div className="hidden md:flex items-center gap-[20px]">
        <span className="flex items-center text-white bg-orange-300 px-1 rounded-md cursor-pointer">
          <Image
            src="/phone.png"
            width={20}
            height={20}
            alt="image of a phone"
          />
          <span>123 456 789</span>
        </span>
        <Link href="/orders">
          <span className='after:content-[""] after:block after:w-0 after:h-[3px] after:m-auto after:bg-red-500 after:transition-all after:ease-in-out after:delay-150 hover:after:w-[100%] cursor-pointer'>
            Orders
          </span>
        </Link>
        <div className='after:content-[""] after:block after:w-0 after:h-[3px] after:m-auto after:bg-red-500 after:transition-all after:ease-in-out after:delay-150 hover:after:w-[100%] cursor-pointer'>
          <Link href={"/cart"}>
            <span className="flex items-center gap-[5px]">
              <Image src="/cart.png" width={20} height={20} alt="cart" />
              <span>Cart</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
