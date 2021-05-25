import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import PropTypes from "prop-types";
import Loading from "./loading";

const Result = (props) => {
  const [hasData, setHasData] = useState(false);

  const exams = useFetch(
    "http://localhost:3001/exams/classId/" + props.classId
  );

  const students = useFetch(
    "http://localhost:3001/studentInClass/" + props.classId
  );

  const studentTakesExam = useFetch("http://localhost:3001/studentTakesExam");

  const getMark = (sid, eid) => {
    const row = studentTakesExam.data.find(
      ({ examModelId, studentModelId }) =>
        examModelId === eid && studentModelId === sid
    );

    return row.mark;
  };

  const renderExamMarks = (studentId) => {
    return exams.data.map((exam, index) => {
      const mark = getMark(studentId, exam.id);
      return (
        <td key={index} className="px-2 py-1 text-center">
          {mark === null ? "No attendance" : mark}
        </td>
      );
    });
  };

  const renderResults = () => {
    return students.data.map((student, index) => (
      <tr key={index} className="border-b-2 border-black border-opacity-20">
        <td className="px-2 py-1 text-center grid justify-items-center">
          {student.id}
        </td>
        <td className="px-2 py-1 text-center">{student.name}</td>
        {renderExamMarks(student.id)}
      </tr>
    ));
  };

  const renderExams = () => {
    if (exams.data.length != 0) setHasData(true);
    return exams.data.map((exam, index) => (
      <th key={index} className="sticky top-0 py-2 bg-blue-200">
        {exam.title}
      </th>
    ));
  };

  return (
    <>
      {/* <div className="flex justify-end w-full py-2 pr-2">
        <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red">
          Download result
        </div>
      </div> */}

      {exams.isLoading || students.isLoading || studentTakesExam.isLoading ? (
        <Loading />
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr className="text-rmit-blue">
              <th className="sticky top-0 py-2 bg-blue-200">ID</th>
              <th className="sticky top-0 py-2 bg-blue-200">Name</th>
              {renderExams()}
            </tr>
          </thead>
          <tbody>
            {hasData ? (
              renderResults()
            ) : (
              <tr>
                <td colSpan="2" className="text-center">
                  No results recorded
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
};

Result.propTypes = {
  classId: PropTypes.string.isRequired,
};

export default Result;
