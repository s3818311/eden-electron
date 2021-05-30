import React, { useEffect } from "react";
import "./ShowScore.css";
import useFetch from "react-fetch-hook";

const ShowScorePage = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  const { isLoading, data } = useFetch(
    `http://192.168.1.21:3001/studentTakesExam/${urlSearchParams.get(
      "examId"
    )}/${urlSearchParams.get("studentId")}`
  );

  useEffect(() => {
    if (!isLoading) {
      const ratings = document.querySelectorAll(".rating");
      ratings.forEach((rating) => {
        const ratingScore = data.mark * 100;

        const scoreClass =
          ratingScore < 40 ? "bad" : ratingScore < 60 ? "average" : "good";

        rating.classList.add(scoreClass);

        const ratingColor = window.getComputedStyle(rating).backgroundColor;

        const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

        rating.setAttribute("style", gradient);

        rating.innerHTML = `<span>${data.mark * 100}%</span>`;
      });
    }
    return () => {};
  });

  return isLoading ? (
    ""
  ) : (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="pb-10 mx-auto mt-20 text-6xl">Score</div>
      <div className="rating">{data.mark}</div>
      <div className="pt-10">
        {urlSearchParams.get("c")} correct out of {urlSearchParams.get("t")}{" "}
        questions
      </div>
    </div>
  );
};

export default ShowScorePage;
