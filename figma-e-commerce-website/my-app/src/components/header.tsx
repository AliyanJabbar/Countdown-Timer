"use client";

import { useState } from "react";
import Image from "next/image";
import dropDown from "../assets/dropDownVector.png";
import logo from "../assets/Logo.png";
import Link from "next/link";
import SearchIcon from "../assets/search Icon.png";
import heart from "../assets/heartIcon.png";
import Cart from "../assets/CartIcon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative top-0">
      {/* top header (black header) */}
      <div className="bg-black">
        <div className="flex flex-col sm:flex-row h-auto sm:h-[48px] font-[200] text-txtWhite text-[14px] items-center px-[7%] py-2">
          <div className="flex-1 text-center">
            <p className="px-2">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <Link href="/">
                <span className="font-[400] underline mx-4 cursor-pointer">
                  ShopNow
                </span>
              </Link>
            </p>
          </div>
          <div className="flex flex-row mt-2 sm:mt-0">
            <p>English</p>
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <Image
                src={dropDown}
                alt="Drop Down"
                className="w-[13px] h-[8px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* main header */}
      <div className="text-black body-font px-[4%] sm:px-[7%] mt-4 sm:mt-8 bg-white">
        <div className="container mx-auto flex flex-wrap py-3 flex-col md:flex-row items-center min-[1078px]:hidden">
          {/* Mobile menu button */}
          <div className="md:hidden w-full flex justify-between items-center">
            <Image src={logo} alt="logo" className="w-[100px] h-auto" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="md:flex md:flex-row md:w-full md:justify-between">
            {/* Desktop logo */}
            <div className="hidden md:block">
              <Image src={logo} alt="logo" />
            </div>

            {/* Navigation */}
            <nav
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } md:flex w-full md:w-auto flex-col md:flex-row items-center text-base`}
            >
              <Link
                href="/"
                className="w-full md:w-auto text-center py-2 md:py-0 md:mx-5 underline-offset-4 hover:underline decoration-2 decoration-slate-400"
              >
                Home
              </Link>
              <Link
                href="/"
                className="w-full md:w-auto text-center py-2 md:py-0 md:mx-4 underline-offset-4 hover:underline decoration-2 decoration-slate-400"
              >
                Contact
              </Link>
              <Link
                href="/"
                className="w-full md:w-auto text-center py-2 md:py-0 md:mx-4 underline-offset-4 hover:underline decoration-2 decoration-slate-400"
              >
                About
              </Link>
              <Link
                href="/"
                className="w-full md:w-auto text-center py-2 md:py-0 md:mx-4 underline-offset-4 hover:underline decoration-2 decoration-slate-400 text-nowrap"
              >
                Sign Up
              </Link>
            </nav>
          </div>

          {/* Search bar and Icons */}
          <div className="flex flex-row w-full justify-center min-[1078px]:w-auto items-center mt-11 min-[1078px]:mt-0">
            <div className="group border rounded-md border-transparent focus-within:border-black flex flex-row">
              <input
                type="text"
                className="w-[140px] sm:w-[180px] lg:w-[243px] h-[38px] bg-bgWhite rounded-l-md p-[12px] lg:p-[20px] outline-none"
                placeholder="What are you looking for?"
              />
              <div className="p-[10px] lg:p-[12px] rounded-r-md cursor-pointer bg-bgWhite">
                <Image
                  src={SearchIcon}
                  alt="search icon"
                  className="w-[16px] h-[16px]"
                />
              </div>
            </div>

            <div className="flex flex-row ml-7 items-center space-x-4 lg:space-x-7">
              <div className="cursor-pointer">
                <Image
                  src={heart}
                  alt="heart icon"
                  className="w-[25px] h-[22px]"
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src={Cart}
                  alt="Cart icon"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* min-[1078px] */}
        <div className="hidden min-[1078px]:flex min-[1078px]:flex-row min-[1078px]:justify-between min-[1078px]:items-center min-[1078px]:py-3">
          {/* logo */}
          <div>
            <Image src={logo} alt="logo" />
          </div>
          {/* navbar Links */}
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex w-full md:w-auto flex-col md:flex-row items-center text-base`}
          >
            <Link
              href="/"
              className="w-full md:w-auto text-center py-2 md:py-0 md:mx-5 underline-offset-4 hover:underline decoration-2 decoration-slate-400"
            >
              Home
            </Link>
            <Link
              href="/"
              className="w-full md:w-auto text-center py-2 md:py-0 md:mx-4 underline-offset-4 hover:underline decoration-2 decoration-slate-400"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="w-full md:w-auto text-center py-2 md:py-0 md:mx-4 underline-offset-4 hover:underline decoration-2 decoration-slate-400"
            >
              About
            </Link>
            <Link
              href="/"
              className="w-full md:w-auto text-center py-2 md:py-0 md:mx-4 underline-offset-4 hover:underline decoration-2 decoration-slate-400 text-nowrap"
            >
              Sign Up
            </Link>
          </nav>
          {/* search bar */}
          <div className="flex flex-row w-full justify-center min-[1078px]:w-auto items-center mt-11 min-[1078px]:mt-0">
            <div className="group border rounded-md border-transparent focus-within:border-black flex flex-row">
              <input
                type="text"
                className="w-[140px] sm:w-[180px] lg:w-[243px] h-[38px] bg-bgWhite rounded-l-md p-[12px] lg:p-[20px] outline-none"
                placeholder="What are you looking for?"
              />
              <div className="p-[10px] lg:p-[12px] rounded-r-md cursor-pointer bg-bgWhite">
                <Image
                  src={SearchIcon}
                  alt="search icon"
                  className="w-[16px] h-[16px]"
                />
              </div>
            </div>

            <div className="flex flex-row ml-7 items-center space-x-4 lg:space-x-7">
              <div className="cursor-pointer">
                <Image
                  src={heart}
                  alt="heart icon"
                  className="w-[25px] h-[22px]"
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src={Cart}
                  alt="Cart icon"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
