import ImageContainer from "@/components/ImageContainer";
import Title from "@/components/Title";
import CashierIcons from "@/components/porto/CashierIcons";
import EventIcons from "@/components/porto/EventIcons";
import FoodIcons from "@/components/porto/FoodIcons";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <Title title={"Portofolio."} />
      <div className="mt-10 grid grid-cols-1 lg:gap-y-12 gap-12 lg:gap-2 lg:grid-cols-2 text-gray-300">
        <Link href={"/detail/food"} className="link-porto flex flex-col gap-4">
          <ImageContainer imageName={"food.png"} />
          <div>
            <h4 className="text-gray-300 font-medium text-xl">Food Delivery</h4>
            <FoodIcons />
          </div>
        </Link>
        <Link href={"/detail/event"} className="link-porto flex flex-col gap-4">
          <ImageContainer imageName={"event.png"} />

          <div>
            <h4 className="text-gray-300 font-medium text-xl">Event Share</h4>
            <EventIcons />
          </div>
        </Link>
        <Link
          href={"/detail/cashier-pos"}
          className="link-porto flex flex-col gap-4"
        >
          <ImageContainer imageName={"cashier-pos.png"} />

          <div>
            <h4 className="text-gray-300 font-medium text-xl">Cashier Pos</h4>
            <CashierIcons />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
