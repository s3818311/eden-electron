/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import NewStudentPopup from "../components/newStudentPopup";
import Loading from "../components/loading";
import PropTypes from "prop-types";

const Students = (props) => {
  const classList = useFetch("http://localhost:3001/file/classList.json");

  const getStudentList = (className) => {
    if (!classList.isLoading) {
      for (const classObj of classList.data) {
        if (classObj.name === className){
          return classObj.participants;
        }
      }
    }
  };

  const studentList = useFetch("http://localhost:3001/file/" + getStudentList(props.class), {
    formatter: (response) => response.text()
  });

  const renderStudents = () => {
    return studentList.isLoading
      ? <tr><td><Loading/></td></tr>
      : (
        studentList.data.split("\n").map(
          (line, index) => {
            const fieldArray = line.split(",");
            return(
              <tr key={index} className="border-b-2 border-black border-opacity-20">
                <td className="px-2 py-2 text-center grid justify-items-center">
                  {fieldArray[0]}
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
        )
      );
  };

  const [modalIsOpen, setModal] = useState(false);

  const toggleModal = () => {setModal(!modalIsOpen);};

  const selectStudentList = (evt) => {
    const studentList = evt.currentTarget.id;

    fetch(`http://localhost:3001/update/class/${props.class}/students/${studentList}`, {
      method: "PATCH",
      body: studentList,
      headers: {
        "Content-Type": "text"
      },
    }).then(() => {
      window.location.reload();
    });
  };

  const renderTable = () => {
    return (getStudentList(props.class) === null)
      ? (
        <>
          <div className="flex justify-center w-full pt-10">
            <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red" onClick={toggleModal}>
              Add students
            </div>
          </div>
          {modalIsOpen && <NewStudentPopup closePopup={toggleModal} selectFunc={selectStudentList}/>}
        </>
      )
      : (
        <table className="w-full table-auto">
          <thead>
            <tr className="text-rmit-blue">
              <th className="sticky top-0 py-2 bg-blue-200">Student ID</th>
              <th className="sticky top-0 py-2 bg-blue-200">Name</th>
              <th className="sticky top-0 py-2 bg-blue-200">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {renderStudents()}
          </tbody>
        </table>
      );
  };

  return classList.isLoading
    ? <Loading />
    : (
      renderTable()
    );
};

Students.propTypes = {
  class : PropTypes.string.isRequired,
};


export default Students;
