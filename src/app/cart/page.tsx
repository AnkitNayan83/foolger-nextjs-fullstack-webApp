import CartCard from "@/components/CartCard";
import React from "react";

const Cart = () => {
  return (
    <div className="h-[90vh]">
      <h1 className="text-3xl font-bold">cart</h1>
      <div>
        <CartCard
          name="Margerit Pizza"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eius dolor sapiente temporibus, nisi impedit explicabo esse quas"
          price={250}
          isVeg={true}
          qty={1}
          img="/temp/p2.png"
        />
      </div>
    </div>
  );
};

export default Cart;
