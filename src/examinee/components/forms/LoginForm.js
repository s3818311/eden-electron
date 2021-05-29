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
    document.location = "/instruction";
  };
  return (
    <form
      className="flex flex-col items-center justify-center w-full h-screen gap-y-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full h-20 px-60">
        <div className="flex items-center w-full h-full rounded-sm bg-rmit-blue">
          <div className="mx-auto text-2xl text-center text-white">
            Title of Examination
          </div>
        </div>
      </div>
      <div className="w-full px-96">
        <label
          className="block m-auto mb-2 text-sm font-bold text-gray-700"
          htmlFor="username"
        >
          Student ID
        </label>
        <input
          id="studentID"
          className="w-full px-3 py-2 mb-2 text-2xl text-gray-700 border rounded focus:bg-primary"
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
          className="w-full px-4 py-2 mx-auto font-bold text-white rounded bg-rmit-red hover:bg-rmit-red-bold focus:border-none"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginFormComponent;
