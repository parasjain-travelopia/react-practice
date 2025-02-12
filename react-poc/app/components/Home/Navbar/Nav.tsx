/** @format */

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-[100] fixed w-full'>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-white-800 rounded-full flex items-center justify-center flex-col'>
            <GrTechnology className='w-6 h-6 text-black' />
          </div>
          <h1 className='text-xl hidden sm:block md:text-2xl text-black-800 font-bold'>
            Poetic
          </h1>
        </div>
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className='text-black hover:text-red-600 font-semibold transition-all duration-200'>
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* button */}
        <div className='flex items-center space-x-4'>
          <a href='#_' className='relative inline-block text-lg group'>
            <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
              <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
              <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
              <span className='relative'>Create Account</span>
            </span>
            <span
              className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
              data-rounded='rounded-lg'></span>
          </a>
          <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-black lg:hidden' />
        </div>
      </div>
    </div>
  );
};

export default Nav;
