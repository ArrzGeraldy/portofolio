import Title from "@/components/Title";
import FormContact from "@/components/contact/FormContact";
import Link from "next/link";
import React from "react";
import { FiMail, FiPhone, FiInstagram } from "react-icons/fi";

const page = () => {
  return (
    <div className="w-full">
      <Title title={"Contact."} />
      <div className="flex flex-col gap-4 mt-12 text-gray-300">
        <div className="flex gap-2 items-center">
          <div className="bg-color-gray rounded-lg px-2 py-2 text-color-orange">
            <FiMail size={28} />
          </div>
          <span>gerrygeraldy303@gmail.com</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-color-gray rounded-lg px-2 py-2 text-color-orange">
            <FiPhone size={28} />
          </div>
          <span>+62-8888-4065-99</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-color-gray rounded-lg px-2 py-2 text-color-orange">
            <FiInstagram size={28} />
          </div>
          <Link
            href={"https://www.instagram.com/gerry.graldy/"}
            className="underline"
          >
            https://www.instagram.com/gerry.graldy
          </Link>
        </div>
      </div>
      <div>
        <FormContact />
      </div>
    </div>
  );
};

export default page;
