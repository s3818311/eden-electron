import React from "react";
import MultipleChoice from "../question/MultipleChoice";
import ShortAnswer from "../question/ShortAnswer";
import BottomButton from "../button/BottomButton";
import Announcement from "../announcement/Announcement";
import Title from "../text/Title";

const QuestionPage = () => {
  return (
    <div className="w-full h-screen">
      <Title title="Title of Examination" subTitle="Examinee Info" />
      <MultipleChoice />
      <ShortAnswer />
      <BottomButton nextButton="Submit" isQuestion={true} />
      <Announcement />
    </div>
  );
};

export default QuestionPage;
