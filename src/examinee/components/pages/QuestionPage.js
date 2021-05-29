import React from "react";
import MultipleChoice from "../question/MultipleChoice";
import BottomButton from "../button/BottomButton";
import Announcement from "../announcement/Announcement";
import ProgressBar from "../progress/ProgressBar";
import Title from "../text/Title";

const QuestionPage = () => {
  return (
    <div className="w-full h-screen">
      <Title title="Title of Examination" subTitle="Examinee Info" />
      <MultipleChoice />
      <ProgressBar />
      <BottomButton nextButton="Next" isPrevButton={true} />
      <Announcement />
    </div>
  );
};

export default QuestionPage;
