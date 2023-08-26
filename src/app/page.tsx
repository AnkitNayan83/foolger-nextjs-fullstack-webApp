import FoodCard from "@/components/FoodCard";
import OfferCard from "@/components/OfferCard";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foogler",
  description:
    "Foogler is a food app on which you can order food at any time!!",
};

type Products = {
  id: string;
  createdAt: Date;
  title: string;
  desc: string;
  img: string;
  price: number;
  isVeg: boolean;
  isFeatured: boolean;
  orderNumber: number;
  catSlug: string;
}[];

const getFeatured = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export default async function Home() {
  const data: Products = await getFeatured();
  return (
    <main>
      <section className="h-[calc(100vh-100px)] flex items-center justify-center  bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,1)),url('../../public/land.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col items-center justify-center gap-3 text-white left-0 right-0 top-0 bottom-0">
          <h1 className="px-[10px] text-[64px] font-bold  border-b-4 border-b-red-500">
            Foogler
          </h1>
          <p className="text-[32px] text-center font-medium">
            Enjoy the best food in the town without leaving your house
          </p>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex items-center justify-center">
          <h1 className="text-[32px] font-semibold border-r-4 border-r-red-500 pr-1">
            Our Best Seller&apos;s
          </h1>
        </div>
        <div className="flex justify-around px-[10px] flex-wrap min-h-[60vh] mt-16">
          {data.map((item, i) => (
            <FoodCard
              img={item.img}
              name={item.title}
              price={item.price}
              desc={item.desc}
              isVeg={item.isVeg}
              id={item.id}
              key={i}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={"/menu"} className="w-full flex justify-center mt-10">
            <Button className="bg-red-500 text-white rounded-[10px] py-6 px-4 md:w-[25%] text-[32px]">
              Explore More !!
            </Button>
          </Link>
        </div>
        <OfferCard />
      </section>
    </main>
  );
}
