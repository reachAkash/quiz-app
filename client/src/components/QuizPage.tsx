import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Quiz1 from "./Quiz1";

const QuizPage = () => (
  //

  <ReactFullpage
    credits={{ enabled: false, label: "" }}
    scrollingSpeed={1500}
    render={({ state, fullpageApi }) => (
      <ReactFullpage.Wrapper>
        <div className="section absolute top-4">
          <Quiz1 fullpageApi={fullpageApi} />
        </div>
        <div className="section absolute top-4">
          <Quiz1 fullpageApi={fullpageApi} />
        </div>
        <div className="section absolute top-4">
          <Quiz1 fullpageApi={fullpageApi} />
        </div>
        <div className="section absolute top-4">
          <Quiz1 fullpageApi={fullpageApi} />
        </div>
        <div className="section absolute top-4">
          <Quiz1 fullpageApi={fullpageApi} />
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default QuizPage;
