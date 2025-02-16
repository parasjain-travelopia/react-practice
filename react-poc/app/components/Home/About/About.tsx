/** @format */

import React from "react";
import BoxText from "../../Helper/BoxText";

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        <div>
          <img
            src='/images/about.png'
            alt='about'
            width={600}
            height={600}></img>
        </div>
        <div>
          <BoxText>About Us</BoxText>
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5] sm:leading-[3rem]'>
            {" "}
            Everything you need to learn is here..
          </h1>
          <p className='mt-3 leading-relaxed text-sm sm:text-base text-gray-700'>
            Welcome to Everything, where we believe in providing solutions for
            life. Our mission is simple: to offer comprehensive services that
            make your life easier, better, and more fulfilling. Whether it's
            support, innovation, or everyday essentials, we've got you covered.
          </p>
          <button className='mt-5 text-green-600 font-bold pb-1 border-b-2 border-green-900'>
            Learn More &#8594;
          </button>
          <div className='mt-8 border-l-2 border-gray-200'>
            <div className='ml-6'>
              <p className='text-gray-700 font-medium'>
                &quot; The many integerations that can be linked really help me
                see data from other tools I also use. &quot;
              </p>
              <div className='flex items-center space-x-6 mt-6'>
                <img
                  className='rounded-full'
                  src='/images/u1.jpg'
                  alt='user'
                  width={40}
                  height={40}></img>
                <p className='font-medium'>Paras Jain</p>
                <p className='text-gray-700 text-sm'>Product Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
