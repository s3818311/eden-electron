import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

// credit: https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react

const PopUp = (props) => {
  const { register, handleSubmit } = useForm();

  // const renderContent = () => {
  //   return props.msg !== ""
  //     ? (
  //       <div className="p-5">
  //         <div className="text-lg text-red-500">
  //         An error occurred: {props.msg}.<br />
  //         Class has not been added.
  //         </div>
  //         <div onClick={props.closePopup} className="px-5 py-1 mt-5 text-center text-white bg-red-500 cursor-pointer rounded-md">
  //           Close
  //         </div>
  //       </div>
  //     )
  //     : (
  //     );
  // };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25">
      <div className="relative w-1/3 h-auto m-auto overflow-auto bg-white rounded-lg top-1/4">
        <form onSubmit={handleSubmit(props.onSubmitFunc)}>
          <div className="p-5 grid gap-y-5 gap-x-7 grid-cols-2">
            <div className="text-lg text-center col-span-2">{props.text}</div>
            <div className="flex flex-row col-span-2">
              <div className="py-1 pr-3 text-center">Class name</div>
              <input
                type="text"
                className="flex-grow px-3 py-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                {...register("className")}
              ></input>
            </div>
            <div onClick={props.closePopup} className="inline-block px-5 py-1 text-center text-white bg-red-500 cursor-pointer rounded-md">
              Close
            </div>
            <button className="inline-block px-5 py-1 text-center text-white bg-green-500 cursor-pointer rounded-md" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

PopUp.propTypes = {
  text : PropTypes.string.isRequired,
  closePopup : PropTypes.func.isRequired,
  onSubmitFunc: PropTypes.func.isRequired
};

export default PopUp;
