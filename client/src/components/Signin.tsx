"use client";

import React, { FormEvent, useState } from "react";
import Logo from "/logo.png";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import axiosInstance from "../../axiosConfig";
import { toast } from "sonner";
import OAuth from "./OAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "@/redux/user/userSlice";

const SignIn = () => {
  interface FormDataInterface {
    email: string;
    password: string;
  }
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState<FormDataInterface>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { loading, error: errorMessage } = useSelector(
    (state: any) => state.user
  );
  const passRef = useRef<any>();

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (e) => {
    if (e.target.value == " ") return;
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!(formData.email.trim() && formData.password.trim())) {
      handleShowToast("kindly fill both name & password!");
      return;
    }
    try {
      dispatch(signInStart());
      const data = await axiosInstance.post("/api/signin", formData);
      setFormData({ email: "", password: "" });
      console.log(data);
      if (data.status == 200 || data.statusText == "OK") {
        dispatch(signInSuccess(data.data.data));
        handleShowToast("Welcome! 🥳");
        navigate("/");
      }
    } catch (err) {
      dispatch(signInFailure(err.response.data));
    }
  };

  const handleShowToast = (text: string) => {
    toast(
      <span className="text-teal-500 font-semibold font-montserrat">
        {text}
      </span>
    );
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
    <div className="absolute flex font-montserrat w-full h-full top-0 z-20 bg-teal-100">
      <div className="w-[90%] relative h-fit my-auto mx-auto sm:w-[50%] lg:w-[38%] px-[1rem] py-[2rem] lg:py-[4rem] lg:px-[4rem] bg-white md:shadow border-gray-700 rounded-lg">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="relative bottom-4 right-2 tablet:right-8 cursor-pointer hover:text-destructive"
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
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-6"
          action=""
          method="POST"
        >
          <div className="space-y-4">
            <label htmlFor="email" className="block labelText">
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              type="email"
              id="email"
              name="email"
              autoFocus
              className="bg-gray-50 border-none focus:outline-none w-full rounded-md px-4 py-3"
              placeholder="Enter Your Email"
            />
            {errorMessage && (
              <span className="text-red-600 text-xs">{errorMessage}</span>
            )}
          </div>

          <div className="space-y-4 relative">
            <label htmlFor="password" className="block labelText">
              Password
            </label>
            <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-md">
              <input
                value={formData.password}
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
                checked
                id="remember_me"
                name="remember_me"
                className="rounded disabled cursor-not-allowed"
              />
              <label
                htmlFor="remember_me"
                className="text-sm cursor-not-allowed"
              >
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
            disabled={!(formData.email && formData.password)}
            // onClick={handleSubmit}
            className="bg-teal-500 py-3 text-white font-medium w-full m-auto rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center py-2 orText">Or</div>

        <OAuth />

        <div className="w-full mt-3 text-sm font-medium text-gray-500 newAccText">
          Don&apos;t Have a Account?{" "}
          <Link to="/signup" className="hover:text-teal-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
