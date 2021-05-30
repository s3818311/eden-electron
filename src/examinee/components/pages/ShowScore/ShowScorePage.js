import React, { useEffect } from "react";
import "./ShowScore.css";
import PropTypes from "prop-types";

const ShowScorePage = (props) => {
  const score = props.score;

  useEffect(() => {
    const ratings = document.querySelectorAll(".rating");
    ratings.forEach((rating) => {
      const ratingContent = score;
      const ratingScore = parseInt(score, 10);

      const scoreClass =
        ratingScore < 40 ? "bad" : ratingScore < 60 ? "average" : "good";

      rating.classList.add(scoreClass);

      const ratingColor = window.getComputedStyle(rating).backgroundColor;

      const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

      rating.setAttribute("style", gradient);

      rating.innerHTML = (
        <span>
          ${score} ${ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""}
        </span>
      );
    });

    return () => {};
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="mx-auto mt-20 text-6xl">Score</div>
      <div className="rating">{props.score}</div>
      <div>{props.score} Out of 100</div>
    </div>
  );
};

ShowScorePage.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ShowScorePage;
