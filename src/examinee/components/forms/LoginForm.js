import React from "react";

import { useForm } from "react-hook-form";

const LoginFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    await fetch("http://localhost:3000/login");
    // navigate here
    document.location = "/personal";
  };
  return (
    <form
      className="w-full h-1/3 grid gap-y-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="h-20 px-60 ">
        <div className="bg-rmit-blue w-full h-full flex items-center rounded-sm">
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
          id="studentID"
          className="border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary text-2xl"
          name="studentID"
          type="tel"
          placeholder="eg.3822042"
          {...register("studentID", {
            required: true,
            pattern: {
              value: /^[0-9]{7}$/,
            },
          })}
        />
        {errors.studentID && <span role="alert">Incorrect format</span>}
        <button
          type="submit"
          className="bg-rmit-red hover:bg-rmit-red-bold text-white font-bold mx-auto w-full py-2 px-4 rounded focus:border-none"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginFormComponent;
