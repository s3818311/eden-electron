import React from "react";
import useFetch from "react-fetch-hook";
import SelectParticipant from "../components/select_participants";
import { useForm } from "react-hook-form";

const StartExam = () => {
  const { register, watch } = useForm();

  const timeLimit = watch("hasTimeLimit");
  const autoGrading = watch("autoGrading", false);
  const showParticipant = watch("participant", "all");

  const renderExamList = () => {
    let {isLoading, data} = useFetch("http://localhost:3001/file/examList.json");
    return isLoading
      ? null
      : data.map((item, index) => {
        return(
          <option value={item.fileName} key={index}>{item.title}</option>
        );
      });
  };


  return (
    <>
      <form className="flex justify-center pt-10">
        <div className="w-1/2 grid auto-rows-auto gap-y-5">
          <div className="flex flex-row items-center">
            <div className="w-1/2 text-lg text-rmit-blue">
                Select Exam
            </div>
            <select
              className="inline-block w-1/2 px-2 py-1 border transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              {...register("exam")}
            >
              {renderExamList()}
            </select>
          </div>

          <div className="flex flex-row items-center">
            <div className="w-1/2 text-lg text-rmit-blue">
                Select Participants
            </div>
            <select
              className="inline-block w-1/2 px-2 py-1 border transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              {...register("participant")}
            >
              <option value="all">All students</option>
              <option value="custom">Select students</option>
            </select>
          </div>

          { (showParticipant === "custom") && <SelectParticipant /> }

          <div className="grid grid-rows-3 gap-y-1">
            <div className="text-lg text-rmit-blue">
              Exam settings
            </div>

            <div className="flex flex-row items-center pl-7">
              <input type="checkbox" className="w-4 h-5" {...register("shuffleQuestions")} />
              <div className="px-5">
                Shuffle questions
              </div>
            </div>

            <div className="flex flex-row items-center pl-7">
              <input type="checkbox" className="w-4 h-5" {...register("shuffleAnswers")} />
              <div className="px-5">
                Shuffle answers
              </div>
            </div>

            <div className="flex flex-row items-center pl-7">
              <input type="checkbox" className="w-4 h-5" {...register("hasTimeLimit")} />
              <div className="inline-block px-5">
                Time limit
              </div>
              { timeLimit && (
                <>
                  <input
                    type="number"
                    className="px-2 border rounded-sm w-14 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    {...register("timeLimit")}
                  />
                  <div className="inline-block px-2">
                    minutes
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="grid auto-rows-auto gap-y-1">
            <div className="text-lg text-rmit-blue">
              Grading settings
            </div>

            <div className="flex flex-row items-center pl-7">
              <input type="checkbox" className="w-4 h-5" {...register("autoGrading")} />
              <div className="inline-block px-5">
                Auto grading
              </div>
            </div>
          </div>

          { autoGrading && (
            <div className="grid auto-rows-auto gap-y-1">
              <div className="text-lg text-rmit-blue">
              Display grade
              </div>
              <div className="flex flex-row items-center pl-7">
                <input type="checkbox" className="w-4 h-5" {...register("autoShowGrade")} />
                <div className="inline-block px-5">
                Auto show grades
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <button
              className="px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red"
              type="submit"
            >
              Start Exam
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default StartExam;
