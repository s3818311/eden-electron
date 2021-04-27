import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const LoginFormComponent = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="w-full h-1/3 grid gap-y-8"
      onSubmit={handleSubmit(props.loginFunc)}
    >
      <div className="h-20 px-60 ">
        <div className="bg-rmit-blue w-full h-full flex items-center">
          <div className=" text-center mx-auto text-2xl text-white">
            Title of Examination
          </div>
        </div>
      </div>
      <div className="w-full px-96">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 m-auto"
          htmlFor="username"
        >
          Student ID
        </label>
        <input
          id="username"
          className="border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary text-2xl"
          name="username"
          type="tel"
          pattern="[0-9]{7}"
          placeholder="eg.3822042"
          required
          {...register("className")}
        />
      </div>

      <div className=" px-96 w-full">
        <Link to="/personal">
          <button
            type="submit"
            className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold mx-auto w-full py-2 px-4 rounded focus:border-none"
          >
            Sign in
          </button>
        </Link>
      </div>
    </form>
  );
};

LoginFormComponent.propTypes = {
  loginFunc: PropTypes.func.isRequired,
};

export default LoginFormComponent;
