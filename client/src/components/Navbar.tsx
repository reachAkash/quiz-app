import React from "react";
import Logo from "/logo.png";
import { NavigationMenuComp } from "./Dropdown";
import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signoutSuccess } from "@/redux/user/userSlice";
import { SheetClose } from "./ui/sheet";

const Navbar = () => {
  const { currentUser } = useSelector((store: any) => store.user);
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(signoutSuccess());
  };
  return (
    <div className="container py-2 sticky top-0 z-10 glassBg flex justify-between items-center">
      <Link to="/" className="">
        <img
          className="cursor-pointer w-[10rem] flex-shrink-0"
          src={Logo}
          alt="logo"
        />
      </Link>
      {/* for large device */}
      <div className="hidden tablet:flex">
        <NavigationMenuComp />
      </div>
      <div className="hidden tablet:flex items-center justify-between gap-4">
        <Link
          to="/signin"
          className={`${
            currentUser && "hidden"
          } font-medium cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out`}
        >
          Login{" "}
        </Link>
        <Link
          to="/signup"
          className={`${
            currentUser && "hidden"
          } cta font-medium cursor-pointer bg-teal-500 text-white rounded-full px-4 py-2 hover:scale-105 transition-all duration-300 ease-in-out`}
        >
          Registration
        </Link>
        <Popover>
          <PopoverTrigger
            className={currentUser ? "flex flex-col items-center" : "hidden"}
          >
            <img
              className="w-11 h-11 rounded-full"
              src={currentUser?.profilepic}
              alt="profilePic"
            />
          </PopoverTrigger>
          <PopoverContent className="py-6 space-y-1">
            <div className="space-y-1 py-2 px-2 bg-secondary ">
              <div className="text-teal-500 text-sm">{currentUser?.name}</div>
              <div className="text-teal-500 text-sm">{currentUser?.email}</div>
            </div>
            <Link
              to="/profile"
              className="hover:bg-secondary block py-2 px-2 rounded-md font-medium text-black cursor-pointer"
            >
              Profile
            </Link>
            <Link
              to="/achievements"
              className="hover:bg-secondary block py-2 px-2 rounded-md font-medium text-black cursor-pointer"
            >
              Achievements
            </Link>
            <div
              onClick={handleSignout}
              className="hover:bg-red-100 py-2 px-2 rounded-md font-medium text-destructive cursor-pointer"
            >
              Sign Out
            </div>
          </PopoverContent>
        </Popover>
      </div>
      {/* for small device */}
      <div className="flex tablet:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
