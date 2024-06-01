"use client";
import Title from "@/components/Title";
import EventIcons from "@/components/porto/EventIcons";
import FoodIcons from "@/components/porto/FoodIcons";
import { portoDetails } from "@/data/porto";
import Link from "next/link";
import React from "react";
import { FaHome, FaLink } from "react-icons/fa";
import ImageContainer from "@/components/ImageContainer";

const Page = ({ params }) => {
  const project = decodeURI(params.project);
  const [porto] = portoDetails.filter((p) => {
    return p.name == project;
  });

  const renderIcon = () => {
    if (porto.name == "food") {
      return <FoodIcons />;
    } else if (porto.name == "event") {
      return <EventIcons />;
    }
  };

  return (
    <main className="flex flex-col md:flex-row gap-8 mt-12 w-[93%] mx-auto">
      <aside className="fixed md:relative bottom-5 right-4 md:bottom-0 md:right-0 ">
        <Link
          href={"/porto"}
          className="bg-color-dark border border-color-gray h-16 w-16 sticky top-0 text-color-orange rounded-full flex items-center justify-center hover:bg-color-gray transition-all"
        >
          <FaHome size={32} />
        </Link>
      </aside>

      <section className="bg-color-dark border border-color-gray rounded-md w-full text-white px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-4">
          <ImageContainer imageName={`${porto.name}.png`} />
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-4xl">{porto.title}</h4>
            <div className="w-12 h-1 bg-color-orange"></div>
            <div className="flex flex-col gap-2 text-sm mt-4">
              {porto.links.map((link, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <FaLink className="text-gray-300" />
                  <Link
                    href={link}
                    className="underline text-sky-500 hover:text-color-orange transition-all"
                  >
                    {link}
                  </Link>
                </div>
              ))}
            </div>
            {renderIcon()}
          </div>
        </div>
        <div className="mt-12">
          <Title title={"Description"} />
          <p className="mt-4">{porto.desc}</p>
        </div>
      </section>
    </main>
  );
};

export default Page;
