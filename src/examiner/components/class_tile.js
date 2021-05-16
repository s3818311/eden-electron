import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";

const ClassTile = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className="flex flex-col h-40 my-5 border border-gray-200 rounded-lg shadow-xl mx-7 w-52 group">
        <form onSubmit={handleSubmit(props.deleteFunc)} className="flex justify-end h-6 pt-2 pr-2">
          <input type="hidden" {...register("classId")} value={props.classId}></input>
          <button
            className="text-transparent cursor-pointer group-hover:text-red-500 transition-all"
            type="submit"
          ><AiFillDelete /></button>
        </form>
        {/* <img className="object-fill h-auto" src="https://code-rmit.edu.vn/wp-content/uploads/2018/12/code-sting_00044.png" alt="RMIT-logo" /> */}
        <NavLink
          exact
          to={ "/class/" + props.classId + "/exam" }
          className="block w-full mt-auto text-lg text-center rounded-b-lg h-7 group-hover:bg-gray-400 transition-all"
        >
          {props.name}
        </NavLink>
      </div>
    </>
  );
};

ClassTile.propTypes = {
  name: PropTypes.string.isRequired,
  classId: PropTypes.number.isRequired,
  deleteFunc: PropTypes.func.isRequired,
};

export default ClassTile;