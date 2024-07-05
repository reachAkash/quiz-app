import { ArrowLeft } from "lucide-react";
import React from "react";
import Image1 from "@/assets/Object1/Tv 2.png";
import Image2 from "@/assets/Object1/Tv 4.png";
import Image3 from "@/assets/Object1/Tv 5.png";
const Quiz1 = ({ fullpageApi }) => {
  return (
    <div className="flex h-[100vh] px-4 py-8">
      <div className="flex-1 flex flex-col justify-between h-full border border-teal-500 rounded-s-2xl bg-teal-500 py-8 px-6 ">
        <div className="flex items-center gap-2">
          <ArrowLeft className="text-white" />
          <span className="underline text-white"> Homepage</span>
        </div>
        <div className="text-start space-y-3">
          <div className="text-2xl font-semibold text-white">Step 1/5</div>
          <div className="text-5xl text-white">What is your goal?</div>
          <div className="text-lg font-medium text-white">
            Select One Answer
          </div>
        </div>
        <div className="text-lg text-white font-medium">Sunday</div>
      </div>
      <div className="flex-[2] h-full flex flex-col border border-teal-500 rounded-e-2xl items-center justify-between py-8 px-6 ">
        <div className="flex items-center justify-between gap-8">
          <img
            className="w-[18rem] h-[18rem] shadow-sm"
            src={Image1}
            alt="images"
          />
          <img
            className="w-[18rem] h-[18rem] shadow-sm"
            src={Image2}
            alt="images"
          />
          <img
            className="w-[18rem] h-[18rem] shadow-sm"
            src={Image3}
            alt="images"
          />
        </div>
        <div className="w-full space-y-3">
          <div className="border flex items-center gap-4 group hover:border-teal-500 hover:bg-teal-50 max-w-lg rounded-md mx-auto px-4 py-3">
            <input type="radio" name="quiz" id="option1" />{" "}
            <label
              className="cursor-pointer w-full group-hover:text-teal-500"
              htmlFor="option1"
            >
              Option 1
            </label>
          </div>
          <div className="border flex items-center gap-4 group hover:border-teal-500 hover:bg-teal-50 max-w-lg rounded-md mx-auto px-4 py-3">
            <input type="radio" name="quiz" id="option2" />{" "}
            <label
              className="cursor-pointer w-full group-hover:text-teal-500 "
              htmlFor="option2"
            >
              Option 2
            </label>
          </div>
          <div className="border flex items-center gap-4 group hover:border-teal-500 hover:bg-teal-50 max-w-lg rounded-md mx-auto px-4 py-3">
            <input type="radio" name="quiz" id="option3" />{" "}
            <label
              className="cursor-pointer w-full group-hover:text-teal-500"
              htmlFor="option3"
            >
              Option 3
            </label>
          </div>
          <div className="border flex items-center gap-4 group hover:border-teal-500 hover:bg-teal-50 max-w-lg rounded-md mx-auto px-4 py-3">
            <input type="radio" name="quiz" id="option4" />{" "}
            <label
              className="cursor-pointer w-full group-hover:text-teal-500 "
              htmlFor="option4"
            >
              Option 4
            </label>
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row gap-4 ">
          <button
            onClick={() => fullpageApi.moveSectionDown()}
            className="cta font-medium cursor-pointer bg-teal-500 text-white rounded-full px-8 py-2 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Next
          </button>
          <button className="hidden">Review</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz1;
