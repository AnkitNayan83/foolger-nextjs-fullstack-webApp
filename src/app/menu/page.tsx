import Menucard from "@/components/Menucard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Foogler | Menu",
  description:
    "Foogler is a food app on which you can order food at any time!!",
};

interface Item {
  name: string;
  id: string;
  createdAt: Date;
  title: string;
  desc: string;
  color: string;
  img: string;
  slug: string;
}

const getMenu = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const Menu = async () => {
  const menu = await getMenu();
  return (
    <div className="min-h-[90vh]">
      <div className="p-16">
        <span className="text-4xl border-r-[5px] border-r-red-500 pr-2 mt-4">
          Our Menu
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 my-6">
        {menu.categories.map((item: Item, i: any) => (
          <Menucard
            img={item.img || "/temp/m1.png"}
            name={item.title || "test"}
            desc={
              item.desc ||
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum voluptates numquam amet dolorum rem voluptatum ut, beatae hic voluptatibus neque doloribus, ex quaerat placeat quod id ipsum! Earum, rerum. "
            }
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;

//30:00
