import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";

const ClassObj = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className="flex flex-col h-40 my-5 border border-gray-200 rounded-lg shadow-xl mx-7 w-52 group">
        <form onSubmit={handleSubmit(props.deleteFunc)} className="flex justify-end pt-2 pr-2">
          <input type="hidden" {...register("class")} value={props.name}></input>
          <button
            className="text-transparent cursor-pointer group-hover:text-red-500 transition-all"
            type="submit"
          ><AiFillDelete /></button>
        </form>
        <NavLink
          exact
          to={ "/exam/" + props.name + "/list" }
          className="block w-full mt-auto text-lg text-center rounded-b-lg group-hover:bg-gray-400 transition-all"
        >
          {props.name}
        </NavLink>
      </div>
    </>
  );
};

ClassObj.propTypes = {
  name: PropTypes.string.isRequired,
  deleteFunc: PropTypes.func.isRequired,
};

export default ClassObj;