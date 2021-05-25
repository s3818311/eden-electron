/* eslint-disable no-prototype-builtins */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginFormComponent = () => {
  const [credentials, setCredentials] = useState({
    username: "",
  });
  const [errors, setErrors] = useState({});

  // eslint-disable-next-line no-unused-vars
  const handleLoginForm = (evt) => {
    evt.preventDefault();

    // eslint-disable-next-line no-unused-vars
    setErrors((errors) => ({ ...validateCredentials(credentials) }));
  };

  const validateCredentials = (credentials) => {
    let errors = {};

    if (credentials.username === "") {
      errors = Object.assign(errors, {
        username: "This field is required",
      });
    }
    return errors;
  };

  const handleInputChange = (evt) => {
    evt.persist();
    setCredentials((credentials) => ({
      ...credentials,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <form
      className="w-full h-1/3 grid gap-y-8"
      onSubmit={handleLoginForm.bind(this)}
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
          className={
            "border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary text-2xl" +
            (errors.hasOwnProperty("username") ? "border-red-500" : "")
          }
          name="username"
          type="tel"
          pattern="[0-9]{7}"
          placeholder="eg.3822042"
          value={credentials.username}
          onChange={handleInputChange.bind(this)}
          required
        />
        {errors.hasOwnProperty("username") && (
          <div className="text-red-500 text-xs italic">{errors.username}</div>
        )}
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

export default LoginFormComponent;
