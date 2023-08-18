import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface prop {
  img: string;
  name: string;
  desc: string;
}

const Menucard = ({ img, name, desc }: prop) => {
  return (
    <div className="flex flex-col md:flex-row w-[60%] shadow-[0_5px_60px_-15px_rgba(0,0,0,0.8)] rounded-[20px] md:overflow-hidden hover:scale-110 transition-all ease-in-out cursor-pointer delay-150">
      <div className="hidden md:block md:flex-1 relative">
        <Image src={img} fill={true} alt="" className="object-cover" />
      </div>
      <div className="p-6 md:flex-1 flex flex-col items-start gap-3">
        <h1 className="text-2xl font-bold capitalize">{name}</h1>
        <p className="text-justify font-semibold">{desc}</p>
        <div className="w-[100%] flex justify-end">
          <Button className="text-white bg-red-500 w-25%">Browse Menu</Button>
        </div>
      </div>
    </div>
  );
};

export default Menucard;
