/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import PropTypes from "prop-types";
import Loading from "./loading";

const Exams = (props) => {
  if (props.exams.data.length != 0) {
    props.setHasData(true);
    return props.exams.data.map((exam, index) => (
      <th key={index} className="sticky top-0 py-2 bg-blue-200">
        {exam.title}
      </th>
    ));
  }
  return null;
};

const ExamMarks = (props) => {
  return props.exams.data.map((exam, index) => {
    const mark = props.getMark(props.studentId, exam.id);
    return (
      <td key={index} className="px-2 py-1 text-center">
        {mark === null ? "DNA" : mark}
      </td>
    );
  });
};

const Results = (props) => {
  return props.students.data.map((student, index) => (
    <tr key={index} className="border-b-2 border-black border-opacity-20">
      <td className="px-2 py-1 text-center grid justify-items-center">
        {student.id}
      </td>
      <td className="px-2 py-1 text-center">{student.name}</td>
      <ExamMarks
        exams={props.exams}
        getMark={props.getMark}
        studentId={student.id}
      />
    </tr>
  ));
};

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

    if (row === undefined) return null;

    return row.mark;
  };

  return (
    <>
      {/* <div className="flex justify-end w-full py-2 pr-2">
        <div className="inline-block px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red">
          Download result
        </div>
      </div> */}

      {exams.isLoading ||
        students.isLoading ||
        (studentTakesExam.isLoading ? (
          <Loading />
        ) : (
          <>
            <table className="w-full table-auto">
              <thead>
                <tr className="text-rmit-blue">
                  <th className="sticky top-0 py-2 bg-blue-200">ID</th>
                  <th className="sticky top-0 py-2 bg-blue-200">Name</th>
                  <Exams exams={exams} setHasData={setHasData} />
                </tr>
              </thead>
              <tbody>
                {hasData ? (
                  <Results
                    students={students}
                    exams={exams}
                    getMark={getMark}
                  />
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center">
                      No results recorded
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="pt-5 text-xs text-gray-400">
              * DNA: Did not attend
            </div>
          </>
        ))}
    </>
  );
};

Result.propTypes = {
  classId: PropTypes.string.isRequired,
};

export default Result;
