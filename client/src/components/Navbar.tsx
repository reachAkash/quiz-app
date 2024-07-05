import React from "react";
import Logo from "/logo.png";
import { NavigationMenuComp } from "./Dropdown";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container py-2 sticky top-0 z-10 glassBg flex justify-between items-center">
      <div className="">
        <img
          className="cursor-pointer w-[10rem] flex-shrink-0"
          src={Logo}
          alt="logo"
        />
      </div>
      {/* for large device */}
      <div className="hidden tablet:flex">
        <NavigationMenuComp />
      </div>
      <div className="hidden tablet:flex items-center justify-between gap-4">
        <Link
          to="/signin"
          className="font-medium cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out"
        >
          Login{" "}
        </Link>
        <Link
          to="/signup"
          className="cta font-medium cursor-pointer bg-teal-500 text-white rounded-full px-4 py-2 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Registration
        </Link>
      </div>
      {/* for small device */}
      <div className="flex tablet:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
