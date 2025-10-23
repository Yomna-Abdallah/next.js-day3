"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Products", path: "/products" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center h-16 w-full">
          <ul className="flex justify-between w-full max-w-3xl">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-gray-700 hover:text-blue-600 transition duration-200 ${
                    pathname === link.path
                      ? "font-bold text-blue-600 border-b-2 border-blue-600 pb-1"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
