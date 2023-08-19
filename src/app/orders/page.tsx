import OrderCard from "@/components/OrderCard";
import React from "react";

const Orders = () => {
  return (
    <div className="min-h-90vh">
      <h1 className="text-[32px] text-center font-bold my-6">Your Orders</h1>
      <div className="flex flex-col items-center justify-center gap-10 p-10">
        <OrderCard
          name="Maharaja Burgur"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eius dolor sapiente temporibus, nisi impedit explicabo esse quas"
          price={250}
          isVeg={true}
          qty={1}
          img="/temp/p2.png"
          status="pending"
        />
        <OrderCard
          name="Margerit Pizza"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eius dolor sapiente temporibus, nisi impedit explicabo esse quas"
          price={250}
          isVeg={false}
          qty={2}
          img="/temp/p5.png"
          status="pending"
        />
        <OrderCard
          name="Spring Pizza"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eius dolor sapiente temporibus, nisi impedit explicabo esse quas"
          price={250}
          isVeg={false}
          qty={3}
          img="/temp/p4.png"
          status="delivered"
        />
        <OrderCard
          name="Autum Pizza"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eius dolor sapiente temporibus, nisi impedit explicabo esse quas"
          price={200}
          isVeg={true}
          qty={1}
          img="/temp/p8.png"
          status="delivered"
        />
      </div>
    </div>
  );
};

export default Orders;
