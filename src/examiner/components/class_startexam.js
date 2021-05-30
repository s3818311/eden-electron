import React from "react";
import PropTypes from "prop-types";
import SelectParticipant from "../components/select_participants";
import { useForm } from "react-hook-form";
import useFetch from "react-fetch-hook";

const StartExam = (props) => {
  const { register, watch, handleSubmit } = useForm();

  const studentsInClass = useFetch(
    "http://localhost:3001/studentInClass/classId/" + props.classId
  );

  const timeLimit = watch("hasTimeLimit");
  // const autoGrading = watch("autoGrading", false);
  const showParticipant = watch("participant", "all");

  const startExam = async (formData) => {
    let attending = [];
    const studentIds = studentsInClass.data.map((student) => student.id);

    if (formData.participant === "custom") {
      if (!formData.students) {
        alert("Please select students for the exam");
        return;
      }
      attending = formData.students.map((idString) => Number(idString));
    } else if (formData.participant === "all") {
      attending = studentIds;
    }

    const examObj = JSON.stringify({
      title: formData.title,
      status: "LAUNCHED",
      instruction: formData.instruction,
      autoGrading: formData.autoGrading,
      hasTimeLimit: !!formData.hasTimeLimit,
      timeLimit: formData.hasTimeLimit ? formData.timeLimit : null,
      shuffleAnswers: formData.shuffleAnswers,
      shuffleQuestions: formData.shuffleQuestions,
      classModelId: props.classId,
    });

    fetch("http://localhost:3001/exams", {
      method: "POST",
      body: examObj,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const examId = res;
        fetch("http://localhost:3001/studentTakesExam", {
          method: "POST",
          body: JSON.stringify({
            examModelId: res,
            studentIds: studentIds,
            attendingIds: attending,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }).then(() => {
          window.location.href = `http://localhost:3000/test?examId=${examId}&classId=${props.classId}`;
        });
      });

    return false;
  };

  return (
    <form
      className="flex justify-center pt-10"
      onSubmit={handleSubmit(startExam)}
    >
      <div className="w-1/2 grid auto-rows-auto gap-y-5">
        <div className="flex flex-row items-center">
          <div className="pr-3 text-lg text-rmit-blue">Exam title</div>
          <input
            type="text"
            className="flex-grow px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Title"
            {...register("title", {
              required: true,
            })}
          />
        </div>

        <div className="flex flex-col">
          <div className="w-full pb-2 text-lg text-rmit-blue">Instruction</div>
          <textarea
            cols="4"
            className="w-full h-auto px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            {...register("instruction", {
              required: true,
            })}
          />
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

        {showParticipant === "custom" && (
          <SelectParticipant
            studentFetch={studentsInClass}
            register={register}
          />
        )}

        <div className="grid grid-rows-3 gap-y-1">
          <div className="text-lg text-rmit-blue">Exam settings</div>

          <div className="flex flex-row items-center pl-7">
            <input
              type="checkbox"
              className="w-4 h-5"
              {...register("shuffleQuestions")}
            />
            <div className="px-5">Shuffle questions</div>
          </div>

          <div className="flex flex-row items-center pl-7">
            <input
              type="checkbox"
              className="w-4 h-5"
              {...register("shuffleAnswers")}
            />
            <div className="px-5">Shuffle answers</div>
          </div>

          <div className="flex flex-row items-center pl-7">
            <input
              type="checkbox"
              className="w-4 h-5"
              disabled
              {...register("hasTimeLimit")}
            />
            <div className="inline-block px-5">Time limit</div>
            {timeLimit && (
              <>
                <input
                  type="number"
                  className="px-2 border rounded-sm w-14 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  {...register("timeLimit")}
                />
                <div className="inline-block px-2">minutes</div>
              </>
            )}
          </div>
        </div>

        <div className="grid auto-rows-auto gap-y-1">
          <div className="text-lg text-rmit-blue">Grading settings</div>

          <div className="flex flex-row items-center pl-7">
            <input
              type="checkbox"
              className="w-4 h-5"
              defaultChecked={true}
              {...register("autoGrading")}
            />
            <div className="inline-block px-5">Auto grading</div>
          </div>
        </div>

        <div className="grid auto-rows-auto gap-y-1">
          <div className="text-lg text-rmit-blue">Display grade</div>
          <div className="flex flex-row items-center pl-7">
            <input
              type="checkbox"
              className="w-4 h-5"
              defaultChecked={true}
              {...register("autoShowGrade")}
            />
            <div className="inline-block px-5">Auto show grades</div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="px-5 py-1 text-white cursor-pointer rounded-md bg-rmit-red disabled:opacity-50"
            disabled={!!studentsInClass.isLoading}
            type="submit"
          >
            Start Exam
          </button>
        </div>
      </div>
    </form>
  );
};

StartExam.propTypes = {
  classId: PropTypes.string.isRequired,
};

export default StartExam;
