import React from "react";
import PropTypes from "prop-types";
import useFetch from "react-fetch-hook";

const Options = (props) => {
  return props.optionsArr.map((option, index) => (
    <div key={index}>
      <input
        type="radio"
        value={option.id}
        {...props.register(`question${props.qId}[]`)}
      />
      <label className="ml-10">{option.title}</label>
    </div>
  ));
};

Options.propTypes = {
  optionsArr: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired,
  qId: PropTypes.number.isRequired,
};

const MultipleChoice = (props) => {
  const options = useFetch(
    "http://192.168.1.21:3001/answers/questionId/" + props.questionId
  );

  return (
    <div className="px-10 pb-10">
      <div className="flex flex-wrap content-start p-6 mx-auto bg-white border-2 border-black rounded-lg">
        <div className="flex items-center w-full pb-10 border-b-2 border-black h-1/6">
          <div className="w-1/3 text-3xl text-left text-rmit-blue">
            {props.title}
          </div>
        </div>

        <div className="w-full pt-10 text-xl">
          {!options.isLoading && (
            <Options
              optionsArr={options.data}
              register={props.register}
              qId={props.questionId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

MultipleChoice.propTypes = {
  title: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  register: PropTypes.func.isRequired,
};

export default MultipleChoice;
