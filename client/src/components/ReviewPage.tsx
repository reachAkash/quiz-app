import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { useSelector } from "react-redux";
import Review from "./Review";

const QuizPage = () => {
  const { quizData } = useSelector((store: any) => store.quiz);

  return (
    <ReactFullpage
      credits={{ enabled: false, label: "" }}
      scrollingSpeed={1500}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {quizData.map((item: any, index) => {
            return (
              <div key={item?._id} className="section absolute top-4">
                <Review
                  data={item}
                  dataLength={quizData?.length}
                  index={index}
                  fullpageApi={fullpageApi}
                />
              </div>
            );
          })}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default QuizPage;
