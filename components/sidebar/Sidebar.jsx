import React from "react";
import Links from "./Links";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside
      className="flex flex-col lg:sticky top-4 w-full lg:w-[25%] gap-4 bg-color-dark px-8 py-4 h-fit rounded-md border
     border-color-gray items-center lg:items-stretch"
    >
      <div className="w-full flex justify-center">
        <div
          style={{ backgroundImage: `url("/assets/profile/me.jpg")` }}
          className="w-24 h-24 object-cover bg-cover bg-center  rounded-full"
        ></div>
      </div>
      <h1 className="text-3xl text-center text-white font-bold">
        Gerry Geraldy
      </h1>

      <div className="w-full flex justify-center">
        <Link
          href={"/files/gerry-resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
          download
          className="text-white text-sm hover:bg-[#ff6644] transition-all bg-color-orange px-4 py-2 rounded-md flex gap-2 items-center"
        >
          <FiDownload size={20} /> Download CV
        </Link>
      </div>
      <Links />
    </aside>
  );
};

export default Sidebar;
