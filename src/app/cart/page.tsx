"use client";

import CartCard from "@/components/CartCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const [applied, setApplied] = useState(false);
  const [coupon, setCoupon] = useState("");
  const { products, totalItems, totalPrice } = useCartStore();
  const [amount, setAmount] = useState(totalPrice + 10);
  const router = useRouter();

  const hadelCoupon = (cc: string): void => {
    if (cc === "WELCOME20") {
      setApplied(true);
      setCoupon("");
      setAmount(amount - 100);
    } else {
      alert("Invalid coupon code");
    }
  };

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const { data: session } = useSession();

  const handelClick = async () => {
    if (!session) {
      router.push("/login");
      toast.error("Please login to complete your purchase");
      return;
    } else {
      try {
        const res = await fetch("http://localhost:300/api/orders", {
          method: "POST",
          headers: { "Contnt-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Pending",
            userEmail: session.user.email,
          }),
        });
        const data = await res.json();
        router.push(`/pay/${data.id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (products.length === 0) {
    return (
      <div className="min-h-[90vh] text-[32px] font-bold flex items-center justify-center">
        Your Cart is empty 🪹
      </div>
    );
  } else {
    return (
      <div className="min-h-[90vh]">
        <h1 className="text-3xl font-bold text-center text-[32px] mt-5">
          Your Cart 🛒
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-start gap-4 my-16 px-6">
          <div className="flex flex-col items-center gap-14 flex-3 w-[70%]">
            {products.map((item) => (
              <CartCard item={item} key={item.id} />
            ))}
          </div>
          <div className="flex w-[30%] flex-2 flex-col items-center gap-6 border-2 border-gray-500 rounded-md p-4">
            <h1 className="text-3xl font-bold text-center">Order Summary</h1>
            <div className="flex items-center justify-between w-full text-xl">
              <span>Amount:</span>
              <span className="font-bold">Rs.{totalPrice}</span>
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
              <span className="font-bold">Rs.{amount}</span>
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
            <Button onClick={handelClick}>Buy Now</Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
