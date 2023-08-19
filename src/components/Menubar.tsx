"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 4, title: "Contact", url: "/" },
];

const Menubar = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      <Image
        src={open ? "/close.png" : "/open.png"}
        width={30}
        height={50}
        alt=""
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-[50px] w-full h-[calc(100vh-60px)] flex flex-col gap-20 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              className="hover:bg-white hover:text-red-500 cursor-pointer rounded-[10px] px-3"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href={user ? "/orders" : "/login"}
            onClick={() => setOpen(false)}
            className="hover:bg-white hover:text-red-500 cursor-pointer rounded-[10px] px-3"
          >
            {user ? "Orders" : "Login"}
          </Link>
          <Link
            href={"/cart"}
            onClick={() => setOpen(false)}
            className="hover:bg-white hover:text-red-500 cursor-pointer rounded-[10px] px-3"
          >
            Cart
          </Link>
          <Link
            href={"/login"}
            onClick={() => setOpen(false)}
            className="hover:bg-white hover:text-red-500 cursor-pointer rounded-[10px] px-3"
          >
            Login/Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menubar;
