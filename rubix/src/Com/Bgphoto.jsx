/* eslint-disable no-unused-vars */
import React from "react";
import Img1 from "../Com/bg.jpg";

const Bgphoto = () => {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div>

    <div className="flex mt-16">
      <div className=" bg-fixed bg-right-bottom  h-[600px] w-full bg-no-repeat bg-cover  bg-[url('/Public/image/bg.jpeg')]">
      <div className="absolute h-[300px] w-[1000px] right-80 mt-40 bg-white">
          <h1 className="mt-24 text-center text-2xl">Subcribe To Our Newsletter</h1>
          <p className="mt-2 text-center text-gray-700">Sign up for the weekly newsletter and build better ecommerce stores.</p>
          <div className="mt-5 w-[600px] flex ml-[200px]">
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your e-mail" required />
              <button type="button" className="ml-3 mt-1 h-10 text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-400 dark:hover:bg-black focus:outline-none dark:focus:ring-blue-800">Register</button>
          </div>
          <p className="text-gray-500 mt-2 text-center">* We will not share your contact</p>
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default Bgphoto;
