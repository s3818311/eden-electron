import React, { useState } from "react";
import PopUp from "../components/popUp";
import ClassObj from "../components/class_obj";
import useFetch from "react-fetch-hook";
import Loading from "../components/loading";
import {updateFile} from "../processes/fileHandling";

const Exam = () => {
  const getClassList = useFetch("http://localhost:3001/file/classList.json", {
    formatter: (response) => response.text(),
  });

  const modalAdd = (formData) => {
    const newClass = {
      name: formData.className,
      examList: [],
      participants: null,
      results: {
        available: false,
        fileName: null
      }
    };

    updateFile("classList.json", JSON.stringify(newClass));
    window.location.reload();
  };

  const renderClasses = () => {
    return getClassList.isLoading
      ? <Loading></Loading>
      : JSON.parse(getClassList.data).map((classObj, index) => (
        <ClassObj name={classObj.name} loading={getClassList.isLoading} key={index}></ClassObj>
      ));
  };

  const [modalIsOpen, setModalState] = useState(false);

  const toggleModal = () => setModalState(!modalIsOpen);

  const renderModal = () => {
    if (modalIsOpen)
      return (
        <PopUp text="Add new class" closePopup={toggleModal} addFunc={modalAdd}></PopUp>
      );
  };

  return (
    <div className="flex-grow h-screen px-10 pb-10">
      <div className="flex items-center border-b-2 h-1/6 border-rmit-red">
        <div className="text-3xl text-rmit-blue">
          Exam Manager
        </div>
      </div>
      <div className="pt-2 h-5/6">
        <div className="flex justify-end w-full">
          <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red" onClick={toggleModal}>
            Add new class
          </div>
        </div>

        <div className="flex flex-row flex-wrap content-start h-full overflow-y-scroll justify-items-center">
          { renderClasses() }
        </div>

        { renderModal() }

      </div>
    </div>
  );
};

export default Exam;
