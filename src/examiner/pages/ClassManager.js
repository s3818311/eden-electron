import React, { useState } from "react";
import PopUp from "../components/addClassPopup";
import ClassTile from "../components/class_tile";
import Loading from "../components/loading";
import useFetch from "react-fetch-hook";

const ClassManager = () => {
  const modalAdd = (formData) => {
    fetch("http://localhost:3001/classes", {
      method: "POST",
      body: JSON.stringify({
        name: formData.className,
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
  };

  const deleteClass = (formData) => {
    fetch("http://localhost:3001/classes/" + formData.classId, {
      method: "DELETE"
    });
  };

  const RenderClasses = () => {
    const { isLoading, data } = useFetch("http://localhost:3001/classes");

    return isLoading
      ? <Loading />
      : data.map((classObj, index) => (
        <ClassTile classId={classObj.id} name={classObj.name} key={index} deleteFunc={deleteClass} />
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
          Class Manager
        </div>
      </div>
      <div className="pt-2 h-5/6">
        <div className="flex justify-end w-full">
          <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red" onClick={toggleModal}>
            Add new class
          </div>
        </div>

        <div className="flex flex-row flex-wrap content-start justify-around h-full overflow-y-scroll">
          { RenderClasses() }
        </div>

        { renderModal() }

      </div>
    </div>
  );
};

export default ClassManager;
