"use client";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

type prod = {
  title: string;
  id: string;
  createdAt: Date;
  desc: string;
  img: string;
  price: number;
  isVeg: boolean;
  isFeatured: boolean;
  orderNumber: number;
  catSlug: string;
};

type prop = {
  products: Array<prod>;
  qty: number;
  status: string;
  price: number;
  date: string;
  isAdmin: Boolean;
  id: string;
};

const OrderCard = ({
  products,
  qty,
  status,
  price,
  date,
  isAdmin,
  id,
}: prop) => {
  const [st, setSt] = useState(status);
  const [load, setLoad] = useState(false);

  const handelChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSt(val);
    setLoad(true);
    await fetch(`http://localhost:3000/api/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: val }),
      cache: "no-store",
    });
    toast.success("Order updated successfully");
    setLoad(false);
  };
  return (
    <div className="shadow-[0_5px_40px_-15px_rgba(0,0,0,0.8)] rounded-md w-[100%] px-4 md:pr-5">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex flex-col">
          {products.map((item, i) => (
            <div className="flex items-center gap-2" key={i}>
              <Image
                src={item.img}
                width={200}
                height={200}
                alt=""
                className="object-contain"
              />
              <div className="md:flex-1 flex flex-col items-start gap-3">
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
                <p className="font-semibold w-[70%]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-col items-center gap-4 py-2">
          <span className="font-bold text-[24px]">{date.split("T")[0]}</span>
          <span className="font-bold text-[34px]">Rs:{price}</span>
          <span className="font-bold text-[34px]">Quantity:{qty}</span>
          {!isAdmin && (
            <span
              className={
                st === "delivered"
                  ? "text-green-500 font-bold text-[24px] capitalize"
                  : "text-red-500 font-bold text-[24px] capitalize"
              }
            >
              {st}
            </span>
          )}
          {isAdmin && (
            <span>
              {load ? (
                <div className="text-[24px]">Loading...</div>
              ) : (
                <select
                  className="p-5 text-[24px]"
                  onChange={(e) => handelChange(e)}
                  value={st}
                >
                  <option value="pending">Pending</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancled">Cancled</option>
                </select>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
