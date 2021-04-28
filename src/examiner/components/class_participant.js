import React, {useState} from "react";
import useFetch from "react-fetch-hook";
import NewStudentPopup from "../components/newStudentPopup";
import Loading from "../components/loading";

const Participants = () => {

  const {isLoading, data} = useFetch("http://localhost:3001/file/student1.csv", {
    formatter: (response) => response.text(),
  });


  const renderParticipants = () => {
    return isLoading ?
      (
        <tr>
          <td><Loading /></td>
          <td><Loading /></td>
          <td><Loading /></td>
        </tr>) :
      data.split("\n").map(
        (line, index) => {
          const fieldArray = line.split(",");
          return(
            <tr key={index} className="border-b-2 border-black border-opacity-20">
              <td className="px-2 py-2 text-center grid justify-items-center">
                <img src={fieldArray[0]}
                  className="items-center object-scale-down h-28"
                  alt="profilepic"></img>
              </td>
              <td className="px-2 py-2 text-center">
                {fieldArray[1]}
              </td>
              <td className="px-2 py-2 text-center">
                {fieldArray[2]}
              </td>
            </tr>
          );
        }
      );
  };

  const [modalIsOpen, setModal] = useState(false);

  const toggleModal = () => {setModal(!modalIsOpen);};

  const renderModal = () => {
    if(modalIsOpen){
      return (<NewStudentPopup currentFile="student1.csv" text="Choose new student list" closePopup={toggleModal}/>);
    }
  };


  return (
    <div>
      <div className="flex justify-end w-full">
        <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red" onClick={toggleModal}>
            Update participants
        </div>
      </div>

      <div className="px-20 py-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="text-rmit-blue bg-rmit-blue bg-opacity-10">
              <th>Profile Picture</th>
              <th>Name</th>
              <th>Date of birth</th>
            </tr>
          </thead>
          <tbody>
            {renderParticipants()}
          </tbody>
        </table>
      </div>
      {renderModal()}
    </div>
  );
};

export default Participants;
