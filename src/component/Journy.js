import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdKeyboardArrowRight, MdWork } from "react-icons/md";
const Journy = () => {
  return (
    <div className="w-full relative">
      <p className="font-primary text-blueEdit text-xl pb-2">My Journey</p>
      <div className="relative w-full">
        <div className="w-full h-[2px] bg-gray-500 absolute top-4 -z-10">
          <MdKeyboardArrowRight
            size={25}
            className="absolute -right-[10px] text-gray-500 -top-[11px]"
          />
        </div>
        <div className="flex justify-start items-start gap-x-2">
          <div className="flex-[4] flex-col">
            <div className="border-2 border-gray-500 rounded-full bg-bgBlack p-1 z-10 w-fit">
              <FaGraduationCap size={22} className="text-gray-500" />
            </div>
            <div className="py-2">
              <p className="text-blueEdit font-secondry text-[15px] font-semibold">
                Purdue University
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                Bachelor of Computer Science
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                2009 - 2013
              </p>
            </div>
          </div>
          <div className="flex-[4] flex-col">
            <div className="border-2 border-gray-500 rounded-full bg-bgBlack p-1 z-10 w-fit">
              <MdWork size={22} className="text-gray-500" />
            </div>
            <div className="py-2">
              <p className="text-blueEdit font-secondry text-[15px] font-semibold">
                Immense Networks (Internship)
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                Web Developer
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                2013 - 2014
              </p>
            </div>
          </div>
          <div className="flex-[4] flex-col">
            <div className="border-2 border-gray-500 rounded-full bg-bgBlack p-1 z-10 w-fit">
              <MdWork size={22} className="text-gray-500" />
            </div>
            <div className="py-2">
              <p className="text-blueEdit font-secondry text-[15px] font-semibold">
                Immense Networks
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                Full Stack Developer
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                2014 - 2016
              </p>
            </div>
          </div>
          <div className="flex-[4] flex-col">
            <div className="border-2 border-gray-500 rounded-full bg-bgBlack p-1 z-10 w-fit">
              <MdWork size={22} className="text-gray-500" />
            </div>
            <div className="py-2">
              <p className="text-blueEdit font-secondry text-[15px] font-semibold">
                HCL
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                Senior Full Stack Developer
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                2017 - 2017
              </p>
            </div>
          </div>
          <div className="flex-[4] flex-col">
            <div className="border-2 border-gray-500 rounded-full bg-bgBlack p-1 z-10 w-fit">
              <MdWork size={22} className="text-gray-500" />
            </div>
            <div className="py-2">
              <p className="text-blueEdit font-secondry text-[15px] font-semibold">
                WIPO
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                Senior Software Engineer
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                2018 - 2019
              </p>
            </div>
          </div>
          <div className="flex-[4] flex-col">
            <div className="border-2 border-gray-500 rounded-full bg-bgBlack p-1 z-10 w-fit">
              <MdWork size={22} className="text-gray-500" />
            </div>
            <div className="py-2">
              <p className="text-blueEdit font-secondry text-[15px] font-semibold">
                AHEAD
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                Senior Software Engineer
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                2019 - 2023
              </p>
            </div>
          </div>
          <div className="flex-[4] flex-col">
            <div className="border-2 border-gray-500 rounded-full bg-bgBlack p-1 z-10 w-fit">
              <MdWork size={22} className="text-gray-500" />
            </div>
            <div className="py-2">
              <p className="text-blueEdit font-secondry text-[15px] font-semibold">
                UpContent
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                Senior Software Engineer
              </p>
              <p className="text-gray-400 font-secondry text-[14px]">
                2023 - present
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-start">
          {/* <div className="py-2">
            <p className="text-blueEdit font-secondry text-[15px] font-semibold">
              GUSTO University
            </p>
            <p className="text-gray-400 font-secondry text-[14px]">
              HND Diploma
            </p>
            <p className="text-gray-400 font-secondry text-[14px]">
              2017 - 2020
            </p>
          </div> */}
          {/* <div className="py-2">
            <p className="text-blueEdit font-secondry text-[15px] font-semibold">
              Gloucestershire
            </p>
            <p className="text-gray-400 font-secondry text-[14px]">BSc Hons</p>
            <p className="text-gray-400 font-secondry text-[14px]">
              2020 - 2021
            </p>
          </div> */}
          {/* <div className="py-2">
            <p className="text-blueEdit font-secondry text-[15px] font-semibold">
              Freelancer
            </p>

            <p className="text-gray-400 font-secondry text-[14px]">
              2021 - present
            </p>
          </div> */}
          {/* <div className="py-2">
            <p className="text-blueEdit font-secondry text-[15px] font-semibold">
              Ultimate
            </p>
            <p className="text-gray-400 font-secondry text-[14px]">
              Frontend Developer
            </p>
            <p className="text-gray-400 font-secondry text-[14px]">
              2023 - present
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Journy;
