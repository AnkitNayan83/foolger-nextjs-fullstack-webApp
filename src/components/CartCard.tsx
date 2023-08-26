import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useCartStore } from "@/utils/store";
import { CartItemType } from "@/utils/type";

const CartCard = ({ item }: { item: CartItemType }) => {
  const { removeFromCart } = useCartStore();
  return (
    <div className="flex flex-col md:flex-row md:items-center shadow-[0_5px_40px_-15px_rgba(0,0,0,0.8)]  rounded-md w-[100%] p-5 ">
      <div className="md:flex-1 h-[250px] relative">
        <Image src={item.img} fill={true} alt="" className="object-contain" />
      </div>
      <div className=" md:flex-1 flex flex-col items-start gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">
            Name: <strong>{item.title}</strong>{" "}
          </span>
          <Image
            src={item.isVeg ? "/veg.png" : "/nonveg.png"}
            width={25}
            height={25}
            alt=""
          />
        </div>
        <p className="font-semibold">{item.desc}</p>
      </div>
      <div className="md:flex-1 flex flex-col items-end gap-4">
        <span className="font-bold text-[24px]">Rs:{item.price}</span>
        <span className="font-bold text-[24px]">Quantity:{item.quantity}</span>
        <Button
          className="w-full md:w-[50%]"
          onClick={() => removeFromCart(item)}
        >
          Remove from cart
        </Button>
      </div>
    </div>
  );
};

export default CartCard;
