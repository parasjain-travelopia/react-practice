/** @format */

import React from "react";
import { MdOutlineTouchApp } from "react-icons/md";

const Feature = () => {
  return (
    <div className='pt-16 bg-gray-100'>
      {/* Heading */}
      <div>
        <h1 className='text-center text-green-600 font-bold'>
          Our Special Features...
        </h1>
        <p className='mt-3 text-center font-medium text-gray-600 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
          We offer a wide range of reliable and innovative services designed to
          enhance your everyday life. From essential solutions to personalized
          support, Everything is here to meet your needs effortlessly.
        </p>
      </div>

      {/* Main Grid (Image + Features) */}
      <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
        {/* Features Grid (2x2 Cards) */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Feature Card 1 */}
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-600 bg-opacity-20'>
                <MdOutlineTouchApp className='w-6 h-6 text-orange-600' />
              </div>
              <h1 className='text-lg font-bold'>App Integrations</h1>
            </div>
            <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-600 bg-opacity-20'>
                <MdOutlineTouchApp className='w-6 h-6 text-orange-600' />
              </div>
              <h1 className='text-lg font-bold'>Workflow Builders</h1>
            </div>
            <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-600 bg-opacity-20'>
                <MdOutlineTouchApp className='w-6 h-6 text-orange-600' />
              </div>
              <h1 className='text-lg font-bold'>Automation Tools</h1>
            </div>
            <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-600 bg-opacity-20'>
                <MdOutlineTouchApp className='w-6 h-6 text-orange-600' />
              </div>
              <h1 className='text-lg font-bold'>Seamless UX</h1>
            </div>
            <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className='flex justify-center'>
          <img
            src='/images/f1.png' // Replace with actual image
            alt='Feature Illustration'
            className='w-full max-w-sm rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
