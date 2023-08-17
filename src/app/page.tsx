import FoodCard from "@/components/FoodCard";

export default function Home() {
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
      <section className="my-10">
        <div className="flex items-center justify-center">
          <h1 className="text-[32px] font-semibold border-r-4 border-r-red-500 pr-1">
            Our Best Seller's
          </h1>
        </div>
        <div className="flex justify-around px-[10%] flex-wrap min-h-[100vh] mt-16">
          <FoodCard
            img={"/temp/p1.png"}
            name="Peri Peri Pizza"
            price={259}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti dolores repellendus sequi officia quasi explicabo"
            isVeg={false}
          />
          <FoodCard
            img={"/temp/p1.png"}
            name="Peri Peri Pizza"
            price={259}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti dolores repellendus sequi officia quasi explicabo"
            isVeg={false}
          />
          <FoodCard
            img={"/temp/p1.png"}
            name="Peri Peri Pizza"
            price={259}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti dolores repellendus sequi officia quasi explicabo"
            isVeg={false}
          />
        </div>
      </section>
    </main>
  );
}
