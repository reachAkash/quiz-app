import React from "react";
import Flag from "@/assets/flag.png";
import Gift from "@/assets/gift.jpg";
import Coin from "@/assets/coin.jpg";
import Message from "@/assets/message.png";
import Crown from "@/assets/crown.png";
import Wordbreak from "./Wordbreak";
import { ArrowLeft, ArrowRight, CirclePlay } from "lucide-react";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="container pb-14 space-y-12">
      {/* section one */}
      <div className="flex flex-col tablet:flex-row items-center justify-between">
        <div className="flex-1 py-10 space-y-6">
          <h1 className="font-bold text-2xl tablet:text-5xl tracking-wide leading-tight">
            Daily Quiz, Daily <Wordbreak /> Bonus-Play Today
          </h1>
          <div className="font-medium text-base tracking-wide leading-snug">
            Mentoons is a daily quiz platform, grab cool prizes and exciting{" "}
            <Wordbreak />
            points everyday. Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            <Wordbreak />
            elit. Magnam, eveniet!{" "}
          </div>
          <button className="flex items-center gap-1 cta  hover:scale-105 transition-all duration-300 ease-in-out bg-teal-500 text-white font-medium rounded-md px-4 py-2">
            <CirclePlay /> Play Now
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <img className="w-[30rem]" src={Flag} alt="winner flag" />
        </div>
      </div>
      {/* section two */}
      <div className="border tealShadow rounded-3xl flex flex-col tablet:flex-row gap-4 w-full">
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
          <div className="flex group hover:scale-95 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer py-4 px-2  tablet:px-4 border rounded-lg justify-between">
            <div className="flex items-center text-lg tablet:text-2xl font-semibold">
              <img className="w-[5rem] rounded-full" src={Gift} alt="gift" />
              Daily Trivia
            </div>
            <div className="flex items-center gap-2">
              Start <span className="hidden tablet:block">Now</span>{" "}
              <ArrowRight className="transition-all duration-300 ease-in-out group-hover:opacity-50" />
            </div>
          </div>
          <div className="flex group hover:scale-95 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer px-2 tablet:px-4 border rounded-lg justify-between">
            <div className="flex items-center text-lg tablet:text-2xl font-semibold">
              <img className="w-[5rem] rounded-full" src={Coin} alt="gift" />
              Daily Play & Earn
            </div>
            <div className="flex pl-2 tablet:pl-0 items-center gap-2">
              Start <span className="hidden tablet:block">Now</span>{" "}
              <ArrowRight className="transition-all duration-300 ease-in-out group-hover:opacity-50" />
            </div>
          </div>
          <div className="flex group hover:scale-95 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer py-4 px-2 tablet:px-4  border rounded-lg justify-between">
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
      </div>
      {/* section three */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-3xl font-semibold">
            Play, Learn and Earn Rewards
          </div>
          <p className="font-medium text-base tracking-wide leading-snug">
            Check yourself, Earn yourself!
          </p>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
