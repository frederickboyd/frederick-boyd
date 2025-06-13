import React, { useEffect, useState } from "react";

import { Divide as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import logo from "../img/maintext.png";

const NavAnimation = {
  offscreen: {
    y: "-20px",
    opacity: 0,
  },
  onscreen: {
    y: "0px",
    opacity: 1,
  },
};

const Navbar = ({ open, setOpen }) => {
  return (
    <div
      className={`bg-bgBlack fixed w-full h-20 z-50 top-0 duration-300 scroll-m-6 hidden sm:block md:block`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between">
        <img className="w-7 ml-6" src={logo} alt="logo" />
        <div className="relative lg:hidden">
          <div className="mr-3">
            <Hamburger
              color={`${open ? "#ee1d52" : "white"}`}
              size={29}
              toggled={open}
              toggle={setOpen}
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-row ">
            <a href="#about">
              <motion.p
                className="font-medium text-navtextcolor text-lg mr-20 tracking-wide hover:text-redEdit hover:duration-200 cursor-pointer"
                variants={NavAnimation}
                initial="offscreen"
                animate="onscreen"
                transition={{ type: "spring", bounce: 0, duration: 3 }}
              >
                About
              </motion.p>
            </a>
            <a href="#skill">
              {" "}
              <motion.p
                className="font-medium text-navtextcolor text-lg mr-20 tracking-wide hover:text-redEdit hover:duration-200 cursor-pointer"
                variants={NavAnimation}
                initial="offscreen"
                animate="onscreen"
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 3,
                  delay: 0.3,
                }}
              >
                Skills
              </motion.p>
            </a>
            <a href="#work">
              <motion.p
                className="font-medium text-navtextcolor text-lg mr-20 tracking-wide hover:text-redEdit hover:duration-200 cursor-pointer"
                variants={NavAnimation}
                initial="offscreen"
                animate="onscreen"
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 3,
                  delay: 0.6,
                }}
              >
                Works
              </motion.p>
            </a>
            <a href="#contact">
              <motion.p
                className="font-medium text-navtextcolor text-lg mr-20 tracking-wide hover:text-redEdit hover:duration-200 cursor-pointer"
                variants={NavAnimation}
                initial="offscreen"
                animate="onscreen"
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 3,
                  delay: 0.9,
                }}
              >
                Contact
              </motion.p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
