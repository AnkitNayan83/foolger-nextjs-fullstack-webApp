import FoodCard from "@/components/FoodCard";
import React from "react";

type Props = {
  params: { category: string };
};

const getProducts = async (cat: string) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${cat}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const MenuCategory = async ({ params }: Props) => {
  const data = await getProducts(params.category);
  return (
    <div className="min-h-[95vh] flex flex-col  items-center">
      <h1 className="capitalize  text-[32px] font-bold mt-7">
        {params.category} 😄
      </h1>
      <div className="flex items-center flex-wrap gap-14  mt-10 px-16">
        {data.map((item: any, i: any) => (
          <FoodCard
            name={item.name}
            price={item.price}
            desc={item.desc}
            img={item.img}
            isVeg={item.isVeg}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
