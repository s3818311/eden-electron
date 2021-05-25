import React, { useState } from "react";
import UploadModal from "../components/uploadModal";
import { AiFillDelete } from "react-icons/ai";
import useFetch from "react-fetch-hook";
import Loading from "../components/loading";

const StudentManager = () => {
  const students = useFetch("http://localhost:3001/students");

  const deleteStudent = (evt) => {
    evt.preventDefault();
    fetch(`http://localhost:3001/students/${evt.target[0].value}`, {
      method: "DELETE",
    });
  };

  const fileUpload = (formData) => {
    const fileObject = formData.csvFile[0];
    const upload = new FormData();
    upload.append("file", fileObject);

    fetch("http://localhost:3001/students/upload", {
      method: "POST",
      body: upload,
    });
  };

  const [modalIsOpen, setModalState] = useState(false);

  const toggleModal = () => setModalState(!modalIsOpen);

  const renderStudents = () => {
    return students.data.map((studentObj, index) => (
      <tr key={index} className="border-b-2 border-black border-opacity-20">
        <td className="p-2 text-center grid justify-items-center">
          {studentObj.id}
        </td>
        <td className="p-2 text-center">{studentObj.name}</td>
        <td className="p-2 text-center">
          {new Date(studentObj.dob).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </td>
        <td className="p-2 text-center">
          <form onSubmit={deleteStudent}>
            <input type="hidden" name="studentId" value={studentObj.id}></input>
            <button className="text-red-500 cursor-pointer" type="submit">
              <AiFillDelete />
            </button>
          </form>
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex-grow h-screen px-10 pb-10">
      <div className="flex items-center border-b-2 h-1/6 border-rmit-red">
        <div className="text-3xl text-rmit-blue">Student manager</div>
      </div>
      <div className="flex flex-col items-center overflow-y-scroll h-5/6">
        <div className="flex justify-end w-full py-2 pr-2">
          <div
            onClick={toggleModal}
            className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red"
          >
            Add new file
          </div>
        </div>

        {students.isLoading ? (
          <Loading />
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr className="text-rmit-blue">
                <th className="sticky top-0 py-2 bg-blue-200">Student ID</th>
                <th className="sticky top-0 py-2 bg-blue-200">Name</th>
                <th className="sticky top-0 py-2 bg-blue-200">Date of Birth</th>
                <th className="sticky top-0 py-2 bg-blue-200"></th>
              </tr>
            </thead>
            <tbody>{renderStudents()}</tbody>
          </table>
        )}

        {modalIsOpen && (
          <UploadModal closePopup={toggleModal} addFunc={fileUpload} />
        )}
      </div>
    </div>
  );
};

export default StudentManager;
