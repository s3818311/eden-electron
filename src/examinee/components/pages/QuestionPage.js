import React from "react";
import MultipleChoice from "../question/MultipleChoice";
import ShortAnswer from "../question/ShortAnswer";
import BottomButton from "../button/BottomButton";
import { FaBars } from "react-icons/fa";
import Title from "../text/Title";
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
