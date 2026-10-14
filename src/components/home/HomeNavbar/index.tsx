"use client"

import { useState } from "react";
import NextUIBtn from "@/components/nextUI/button";
import { FaStar, FaEllipsisH } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function HomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-blue-500">
      <div className="grid grid-cols-2 items-center px-4 sm:px-8  md:px-12 lg:px-24 py-4 max-w-[1680px] m-auto">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-start gap-2 sm:gap-3 md:gap-4 text-xl sm:text-2xl font-black"
        >
          <Image
            src={"/images/logo.png"}
            width={260}
            height={31}
            alt="Logo"
            className="py-1 w-[120px] xs:w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Buttons Section */}
        <div className="hidden md:flex flex-wrap items-center justify-end gap-3 sm:gap-4 lg:gap-5">
          <NextUIBtn
            as={Link}
            href="/signup"
            className="bg-white text-blue-500 text-xs xs:text-sm sm:text-base px-2 sm:px-4 py-1 rounded-md"
          >
            SignUp
          </NextUIBtn>
          <NextUIBtn
            as={Link}
            href="/signin"
            className="text-xs xs:text-sm sm:text-base px-2 sm:px-4 py-1 rounded-md"
          >
            Login
          </NextUIBtn>
          <NextUIBtn
            as={Link}
            href="/subscprition"
            className="text-xs xs:text-sm sm:text-base px-2 sm:px-4 py-1 rounded-md"
          >
            Get All Access <FaStar className="text-[#ffff00]" />
          </NextUIBtn>
        </div>

        {/* Three dots menu for mobile (visible below 768px) */}
        <div className="flex md:hidden items-center justify-end">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <FaEllipsisH />
          </button>
        </div>
      </div>

      {/* Dropdown Menu (appears when the menu is open and on mobile screens) */}
      {isMenuOpen && (
        <div className="md:hidden flex ml-2 p-2 items-center gap-3 py-4 bg-blue-500">
          <NextUIBtn
            as={Link}
            href="/signup"
            className="bg-white text-blue-500 text-sm px-4 py-2 rounded-md"
          >
            SignUp
          </NextUIBtn>
          <NextUIBtn
            as={Link}
            href="/signin"
            className="text-sm px-4 py-2 rounded-md"
          >
            Login
          </NextUIBtn>
          <NextUIBtn
            as={Link}
            href="/subscprition"
            className="text-sm px-4 py-2 rounded-md"
          >
            Get All Access <FaStar className="text-[#ffff00]" />
          </NextUIBtn>
        </div>
      )}
    </header>
  );
}
