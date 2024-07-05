import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import Image1 from "@/assets/Object1/Tv 2.png";
import Image2 from "@/assets/Object1/Tv 4.png";
import Image3 from "@/assets/Object1/Tv 5.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Quiz = ({ fullpageApi, data, dataLength, index }) => {
  const [answer, setAnswer] = useState("");
  const { points } = useSelector((store: any) => store.user.currentUser);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col tablet:flex-row h-[100vh] px-4 py-8">
      <div className="flex-1 flex flex-col space-y-6 justify-between h-full border border-teal-500 rounded-t-2xl tablet:rounded-s-2xl bg-teal-500 py-8 px-6 ">
        <div onClick={() => navigate(-1)} className="flex items-center gap-2">
          <ArrowLeft className="text-white" />
          <span className="underline text-white">Homepage</span>
        </div>
        <div className="text-start space-y-3">
          <div className="text-2xl font-semibold text-white">
            Question {index + 1}/{dataLength}
          </div>
          <div className="text-3xl tablet:text-5xl text-white">
            {data?.question}
          </div>
          <div className="text-lg font-medium text-white">
            Select One Answer
          </div>
        </div>
        <div className="text-lg text-white font-medium">Score : {points}</div>
      </div>
      <div className="flex-[2] h-full flex flex-col border border-teal-500 rounded-b-2xl tablet:rounded-e-2xl items-center justify-between py-8 px-6 space-y-4">
        <div className="flex overflow-x-auto tablet:overflow-hidden items-center justify-between gap-8">
          {data?.images?.map((item: string) => {
            return (
              <img
                className="w-[18rem] tablet:h-[18rem]"
                src={item}
                alt="images"
              />
            );
          })}
        </div>
        <div className="w-full space-y-3">
          {data?.options?.map((item: string, i) => {
            return (
              <div className="border flex items-center gap-4 group hover:border-teal-500 hover:bg-teal-50 max-w-lg rounded-md mx-auto px-4 py-3">
                <input type="radio" name="quiz" id={`option${index}${i}`} />{" "}
                <label
                  className="font-medium cursor-pointer w-full group-hover:text-teal-500"
                  htmlFor={`option${index}${i}`}
                >
                  {item}
                </label>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col tablet:flex-row gap-4 ">
          {index < 2 ? (
            <button
              onClick={() => fullpageApi.moveSectionDown()}
              disabled={!answer}
              className="cta font-medium cursor-pointer bg-teal-500 text-white rounded-full px-8 py-2 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Next
            </button>
          ) : (
            <Link
              to="/review"
              className="cta font-medium cursor-pointer bg-teal-500 text-white rounded-full px-8 py-2 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Review
            </Link>
          )}
          <button className="hidden">Review</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
