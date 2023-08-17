import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

interface prop {
  img: string;
  name: string;
  desc: string;
  price: number;
  isVeg: boolean;
}

const FoodCard = ({ img, name, desc, price, isVeg }: prop) => {
  return (
    <div className="w-[300px] h-[400px] mb-7 rounded-[10px] flex flex-col items-center gap-2 shadow-[0_5px_60px_-15px_rgba(0,0,0,0.8)]">
      <Image
        src={img}
        width={200}
        height={100}
        className="object-contain"
        alt=""
      />
      <div className="w-[100%] flex items-center justify-between">
        <h1 className="text-lg font-bold ml-7">{name}</h1>
        <Image
          src={isVeg ? "/veg.png" : "/nonveg.png"}
          width={20}
          height={20}
          alt=""
          className="mr-7"
        />
      </div>
      <p className="w-[80%] text-justify font-[400]">{desc}</p>
      <div className="w-[100%] flex items-center justify-around">
        <span className="font-bold text-[18px]">Rs: {price}</span>
        <Button className="text-white bg-red-500">Add to cart</Button>
      </div>
    </div>
  );
};

export default FoodCard;
