import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const handleClose = () => setNav(!nav);

  return (
    <>
      <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg bg-zinc-200">
        <div className="px-2 flex justify-between items-center  w-full h-full">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND</h1>
            <ul className="hidden md:flex">
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={-110} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="support" smooth={true} duration={500}>
                  Support
                </Link>
              </li>
              <li>
                <Link to="platform" smooth={true} duration={500}>
                  Platform
                </Link>
              </li>
              <li>
                <Link to="pricing" smooth={true} duration={500}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-black mr-4 ">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>

          <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link onClick={handleClose} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="about"
              smooth={true}
              offset={-110}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="support"
              smooth={true}
              duration={500}
            >
              Support
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="platform"
              smooth={true}
              duration={500}
            >
              Platform
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="pricing"
              smooth={true}
              duration={500}
            >
              Pricing
            </Link>
          </li>
          {/* <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-zinc-300 w-full">Platform</li>
          <li className="border-b-2 border-zinc-300 w-full">Pricing</li> */}
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
