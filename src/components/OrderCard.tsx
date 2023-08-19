import Image from "next/image";
import React from "react";

type prop = {
  img: string;
  name: string;
  price: number;
  isVeg: boolean;
  desc: string;
  qty: number;
  status: string;
};

const OrderCard = ({ img, name, price, desc, isVeg, qty, status }: prop) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center shadow-[0_5px_40px_-15px_rgba(0,0,0,0.8)] rounded-md w-[100%] px-4 md:pr-5">
      <div className="md:flex-1 h-[250px] relative">
        <Image src={img} fill={true} alt="" className="object-contain" />
      </div>
      <div className="md:flex-1 flex flex-col items-start gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">
            Name: <strong>{name}</strong>{" "}
          </span>
          <Image
            src={isVeg ? "/veg.png" : "/nonveg.png"}
            width={25}
            height={25}
            alt=""
          />
        </div>
        <p className="font-semibold">{desc}</p>
      </div>
      <div className="md:flex-1 flex flex-col items-end gap-4">
        <span className="font-bold text-[24px]">Rs:{price}</span>
        <span className="font-bold text-[24px]">Quantity:{qty}</span>
        <span
          className={
            status === "delivered"
              ? "text-green-500 font-bold text-[24px] capitalize"
              : "text-red-500 font-bold text-[24px] capitalize"
          }
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default OrderCard;
