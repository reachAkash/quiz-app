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
import Logo from "/logo.png";
import Google from "@/assets/google.svg";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
// import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import Image from "next/image";
import { useRef } from "react";
import CheckRequest from "@/assets/Check.gif";
import { ArrowLeft } from "lucide-react";
// import { handleShowToast } from "@/utils";
// import { toast } from "sonner";

const SignIn = () => {
  interface FormDataInterface {
    username?: string;
    password?: string | number;
  }
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState<FormDataInterface>({});
  const navigate = useNavigate();
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
    <div className="absolute flex font-montserrat w-full max-h-fit py-16 top-0 z-20 bg-teal-100">
      <div className="w-[90%] h-fit my-auto mx-auto sm:w-[50%] lg:w-[38%] px-[1rem] py-[2rem] lg:py-[4rem] lg:px-[4rem] bg-white md:shadow border-gray-700 rounded-lg">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="relative bottom-4 right-8 cursor-pointer hover:text-destructive"
        />
        <div className="flex justify-center items-center mb-8 gap-4">
          <img
            src={Logo}
            alt="Logo"
            width=""
            height=""
            className="w-[10rem] flex-shrink-0"
          />
        </div>

        <form
          onSubmit={() => console.log("first")}
          className="space-y-6"
          action=""
          method="POST"
        >
          <div className="space-y-4">
            <label htmlFor="username" className="block labelText">
              Name
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

          <div className="space-y-4">
            <label htmlFor="email" className="block labelText">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border-none focus:outline-none w-full rounded-md px-4 py-3"
              placeholder="Enter Your email"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor="mobile" className="block labelText">
              Mobile
            </label>
            <input
              onChange={handleChange}
              type="tel"
              id="mobile"
              name="mobile"
              className="bg-gray-50 border-none focus:outline-none w-full rounded-md px-4 py-3"
              placeholder="Enter Your number"
            />
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
              <label htmlFor="remember_me" className="text-sm cursor-pointer">
                Remember me
              </label>
            </div>
            <div
              onClick={() => handleShowToast("Feature Coming Soon...")}
              className="forgotPass cursor-pointer  hover:text-teal-500 text-sm"
            >
              Forgot Password?
            </div>
          </div>
          <button
            disabled={!(formData.username && formData.password)}
            // onClick={handleSubmit}
            className="bg-teal-500 py-3 text-white font-medium w-full m-auto rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
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

        <div className="text-center py-2 orText">Or</div>

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

        <div className="w-full mt-3 text-sm font-medium text-gray-500 newAccText">
          Already Have a Account?{" "}
          <Link to="/signin" className="hover:text-teal-500">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
