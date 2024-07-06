import React, { useEffect } from "react";
import Flag from "@/assets/flag.png";
import Gift from "@/assets/gift.jpg";
import Coin from "@/assets/coin.jpg";
import Message from "@/assets/message.png";
import Crown from "@/assets/crown.png";
import Wordbreak from "./Wordbreak";
import { ArrowLeft, ArrowRight, CirclePlay } from "lucide-react";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setQuizData } from "@/redux/quiz/quizSlice";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getQuizData = async () => {
    "use server";
    const data = await axiosInstance.get("/api/getquiz");
    dispatch(setQuizData(data.data.data));
  };

  useEffect(() => {
    getQuizData();
  }, []);

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="container pb-14 space-y-20 tablet:space-y-32"
      >
        {/* section one */}
        <div className="flex flex-col tablet:flex-row items-center justify-between pt-14 tablet:pt-20">
          <motion.div
            initial={{ x: -10 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex-1 py-10 space-y-10"
          >
            <h1 className="font-bold text-[2rem] tablet:text-[3rem] tracking-wide leading-tight">
              Daily Quiz, Daily <Wordbreak /> Bonus-Play Today
            </h1>
            <div className="font-medium text-[1rem] tracking-wide leading-normal">
              Mentoons is a daily quiz platform, grab cool prizes and exciting{" "}
              <Wordbreak />
              points everyday. Lorem ipsum dolor sit amet consectetur
              adipisicing <Wordbreak />
              elit. Magnam, eveniet!{" "}
            </div>
            <button
              onClick={() => navigate("/quiz")}
              className="flex items-center gap-1 cta  hover:scale-105 transition-all duration-300 ease-in-out bg-teal-500 text-white font-medium rounded-md px-4 py-2"
            >
              <CirclePlay /> Play Now
            </button>
          </motion.div>
          <motion.div
            initial={{ x: 10 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex-1 flex justify-end"
          >
            <img className="w-[30rem]" src={Flag} alt="winner flag" />
          </motion.div>
        </div>
        {/* section two */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="border tealShadow rounded-3xl flex flex-col tablet:flex-row gap-4 w-full"
        >
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-5 tablet:py-0 bg-teal-500 rounded-t-md tablet:rounded-s-3xl text-white space-y-2">
            <div className="text-3xl font-semibold text-center">
              Choose the option
            </div>
            <p className="text-center font-medium text-base tracking-wide leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              possimus!
            </p>
          </div>
          <div className="flex-[2] px-8 space-y-4 py-8">
            <div
              onClick={() => navigate("/quiz")}
              className="flex group hover:scale-95 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer py-4 px-2  tablet:px-4 border rounded-lg justify-between"
            >
              <div className="flex items-center text-lg tablet:text-2xl font-semibold">
                <img className="w-[5rem] rounded-full" src={Gift} alt="gift" />
                Daily Trivia
              </div>
              <div className="flex items-center gap-2">
                Start <span className="hidden tablet:block">Now</span>{" "}
                <ArrowRight className="transition-all duration-300 ease-in-out group-hover:opacity-50" />
              </div>
            </div>
            <div
              onClick={() => navigate("/quiz")}
              className="flex group hover:scale-95 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer px-2 tablet:px-4 border rounded-lg justify-between"
            >
              <div className="flex items-center text-lg tablet:text-2xl font-semibold">
                <img className="w-[5rem] rounded-full" src={Coin} alt="gift" />
                Daily Play & Earn
              </div>
              <div className="flex pl-2 tablet:pl-0 items-center gap-2">
                Start <span className="hidden tablet:block">Now</span>{" "}
                <ArrowRight className="transition-all duration-300 ease-in-out group-hover:opacity-50" />
              </div>
            </div>
            <div
              onClick={() => navigate("/quiz")}
              className="flex group hover:scale-95 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer py-4 px-2 tablet:px-4  border rounded-lg justify-between"
            >
              <div className="flex items-center text-lg tablet:text-2xl font-semibold">
                <img
                  className="w-[5rem] px-2 rounded-full"
                  src={Crown}
                  alt="gift"
                />
                Play like a king
              </div>
              <div className="flex items-center gap-2">
                Start <span className="hidden tablet:block">Now</span>{" "}
                <ArrowRight className="transition-all duration-300 ease-in-out group-hover:opacity-50" />
              </div>
            </div>
          </div>
        </motion.div>
        {/* section three */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="space-y-2"
          >
            <div className="text-3xl font-semibold">
              Play, Learn and Earn Rewards
            </div>
            <p className="font-medium text-base tracking-wide leading-snug">
              Check yourself, Earn yourself!
            </p>
          </motion.div>
          <Slider />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
