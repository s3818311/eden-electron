import React from "react";
import MultipleChoice from "../question/MultipleChoice";
import ShortAnswer from "../question/ShortAnswer";
import BottomButton from "../button/BottomButton";
import Announcement from "../announcement/Announcement";
import ProgressBar from "../progress/ProgressBar";
import Title from "../text/Title";

const QuestionPage = () => {
  return (
    <div className="w-full h-screen">
      <Title title="Title of Examination" subTitle="Examinee Info" />
      <MultipleChoice />
      <ShortAnswer />
      <ProgressBar />
      <BottomButton nextButton="Next" isPrevButton={true} />
      <Announcement />
    </div>
  );
};

export default QuestionPage;
