import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const OfferCard = () => {
  return (
    <div className="h-[70vh] mt-20 bg-[url('../../public/offerBg.png')] bg-cover bg-no-repeat bg-center flex flex-col md:flex-row items-center justify-around">
      <div className="w-[80%] md:w-[30%] h-[60%]  relative">
        <Image src={"/offerProduct.png"} fill={true} alt="" />
      </div>
      <div className="text-white flex flex-col gap-5 pl-5 md:pl-0">
        <h1 className="font-bold text-[42px]">
          Get flat 20% off on first five orders
        </h1>
        <h2 className="font-bold text-xl">Use Code: WELCOME20</h2>
        <span className="text-gray-400">Terms and conditions applied*</span>
        <Link href={"/menu"}>
          <Button className="w-[35%] md:[25%] mb-2 md:mb-0">Order Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
