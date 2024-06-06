/* eslint-disable no-unused-vars */
import React from "react";
import { CiHeart } from "react-icons/ci";
import { SlEqualizer } from "react-icons/sl";
import { IoEyeSharp } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
// import { Carousel } from "@material-tailwind/react";


const Product = () => {
  return (
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
              src="./public/image/1.jpg"
              alt=""
            />
            <div className="inner absolute">
              <img
                className="h-[400px] rounded-sm"
                src="./public/image/1.2.jpg"
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
            <p className="font-bold">Turning Table</p>
            <div className="flex text-sm">
              <p className="line-through text-gray-500">$57.00</p>
              <p className="text-[#ba933e] ml-2">$52.00</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" relative">
            <img
              className="h-[400px] rounded-sm"
              src="./public/image/2.jpg"
              alt=""
            />
            <div className="inner absolute">
              <img
                className="h-[400px] rounded-sm"
                src="./public/image/2.2.jpg"
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
            <p className="font-bold">Beoplay A1</p>
            <div className="flex text-sm">
              <p className="line-through text-gray-500">$49.00</p>
              <p className="text-[#ba933e] ml-2">$32.00</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-[400px] rounded-sm"
            src="public/image/3.jpg"
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

          <div className="mt-3">
            <p className="font-bold">Stainless steel teapot</p>
            <div className="flex text-sm">
              <p className="text-gray-500">$18.00</p>
              <p className="ml-1">-</p>
              <p className="ml-1 text-gray-500">$39.00</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative">
            <img
              className="h-[400px] rounded-sm"
              src="public/image/4.jpg"
              alt=""
            />
            <div className="inner absolute">
              <img
                className="h-[400px] rounded-sm"
                src="./public/image/4.2.jpg"
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
            <p className="font-bold">Pilke 60 Pendant Lamp</p>
            <div className="flex text-sm">
              <p className="text-gray-500">$39.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
