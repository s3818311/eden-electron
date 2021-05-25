import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import SelectStudent from "./select_student_popup";
import Loading from "../components/loading";
import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";

const Students = (props) => {
  const studentList = useFetch(
    "http://localhost:3001/studentInClass/" + props.classId
  );
  const { register, handleSubmit } = useForm();

  const deleteStudent = (formData) => {
    fetch("http://localhost:3001/studentInClass", {
      method: "DELETE",
      body: JSON.stringify({
        studentModelId: formData.studentId,
        classModelId: props.classId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const renderStudents = () => {
    return studentList.data.map((studentObj, index) => (
      <tr key={index} className="border-b-2 border-black border-opacity-20">
        <td className="px-2 py-2 text-center grid justify-items-center">
          {studentObj.id}
        </td>
        <td className="px-2 py-2 text-center">{studentObj.name}</td>
        <td className="px-2 py-2 text-center">
          {new Date(studentObj.dob).toLocaleDateString()}
        </td>
        <td className="px-2 py-2 text-center">
          <form onSubmit={handleSubmit(deleteStudent)}>
            <input
              type="hidden"
              {...register("studentId")}
              value={studentObj.id}
            ></input>
            <button className="text-red-500 cursor-pointer" type="submit">
              <AiFillDelete />
            </button>
          </form>
        </td>
      </tr>
    ));
  };

  const [modalIsOpen, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modalIsOpen);
  };

  const addStudentToClass = (evt) => {
    const studentId = evt.currentTarget.id;

    fetch("http://localhost:3001/studentInClass", {
      method: "POST",
      body: JSON.stringify({
        studentModelId: studentId,
        classModelId: props.classId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <div className="flex justify-end w-full py-2 pr-2">
        <div
          onClick={toggleModal}
          className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red"
        >
          Add students
        </div>
      </div>

      {studentList.isLoading ? (
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
        <SelectStudent
          closePopup={toggleModal}
          selectFunc={addStudentToClass}
          classId={props.classId}
        />
      )}
    </>
  );
};

Students.propTypes = {
  classId: PropTypes.string.isRequired,
};

export default Students;
