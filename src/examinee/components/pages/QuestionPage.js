import React from "react";
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
const QuestionFormMultipleChoice = () => {
  return (
    <div className="px-10 pb-10">
      <div className="border-2 border-black mx-auto flex p-6 bg-white rounded-lg flex-wrap content-start ">
        <div className="flex items-center border-b-2 h-1/6 w-full pb-10 border-black">
          <div className="text-3xl text-rmit-blue w-1/3 text-left">
            Question 1
          </div>
        </div>

        <div className=" w-full pt-10 text-xl ">
          <div>
            <input type="radio" id="option-1" name="radio" value="option-1" />
            <label className="ml-10" htmlFor="option-1">
              Option 1
            </label>
          </div>
          <div>
            <input type="radio" id="option-1" name="radio" value="option-2" />
            <label className="ml-10" htmlFor="option-2">
              Option 2
            </label>
          </div>
          <div>
            <input type="radio" id="option-1" name="radio" value="option-3" />
            <label className="ml-10" htmlFor="option-3">
              Option 3
            </label>
          </div>
          <div>
            <input type="radio" id="option-1" name="radio" value="option-4" />
            <label className="ml-10" htmlFor="option-4">
              Option 4
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
const QuestionFormShortAnswer = () => {
  return (
    <div className="px-10 pb-10">
      <div className="border-2 border-black mx-auto flex p-6 bg-white rounded-lg flex-wrap content-start">
        <div className="flex items-center border-b-2 h-1/6 w-full pb-10 border-black">
          <div className="text-3xl text-rmit-blue w-1/3 text-left">
            Question 2
          </div>
        </div>
        <div className="mb-3 pt-10 w-full">
          <input
            type="text"
            placeholder="Your answer"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return (
    <div className="w-full flex px-10 pb-10">
      <div className="w-full flex mt-auto mb-20">
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold focus:border-none px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
const Message = () => {
  return (
    <div className="shadow-lg z-10 ">
      <div className="p-16 bg-white max-w-xs  relative">
        <div className="bg-rmit-blue text-white top-0 absolute left-0 w-full text-center">
          Announcement
        </div>
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
      <div className="fixed right-0 bottom-0 p-8">
        {this.state.showMessage && <Message />}
        <button
          className="h-12 w-12 rounded-lg  text-white bg-rmit-blue text-3xl leading-10 cursor-pointer"
          onClick={this.onButtonClickHandler}
        >
          <FaBars />
        </button>
      </div>
    );
  }
}
const QuestionPage = () => {
  return (
    <div className="w-full h-screen">
      <Text />
      <QuestionFormMultipleChoice />
      <QuestionFormShortAnswer />
      <Button />
      <Announcement />
    </div>
  );
};

export default QuestionPage;
