import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type prop = {
  img: string;
  name: string;
  price: number;
  isVeg: boolean;
  desc: string;
  qty: number;
};

const CartCard = ({ img, name, price, desc, isVeg, qty }: prop) => {
  return (
    <div className="flex items-center">
      <div className="flex-1 h-[300px] relative">
        <Image src={img} fill={true} alt="" className="object-contain" />
      </div>
      <div className="flex-1 flex flex-col items-center gap-3">
        <span>
          Name: <strong>{name}</strong>{" "}
        </span>
        <p>{desc}</p>
      </div>
      <div className="flex-1 flex flex-col">
        <span>Rs:{price}</span>
        <span>Quantity:{qty}</span>
        <Button className="w-[30%]">Remove from cart</Button>
      </div>
    </div>
  );
};

export default CartCard;
