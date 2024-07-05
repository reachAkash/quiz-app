import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../axiosConfig";
import { toast } from "sonner";
import { setPoints } from "@/redux/quiz/quizSlice";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { motion } from "framer-motion";

const Quiz = ({ fullpageApi, data, dataLength, index }) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const [activeBox, setActiveBox] = useState("");
  const [correct, setCorrect] = useState(null);
  const { _id } = useSelector((store: any) => store.user.currentUser);
  const points = useSelector((store: any) => store.quiz.points);

  const navigate = useNavigate();
  const handleShowToast = (text: string) => {
    toast(
      <span className="text-teal-500 font-semibold font-montserrat">
        {text}
      </span>
    );
  };

  const checkAnswer = async () => {
    "use client";
    try {
      if (answer.trim() != "") {
        const validateAnswer = await axiosInstance.post(
          "/api/validate-answer",
          {
            quizId: data._id,
            answer,
          }
        );
        handleShowToast(validateAnswer.data.message);
        const isCorrect = validateAnswer.data.message.includes("Correct");
        setCorrect(isCorrect);
        if (isCorrect) {
          dispatch(setPoints(points + 5));
        } else {
          dispatch(setPoints(points - 1));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (answer) {
      checkAnswer();
    }
  }, [answer]);

  return (
    <div className="flex flex-col tablet:flex-row h-[100vh] px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex-1 flex flex-col space-y-6 justify-between h-full border border-teal-500 rounded-t-2xl tablet:rounded-s-2xl tablet:rounded-t-none bg-teal-500 py-8 px-6"
      >
        <div className="flex items-center justify-between">
          <div onClick={() => navigate(-1)} className="flex items-center gap-2">
            <ArrowLeft className="text-white" />
            <span className="underline text-white">Homepage</span>
          </div>
          <Popover>
            <PopoverTrigger>
              <BsInfoCircleFill className="text-xl text-white" />
            </PopoverTrigger>
            <PopoverContent className="bg-white shadow-xl px-4 py-6 ">
              <div className="font-semibold text-sm underline">Rules : </div>
              <div className="space-y-1 py-2">
                <div className="text-gray-700 font-medium text-sm">
                  +5 Points for correct answers
                </div>
                <div className="text-gray-700 font-medium text-sm">
                  -1 Point for incorrect answers
                </div>
              </div>
            </PopoverContent>
          </Popover>
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
      </motion.div>
      <motion.div className="flex-[2] h-full flex flex-col border border-teal-500 rounded-b-2xl tablet:rounded-e-2xl tablet:rounded-b-none items-center justify-between py-8 px-6 space-y-4">
        <div className="flex overflow-x-auto tablet:overflow-hidden items-center justify-between gap-8">
          {data?.images?.map((item: string) => (
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              key={item}
              className="w-[18rem] tablet:h-[18rem]"
              src={item}
              alt="images"
            />
          ))}
        </div>
        <div className="w-full space-y-3">
          {data?.options?.map((item: string, i) => {
            let backgroundColor = "";
            if (answer && activeBox === item) {
              backgroundColor = correct
                ? "bg-green-400 text-white"
                : "bg-red-500 text-white";
            }

            return (
              <motion.div
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                key={i}
                onClick={(e: any) => {
                  setAnswer(item);
                  setActiveBox(item);
                }}
                className={`${backgroundColor} border flex items-center gap-4 group hover:border-teal-500 hover:bg-teal-50 max-w-lg rounded-md mx-auto px-4 py-3 ${
                  answer && "pointer-events-none cursor-not-allowed"
                }`}
              >
                <input type="radio" name="quiz" id={`option${index}${i}`} />{" "}
                <label
                  className="font-medium cursor-pointer w-full group-hover:text-teal-500"
                  htmlFor={`option${index}${i}`}
                >
                  {item}
                </label>
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-col tablet:flex-row gap-4">
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
      </motion.div>
    </div>
  );
};

export default Quiz;
