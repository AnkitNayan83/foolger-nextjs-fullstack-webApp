"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/utils/store";

interface prop {
  img: string;
  name: string;
  desc: string;
  price: number;
  isVeg: Boolean;
  id: string;
}

const FoodCard = ({ img, name, desc, price, isVeg, id }: prop) => {
  const [count, setCount] = useState(1);
  const [isClicked, setIsclicked] = useState(false);
  const { addToCart, removeFromCart } = useCartStore();

  const handelInit = (): void => {
    setIsclicked(true);
    addToCart({ id, img, title: name, price, quantity: count, isVeg, desc });
  };

  const handelClick = (type: string): void => {
    if (type === "add") {
      setCount(count + 1);
      addToCart({ id, img, title: name, price, quantity: count, isVeg, desc });
    } else {
      if (count > 1) {
        setCount(count - 1);
        addToCart({
          id,
          img,
          title: name,
          price,
          quantity: count,
          isVeg,
          desc,
        });
      } else {
        setIsclicked(false);
        removeFromCart({
          id,
          img,
          title: name,
          price,
          quantity: count,
          isVeg,
          desc,
        });
      }
    }
  };

  return (
    <div className="w-[300px] h-[500px] overflow-auto mb-7 rounded-[10px] flex flex-col items-center justify-between shadow-[0_5px_60px_-15px_rgba(0,0,0,0.8)] hover:scale-110 transition-all ease-in-out delay-100 cursor-default py-4">
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
            onClick={handelInit}
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
