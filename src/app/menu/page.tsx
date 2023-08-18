import Menucard from "@/components/Menucard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Foogler | Menu",
  description:
    "Foogler is a food app on which you can order food at any time!!",
};

const Menu = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="p-16">
        <span className="text-4xl border-r-[5px] border-r-red-500 pr-2 mt-4">
          Our Menu
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 my-6">
        <Menucard
          img={"/temp/m3.png"}
          name="pizza"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro necessitatibus iste repellendus quisquam laudantium quibusdam qui ipsum, accusamus cumque ullam praesentium. Sit rerum, unde nemo quam dolorum reiciendis perspiciatis."
        />
        <Menucard
          img={"/temp/m1.png"}
          name="Noodles"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro necessitatibus iste repellendus quisquam laudantium quibusdam qui ipsum, accusamus cumque ullam praesentium. Sit rerum, unde nemo quam dolorum reiciendis perspiciatis."
        />
        <Menucard
          img={"/temp/m2.png"}
          name="Burgur"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro necessitatibus iste repellendus quisquam laudantium quibusdam qui ipsum, accusamus cumque ullam praesentium. Sit rerum, unde nemo quam dolorum reiciendis perspiciatis."
        />
      </div>
    </div>
  );
};

export default Menu;
