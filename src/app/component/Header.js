"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { menus } from "../data/data";

// components/Navbar.js
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex w-full justify-center items-center p-6 bg-white ">
      <div className=" w-full lg:w-[1280px] flex justify-between items-center ">
        <div className="text-xl font-bold">
          <a href="/">
          <Image src="/assets/logo.svg" width={140} height={38} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {menus.map((menu, index) => (
            <li className=" " key={index}>
              <a
                href={menu.ref}
                className=" py-[10px] px-[12px]  hover:text-[#282735] active:text-[#282735] active:opacity-[1] hover:opacity-[1] flex items-center rounded-full justify-center text-[18px] font-[500] leading-[20px] opacity-[0.8] text-[#282735CC] "
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="bg-[#132124] w-[132px] h-[40px] text-[#FFFFFF] px-4 py-1 text-[16px] rounded-full">
            Apply Now
          </button>
          <button className="text-[#132124] w-[132px] h-[40px] bg-[#F7F8FA] px-4 py-1 text-[16px] rounded-full">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white px-[16px] shadow-md z-10 lg:hidden">
          <ul className="flex flex-col  justify-between space-y-4 py-[24px]">
            {menus.map((menu, index) => (
              <li className=" ">
                <a
                  href={menu.ref}
                  className=" py-[10px] px-[12px] hover:text-[#282735] active:text-[#282735] active:opacity-[1] hover:opacity-[1] flex   text-[14px] font-[500] leading-[21px] text-[#344054] "
                >
                  {menu.name}
                </a>
              </li>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-4 mt-4">
              <button className="bg-[#132124] w-full h-[40px] text-[#FFFFFF] px-4 py-1 text-[16px] rounded-full">
                Apply Now
              </button>
              <button className="text-[#132124] w-full h-[40px] bg-[#F7F8FA] px-4 py-1 text-[16px] rounded-full">
                Contact Us
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
