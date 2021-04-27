import React, { useState } from "react";
import PopUp from "../components/popUp";
import ClassObj from "../components/class_tile";
import Loading from "../components/loading";
import useFetch from "react-fetch-hook";

const Exam = () => {
  const modalAdd = (formData) => {
    fetch("http://localhost:3001/update/classList.json", {
      method: "PATCH",
      body: JSON.stringify({
        name: formData.className,
        examList: [],
        participants: null,
        results: {
          available: false,
          fileName: null
        }
      }),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(() => {
      window.location.reload();
    });

  };

  const deleteClass = (formData) => {
    fetch("http://localhost:3001/delete/class/" + formData.class, {
      method: "DELETE"
    });
  };

  const renderClasses = () => {
    const { isLoading, data } = useFetch("http://localhost:3001/file/classList.json");

    return isLoading
      ? <Loading></Loading>
      : data.map((classObj, index) => (
        <ClassObj name={classObj.name} key={index} deleteFunc={deleteClass}></ClassObj>
      ));
  };

  const [modalIsOpen, setModalState] = useState(false);

  const toggleModal = () => setModalState(!modalIsOpen);

  const renderModal = () => {
    if (modalIsOpen) {
      return (
        <PopUp text="Add new class" closePopup={toggleModal} onSubmitFunc={modalAdd}></PopUp>
      );
    }
  };

  return (
    <div className="flex-grow h-screen px-10 pb-10">
      <div className="flex items-center border-b-2 h-1/6 border-rmit-red">
        <div className="text-3xl text-rmit-blue">
          Exam Manager
        </div>
      </div>
      <div className="pt-2 h-5/6">
        <div className="flex justify-end w-full shadow-2xl">
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
