import React, { useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { Link } from "react-router-dom";
import ExamPopup from "../components/addExamPopup";

const ExamManager = () => {
  // eslint-disable-next-line no-unused-vars
  const [examList, setExamList] = useState(
    [
      {
        title: "Exam 1",
        path: "exam1"
      },
      {
        title: "Exam 2",
        path: "exam2"
      },
      {
        title: "Exam 3",
        path: "exam3"
      },
      {
        title: "Exam 4",
        path: "exam4"
      },
      {
        title: "Exam 5",
        path: "exam5"
      },
      {
        title: "Exam 6",
        path: "exam6"
      }
    ]
  );

  const [modalIsOpen, setModalState] = useState(false);

  const toggleModal = () => setModalState(!modalIsOpen);

  const renderModal = () => {
    if (modalIsOpen) {
      return (
        <ExamPopup text="Add new exam" closePopup={toggleModal} onSubmitFunc={toggleModal}></ExamPopup>
      );
    }
  };


  return (
    <div className="flex-grow h-screen px-10 pb-10">
      <div className="flex items-center border-b-2 h-1/6 border-rmit-red">
        <div className="text-3xl text-rmit-blue">
          Exam manager
        </div>
      </div>
      <div className="pt-2 h-5/6">
        <div className="flex justify-end w-full">
          <div className="flex justify-end w-full">
            <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red" onClick={toggleModal}>
            Create new exam
            </div>
          </div>
        </div>

        {renderModal()}

        <div className="flex flex-row flex-wrap">
          <div className = "px-20 py-10 grid grid-cols-6 gap-20">
            {examList.map(
              (item, index)=>{
                return(
                  <Link to={"exam/"+item.path} key={index} className="flex flex-col items-center text-rmit-blue">
                    <div className="text-6xl">
                      <AiFillFileText />
                    </div>
                    <div className=" ">
                      {item.title}
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamManager;
