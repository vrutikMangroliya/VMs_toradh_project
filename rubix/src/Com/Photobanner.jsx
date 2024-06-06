/* eslint-disable no-unused-vars */
import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { SlEqualizer } from "react-icons/sl";
import { IoEyeSharp } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";

const Photobanner = () => {
  return (
    <div className="banner-home">
      <div className="mt-[90px]">
        <div className="flex gap-[20px]">
          <div className="image-container ml-20">
            <img
              className=" w-[670px] h-[380px]"
              src="public/image/photo_banner1.jpg"
              alt=""
            />
            <p className="absolute top-20 ml-9 text-slate-600 font-bold">
              Quick parcel delivery ,
            </p>
            <p className="absolute top-20 ml-52 text-orange-400 font-bold">
              from $25
            </p>
            <h1 className="absolute top-28 ml-9 text-3xl font-bold">
              Up to 70% off
            </h1>
            <h1 className="absolute top-36 ml-9 text-3xl font-bold">
              Interior Home Decor
            </h1>
            <h2 className="absolute top-52 ml-9 text-slate-600 font-sans">
              Class aptent taciti sociosqu ad litora
            </h2>
            <h1 className="flex absolute top-64 ml-9 font-sans rounded-md text-white bg-black pl-6 pr-14 py-3">
              Shop Collection
            </h1>
            {/* <h1 className="absolute top-3/4 text-white ml-48"><SlArrowRight/></h1> */}
          </div>
          <div className="image-container">
            <img
              className=" w-[670px] h-[380px]"
              src="public/image/photo_banner1.2.jpg"
              alt=""
            />
            <p className="absolute top-20 ml-9 text-white font-bold">
              Quick parcel delivery ,
            </p>
            <p className="absolute top-20 ml-52 text-orange-400 font-bold">
              from $25
            </p>
            <h1 className="absolute top-28 ml-9 text-3xl font-bold text-white">
              Up to 70% Sale off
            </h1>
            <h1 className="absolute top-36 ml-9 text-3xl font-bold text-white">
              Pendent Lamp
            </h1>
            <h2 className="absolute top-52 ml-9 text-white font-sans">
              Class aptent taciti sociosqu ad litora
            </h2>
            <h1 className="flex absolute top-64 ml-9 font-sans rounded-md text-white bg-black pl-6 pr-14 py-3">
              Shop Collection
            </h1>
            {/* <h1 className="absolute top-3/4 text-white ml-48"><SlArrowRight/></h1> */}
          </div>
        </div>
        <div className=" mt-4">
          <div className="flex gap-5">
            <div className="image-container ml-20 relative">
              <img
                className=" w-[325px]"
                src="public/image/banner2.jpg"
                alt=""
              />
              <h1 className="absolute top-11 ml-9 font-bold text-2xl">
                Turning Table
              </h1>
              <p className="absolute top-20 ml-9 text-slate-600 ">
                Class aptent taciti sociosqu
              </p>
              <h2 className="absolute top-28 ml-9  text-orange-500 font-bold underline">
                From$49.59
              </h2>
            </div>
            <div className="image-container">
              <img
                className=" w-[325px]"
                src="public/image/banner1.jpg"
                alt=""
              />
              <h1 className="absolute top-11 ml-9 font-bold text-2xl">
                Wood Chair
              </h1>
              <p className="absolute top-20 ml-9 text-slate-600 ">
                Class aptent taciti sociosqu
              </p>
              <h2 className="absolute top-28 ml-9  text-orange-500 font-bold underline">
                Extra40%off
              </h2>
            </div>
            <div className="image-container">
              <img
                className=" w-[670px]"
                src="public/image/banner-static5.jpg"
                alt=""
              />
              <h1 className="absolute top-11 ml-9 font-bold text-2xl">
                Modern Nutshell Lounge Chair
              </h1>
              <p className="absolute top-20 ml-9 text-slate-600 ">
                Class aptent taciti sociosqu ad litora torquent per
              </p>
              <h2 className="absolute top-28 ml-9  text-orange-500 font-bold underline">
                Extra20%off
              </h2>
            </div>
          </div>
        </div>

        <div className=" mt-4">
          <div className="flex">
            <div className=" relative">
              <img className=" w-auto" src="public/image/banner6.png" alt="" />
              <p className="absolute top-20 ml-[780px] text-slate-600 font-bold">
                Quick parcel delivery ,
              </p>
              <p className="absolute top-20 ml-[950px]  text-orange-400 font-bold">
                from $25
              </p>
              <h1 className="absolute top-28 ml-[780px] text-3xl font-bold">
                Up to 70% off
              </h1>
              <h1 className="absolute top-36 ml-[780px] text-3xl font-bold">
                Interior Home Decor
              </h1>
              <h2 className="absolute top-52 ml-[780px] text-slate-600 font-sans">
                Class aptent taciti sociosqu ad litora
              </h2>
              <h1 className="flex absolute top-64 ml-[780px] cursor-pointer font-sans rounded-md text-white bg-black pl-6 pr-14 py-3">
                Shop Collection
              </h1>
            </div>
          </div>
        </div>

        <div className=" mt-4">
          <div className="flex">
            <div className=" relative"></div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
      </div>
      <div className="">
        <div className="">
          <div className="mt-16">
            <h1 className="flex justify-center font-bold text-3xl">
              Trending Products
            </h1>
            <p className="flex justify-center items-center mt-2">
              Top View In This Week
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-[30px] cursor-pointer">
          <div className="">
            <div className="relative">
              <img
                className="h-[400px] rounded-sm"
                src="./public/image/chair1.jpg"
                alt=""
              />
              <div className="inner absolute">
                <img
                  className="h-[400px] rounded-sm"
                  src="./public/image/chair1.2.jpg"
                  alt=""
                />
                <div className="absolute top-5 left-64 mt-2">
                  <div className="h-10 w-10 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <CiHeart className="h-7 w-7" />
                  </div>
                  <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <SlEqualizer className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <IoEyeSharp className="h-7 w-7" />
                  </div>
                  <div className="absolute top-[300px] right-1 bg-black text-white h-[50px] w-[270px] rounded-md ">
                    <div className="h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold">
                      <BsHandbag className="h-4 w-4 mr-2" />
                      <button className="">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="top-[20px] left-5 absolute h-7 w-14 text-white rounded-md bg-[#ba933e] ">
                Sale!
              </button>
            </div>

            <div className="mt-3">
              <p className="font-bold">Arctander Chair</p>
              <div className="flex text-sm">
                <p className="line-through text-gray-500">$80.99</p>
                <p className="text-[#ba933e] ml-2">$68.99</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" relative">
              <img
                className="h-[400px] rounded-sm"
                src="./public/image/chair2.png"
                alt=""
              />
              <div className="inner absolute">
                <img
                  className="h-[400px] rounded-sm"
                  src="./public/image/chair2.1.png"
                  alt=""
                />
                <div className="absolute top-5 left-64 mt-2">
                  <div className="h-10 w-10 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <CiHeart className="h-7 w-7" />
                  </div>
                  <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <SlEqualizer className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <IoEyeSharp className="h-7 w-7" />
                  </div>
                  <div className="absolute top-[300px] right-1 bg-black text-white h-[50px] w-[270px] rounded-md ">
                    <div className="h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold">
                      <BsHandbag className="h-4 w-4 mr-2" />
                      <button className="">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="top-[20px] left-5 absolute h-7 w-14 rounded-md bg-[#ba933e] text-white">
                Sale!
              </button>
            </div>
            <div className="mt-3">
              <p className="font-bold">Pia Chair</p>
              <div className="flex text-sm">
                <p className="line-through text-gray-500">$56.99</p>
                <p className="text-[#ba933e] ml-2">$49.50</p>
              </div>
            </div>
          </div>
          
          <div className="">
            <div className="relative">
              <img
                className="h-[400px] rounded-sm"
                src="./public/image/chair3.png"
                alt=""
              />
              <div className="inner absolute">
                <img
                  className="h-[400px] rounded-sm"
                  src="./public/image/chair3.1.png"
                  alt=""
                />
                <div className="absolute top-5 left-64 mt-2">
                  <div className="h-10 w-10 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <CiHeart className="h-7 w-7" />
                  </div>
                  <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <SlEqualizer className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                    <IoEyeSharp className="h-7 w-7" />
                  </div>
                  <div className="absolute top-[300px] right-1 bg-black text-white h-[50px] w-[270px] rounded-md ">
                    <div className="h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold">
                      <BsHandbag className="h-4 w-4 mr-2" />
                      <button className="">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="top-[20px] left-5 absolute h-7 w-14 text-white rounded-md bg-[#ba933e] ">
                Sale!
              </button>
              <div className="mt-3">
              <p className="font-bold">Iconic Rocking Horse</p>
              <div className="flex text-sm">
                <p className="line-through text-gray-500">$82.50</p>
                <p className="text-[#ba933e] ml-2">$75.99</p>
              </div>
            </div>
            </div>
           
          </div>
          <div className="">
            <div className="relative">
              <img
                className="h-[400px] rounded-sm"
                src="public/image/chair4.png"
                alt=""
              />
              <div className="inner absolute">
                <img
                  className="h-[400px] rounded-sm"
                  src="./public/image/chair4.1.png"
                  alt=""
                />
                <div className="inner absolute">
                  <div className="absolute top-5 left-64 mt-2">
                    <div className="h-10 w-10 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                      <CiHeart className="h-7 w-7" />
                    </div>
                    <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                      <SlEqualizer className="h-5 w-5" />
                    </div>
                    <div className="h-10 w-10 mt-2 justify-center rounded-md flex items-center hover:text-white bg-white hover:bg-[#ba933e]">
                      <IoEyeSharp className="h-7 w-7" />
                    </div>
                    <div className="absolute top-[300px] right-1 bg-black text-white h-[50px] w-[270px] rounded-md ">
                      <div className="h-[50px] w-[270px] rounded-md flex justify-center items-center hover:bg-[#ba933e] font-bold">
                        <BsHandbag className="h-4 w-4 mr-2" />
                        <button className="">Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="font-bold">Side Table</p>
              <div className="flex text-sm">
              <p className="line-through text-gray-500">$46.50</p>
                <p className="text-[#ba933e] ml-2">$39.53</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photobanner;
