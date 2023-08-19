"use client";

import CartCard from "@/components/CartCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";

const Cart = () => {
  const [applied, setApplied] = useState(false);
  const [coupon, setCoupon] = useState("");
  const inputRef = useRef();

  const hadelCoupon = (cc: string): void => {
    if (cc === "WELCOME20") {
      setApplied(true);
      setCoupon("");
    } else {
      alert("Invalid coupon code");
    }
  };

  return (
    <div className="min-h-[90vh]">
      <h1 className="text-3xl font-bold text-center text-[32px] mt-5">
        Your Cart 🛒
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-start gap-4 my-16 px-6">
        <div className="flex flex-col items-center gap-14 flex-3">
          <CartCard
            name="Maharaja Burgur"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eius dolor sapiente temporibus, nisi impedit explicabo esse quas"
            price={250}
            isVeg={true}
            qty={1}
            img="/temp/p2.png"
          />
          <CartCard
            name="Margerit Pizza"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eius dolor sapiente temporibus, nisi impedit explicabo esse quas"
            price={250}
            isVeg={false}
            qty={2}
            img="/temp/p5.png"
          />
          <CartCard
            name="Spring Pizza"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eius dolor sapiente temporibus, nisi impedit explicabo esse quas"
            price={250}
            isVeg={false}
            qty={3}
            img="/temp/p4.png"
          />
          <CartCard
            name="Autum Pizza"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eius dolor sapiente temporibus, nisi impedit explicabo esse quas"
            price={200}
            isVeg={true}
            qty={1}
            img="/temp/p8.png"
          />
        </div>
        <div className="flex flex-2 flex-col items-center gap-6 border-2 border-gray-500 rounded-md p-4">
          <h1 className="text-3xl font-bold text-center">Order Summary</h1>
          <div className="flex items-center justify-between w-full text-xl">
            <span>Amount:</span>
            <span className="font-bold">Rs.500</span>
          </div>
          <div className="flex items-center justify-between w-full text-xl">
            <span>Delivery Charge:</span>
            <span className="font-bold">Rs.50</span>
          </div>
          <div className="flex items-center justify-between w-full text-xl">
            <span>Gst:</span>
            <span className="font-bold">Rs.24</span>
          </div>
          {applied && (
            <div className="flex items-center justify-between w-full text-xl">
              <span className="text-green-500">Discount:</span>
              <span className="font-bold">-Rs.100</span>
            </div>
          )}
          <div className="flex items-center justify-between w-full text-xl">
            <span>Total:</span>
            <span className="font-bold">Rs.600</span>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <Button
              onClick={() => {
                hadelCoupon(coupon);
              }}
            >
              Apply
            </Button>
          </div>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
