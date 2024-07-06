import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../axiosConfig";
import { toast } from "sonner";
import { restartQuiz, setPoints } from "@/redux/quiz/quizSlice";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CircleX } from "lucide-react";
import { VscDebugRestart } from "react-icons/vsc";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { BsInfoCircleFill } from "react-icons/bs";

const Review = ({ fullpageApi, data, dataLength, index }) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const [activeBox, setActiveBox] = useState("");
  const [correct, setCorrect] = useState(null);
  const { _id } = useSelector((store: any) => store.user.currentUser);
  const { quizData, points } = useSelector((store: any) => store.quiz);

  console.log(data);

  const navigate = useNavigate();
  const handleShowToast = (text: string) => {
    toast(
      <span className="text-teal-500 font-semibold font-montserrat">
        {text}
      </span>
    );
  };

  const checkAnswer = async () => {
    "use server";
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
        // const isCorrect = validateAnswer.data.message.includes("Correct");
        const isCorrect = answer === data.answer[0];
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
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <ArrowLeft className="text-white group-hover:font-medium transition-all duration-300 ease-in-out" />
            <span className="underline text-white group-hover:font-medium transition-all duration-300 ease-in-out">
              Homepage
            </span>
          </div>
          <Popover>
            <PopoverTrigger className="flex items-center text-white gap-1">
              <span className="text-sm font-semibold">More Info</span>
              <BsInfoCircleFill className="text-xl text-white" />
            </PopoverTrigger>
            <PopoverContent className="bg-white max-w-lg shadow-xl px-4 py-6 space-y-2">
              <div className="font-semibold text-sm underline">
                Brief Description :
              </div>
              <div className=" border rounded-md px-2 space-y-2 py-4">
                <div className="text-black font-medium text-[15px]">
                  {data?.answer[2]}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="text-start space-y-3">
          <img
            className="h-[50vh] tablet:h-[70vh] w-full"
            src={data?.answer[1]}
          />
        </div>
        <div className="text-lg text-white font-medium">Score : {points}</div>
      </motion.div>
      <motion.div className="flex-[2] h-full flex flex-col border border-teal-500 rounded-b-2xl tablet:rounded-e-2xl tablet:rounded-b-none items-center justify-between py-8 px-6 space-y-4">
        <div className="hidden tablet:flex overflow-x-auto  items-center justify-between gap-8">
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
            let backgroundColor =
              data?.answer[0] === item
                ? "bg-green-400 text-white"
                : "bg-red-500 text-white";

            return (
              <motion.div
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                key={i}
                className={`${backgroundColor} border flex items-center gap-4 group max-w-lg rounded-md mx-auto px-4 py-3 ${
                  answer && "cursor-not-allowed"
                }`}
              >
                <input
                  disabled
                  type="radio"
                  name="quiz"
                  id={`option${index}${i}`}
                />{" "}
                <label
                  className="font-medium w-full flex justify-between"
                  htmlFor={`option${index}${i}`}
                >
                  {item}
                  {item !== data?.answer[0] ? <CircleX /> : <Check />}
                </label>
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-col tablet:flex-row gap-4">
          {index < 2 ? (
            <button
              onClick={() => fullpageApi.moveSectionDown()}
              className="cta font-medium cursor-pointer bg-teal-500 text-white rounded-full px-8 py-2 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/quiz");
                dispatch(restartQuiz());
              }}
              className="cta font-medium flex items-center gap-2 cursor-pointer bg-teal-500 text-white rounded-full px-8 py-2 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Restart <VscDebugRestart className="text-sm" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Review;
