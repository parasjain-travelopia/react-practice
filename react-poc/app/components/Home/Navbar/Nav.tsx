/** @format */
"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
      if (window.scrollX < 90) setNavbg(false);
    };
    window.addEventListener("scroll", handler);
    window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${
        navbg ? "bg-white shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full`}>
      <div className='flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center'>
            <GrTechnology className='w-6 h-6 text-white' />
          </div>
          <h1 className='text-xl md:text-2xl font-bold text-gray-900 hidden sm:block'>
            Poetic
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className='text-gray-800 hover:text-red-600 font-semibold transition-all duration-200'>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex items-center space-x-4'>
          <a href='#_' className='relative inline-block text-lg group'>
            <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
              <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
              <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
              <span className='relative'>Create Account</span>
            </span>
            <span className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0' />
          </a>
          {/* Mobile Menu Button */}
          <HiBars3BottomRight
            onClick={openNav}
            className='w-8 h-8 cursor-pointer text-gray-900 lg:hidden'
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
