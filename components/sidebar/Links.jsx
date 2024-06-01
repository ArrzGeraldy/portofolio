"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "About", href: "/" },
  { name: "Porto", href: "/porto" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

const Links = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-row lg:flex-col gap-2 text-white justify-start font-medium text-xl mt-2">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          className={clsx(
            "rounded-md px-4 py-2 text-sm sm:text-base hover:bg-color-gray transition-all",
            pathName == link.href && "bg-color-gray text-color-orange"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Links;
