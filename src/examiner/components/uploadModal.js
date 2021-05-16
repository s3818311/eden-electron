import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const UploadModal = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25">
      <div className="relative w-1/3 h-auto m-auto overflow-auto bg-white rounded-lg top-1/4">
        <form onSubmit={handleSubmit(props.addFunc)}>
          <div className="p-5 grid gap-y-5 gap-x-7 grid-cols-2">
            <div className="col-span-2">
              <input type="file" {...register("csvFile", { required: true })}></input>
            </div>
            <div onClick={props.closePopup} className="h-8 px-5 py-1 text-center text-white bg-red-500 cursor-pointer rounded-md">
              Close
            </div>
            <button className="px-5 py-1 text-center text-white bg-green-500 cursor-pointer rounded-md" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

UploadModal.propTypes = {
  closePopup : PropTypes.func.isRequired,
  addFunc: PropTypes.func
};

export default UploadModal;
