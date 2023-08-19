import FoodCard from "@/components/FoodCard";
import React from "react";

type Props = {
  params: { category: string };
};

const data = [
  {
    name: "Spring Fall Pizza",
    img: "/temp/p1.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 250,
    isVeg: true,
  },
  {
    name: "Periperi Pizza",
    img: "/temp/p2.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 250,
    isVeg: true,
  },
  {
    name: "Oregano Pizza",
    img: "/temp/p3.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 300,
    isVeg: false,
  },
  {
    name: "Ring Pizza",
    img: "/temp/p4.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 250,
    isVeg: true,
  },
  {
    name: "Autum Pizza",
    img: "/temp/p5.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 350,
    isVeg: false,
  },
  {
    name: "Shower Pizza",
    img: "/temp/p6.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 200,
    isVeg: true,
  },
  {
    name: "JAZZ Pizza",
    img: "/temp/p7.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 350,
    isVeg: false,
  },
  {
    name: "SUII Pizza",
    img: "/temp/p8.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 400,
    isVeg: false,
  },
  {
    name: "Dawn Pizza",
    img: "/temp/p9.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 250,
    isVeg: true,
  },
  {
    name: "Dusk Pizza",
    img: "/temp/p10.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 300,
    isVeg: false,
  },
  {
    name: "Delight Pizza",
    img: "/temp/p12.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 250,
    isVeg: true,
  },

  {
    name: "Morning Pizza",
    img: "/temp/p11.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex sit, quas quaerat sunt, nam quia, explicabo enim dolorem dolores",
    price: 250,
    isVeg: true,
  },
];

const MenuCategory = ({ params }: Props) => {
  return (
    <div className="min-h-[95vh] flex flex-col justify-center items-center">
      <h1 className="capitalize  text-[32px] font-bold mt-7">
        {params.category} 😄
      </h1>
      <div className="flex items-center flex-wrap gap-16 justify-center mt-10">
        {data.map((item, i) => (
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
