import React, { useState } from "react";
import MultipleChoice from "../question/MultipleChoice";
import ShortAnswer from "../question/ShortAnswer";
import BottomButton from "../button/BottomButton";
import { FaBars } from "react-icons/fa";

const Text = () => {
  return (
    <div className="flex-grow h-1/4 px-10 pb-10">
      <div className="flex items-center border-b-2 pt-10 pb-10 border-rmit-red">
        <div className="text-3xl text-rmit-blue w-1/3 text-left">
          Title of Examination
        </div>
        <div className="text-3xl text-rmit-blue w-1/3 text-right">
          Examinee Info
        </div>
      </div>
    </div>
  );
};

const Message = () => {
  return (
    <div className="bottom-20 right-20 h-32 w-32 bg-white fixed">
      <div className="">
        <div className="bg-rmit-blue text-white text-center">Announcement</div>
      </div>
    </div>
  );
};

class Announcement extends React.Component {
  state = {
    showMessage: false,
  };

  onButtonClickHandler = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };
  render() {
    return (
      <>
        {this.state.showMessage && <Message />}
        <div className="fixed right-0 bottom-0 p-8">
          <button
            className="h-12 w-12 rounded-lg  text-white bg-rmit-blue text-3xl leading-10 cursor-pointer"
            onClick={this.onButtonClickHandler}
          >
            <FaBars />
          </button>
        </div>
      </>
    );
  }
}

const QuestionPage = () => {
  const [isHidden] = useState(true);

  return (
    <div className="w-full h-screen">
      <Text />
      <MultipleChoice />
      <ShortAnswer />
      <BottomButton
        className={isHidden ? "" : "hidden"}
        prevButton={isHidden}
        nextButton="Submit"
      />
      <Announcement />
    </div>
  );
};

export default QuestionPage;
