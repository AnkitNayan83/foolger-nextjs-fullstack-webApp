"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface prop {
  img: string;
  name: string;
  desc: string;
  price: number;
  isVeg: boolean;
}

const FoodCard = ({ img, name, desc, price, isVeg }: prop) => {
  const [count, setCount] = useState(1);
  const [isClicked, setIsclicked] = useState(false);

  const handelClick = (type: string): void => {
    if (type === "add") {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      } else {
        setIsclicked(false);
      }
    }
  };

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
        {!isClicked && (
          <Button
            className="text-white bg-red-500 cursor-pointer"
            onClick={() => setIsclicked(true)}
          >
            Add to cart
          </Button>
        )}
        {isClicked && (
          <span className="flex items-center gap-2 rounded-[10px] bg-red-500  px-5 h-[45px]">
            <span
              className="text-white font-bold cursor-pointer"
              onClick={() => handelClick("add")}
            >
              +
            </span>
            <span className="bg-white px-2 h-[100%] flex items-center">
              {count}
            </span>
            <span
              className="text-white font-bold cursor-pointer"
              onClick={() => handelClick("sub")}
            >
              -
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
