"use client";

import OrderCard from "@/components/OrderCard";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const Orders = () => {
  const { data: session, status } = useSession();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  if (isLoading || status === "loading") {
    return (
      <div className="min-h-[90vh] flex items-center justify-center">
        <h1 className="text-[32px] font-bold">Loading Please wait...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[90vh] flex items-center justify-center">
        <h1 className="text-[32px] font-bold">Sorry something went wrong 🥲</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-[32px] text-center font-bold my-6">Your Orders</h1>
      <div className="flex flex-col items-center justify-center gap-10 p-10">
        {data?.map((item: any) => (
          <OrderCard
            products={item.products}
            price={item.price}
            qty={1}
            status={item.status}
            key={item.id}
            isAdmin={session?.user.isAdmin!}
            date={item.createdAt.toString()}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
