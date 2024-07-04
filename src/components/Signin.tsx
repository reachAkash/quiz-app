"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import Logo from "@/assets/react.svg";
import Google from "@/assets/google.svg";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
// import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import Image from "next/image";
import { useRef } from "react";
import CheckRequest from "@/assets/Check.gif";
// import { handleShowToast } from "@/utils";
// import { toast } from "sonner";

const SignIn = () => {
  interface FormDataInterface {
    username?: string;
    password?: string | number;
  }
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState<FormDataInterface>({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const router = useRouter();
  const passRef = useRef<any>();

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleShowToast = (text) => {
    // toast(
    //   <span className="text-purple-700 text-lg font-semibold font-montserrat">
    //     {text}
    //   </span>
    // );
  };

  useEffect(() => {
    if (
      passRef.current &&
      passRef.current.type == "password" &&
      showPass == true
    ) {
      passRef.current.type = "text";
    } else {
      passRef.current.type = "password";
    }
  }, [showPass]);

  return (
    <div className="absolute font-montserrat py-[4rem] w-full h-fit top-0 bg-[#f6f5fe]">
      <div className="w-full sm:w-[50%] lg:w-[38%] signinBox px-[1rem] py-[2rem] lg:py-[4rem] lg:px-[4rem] bg-white shadow border-gray-700 rounded-lg">
        <div className="flex justify-center items-center mb-8 gap-4">
          <img src={Logo} alt="Logo" width="" height="" className="logo" />
          <h2 className="text-base font-semibold letterSpacing">Sign In</h2>
        </div>

        <form
          onSubmit={() => console.log("first")}
          className="space-y-6"
          action=""
          method="POST"
        >
          <div className="space-y-4">
            <label htmlFor="username" className="block labelText">
              Username
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="username"
              name="username"
              autoFocus
              className="bg-gray-50 border-none focus:outline-none w-full rounded-md px-4 py-3"
              placeholder="Enter Your username"
            />
            {error && <span className="text-red-600 text-xs">{error}</span>}
          </div>

          <div className="space-y-4 relative">
            <label htmlFor="password" className="block labelText">
              Password
            </label>
            <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-md">
              <input
                onChange={handleChange}
                ref={passRef}
                type="password"
                id="password"
                name="password"
                className="bg-transparent border-none focus:outline-none w-full"
                placeholder="∗∗∗∗∗∗∗∗"
              />
              {showPass ? (
                <IoIosEyeOff
                  onClick={handleShowPass}
                  className="text-xl cursor-pointer"
                />
              ) : (
                <IoIosEye
                  onClick={handleShowPass}
                  className="text-xl cursor-pointer"
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-x-1 flex items-center">
              <input
                type="checkbox"
                id="remember_me"
                name="remember_me"
                className="rounded"
              />
              <label htmlFor="remember_me" className="cursor-pointer">
                Remember me
              </label>
            </div>
            <div
              onClick={() => handleShowToast("Feature Coming Soon...")}
              className="forgotPass cursor-pointer"
            >
              Forgot Password?
            </div>
          </div>
          <button
            disabled={!(formData.username && formData.password)}
            // onClick={handleSubmit}
            className="bg-[#752fed] py-3 text-white loginBtn w-full m-auto rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <img
                src={CheckRequest}
                className="absolute w-10 left-[46%] bottom-1 mx-auto"
              />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="text-center space-y-4 orText">Or</div>

        <button
          onClick={() => handleShowToast("Feature Coming Soon...")}
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2 rounded-md bg-gray-100 hover:bg-gray-200 border"
        >
          <img
            src={Google}
            alt="Google Logo"
            width=""
            height=""
            className="w-6 h-6"
          />
          <span className="gsi-material-button-contents font-medium">
            Google
          </span>
        </button>

        <div className="w-full text-sm font-medium text-gray-500 newAccText">
          Don&apos;t Have a Account?
          <Link to="/sign-up" className="forgotPass">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
