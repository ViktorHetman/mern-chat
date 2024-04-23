import React from "react";
import { Link } from "react-router-dom";

import GenderCheckbox from "../components/gender-checkbox";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
  const [inputValues, setInputValues] = React.useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleGenderChange = (gender) => {
    setInputValues({ ...inputValues, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputValues);
  };

  return (
    <section className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
        bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up
          <span className="text-blue-500"> MERN Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name:</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputValues.fullName}
              onChange={(e) =>
                setInputValues({ ...inputValues, fullName: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username:</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputValues.userName}
              onChange={(e) =>
                setInputValues({ ...inputValues, userName: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password:</span>
            </label>
            <input
              type="password"
              placeholder="******"
              className="w-full input input-bordered h-10"
              value={inputValues.password}
              onChange={(e) =>
                setInputValues({ ...inputValues, password: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm password:</span>
            </label>
            <input
              type="password"
              placeholder="******"
              className="w-full input input-bordered h-10"
              value={inputValues.confirmPassword}
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  confirmPassword: e.target.value,
                })
              }
            ></input>
          </div>
          <GenderCheckbox
            onCheckboxChange={handleGenderChange}
            selectedGender={inputValues.gender}
          />
          <Link
            to="/sign-in"
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block transition duration-300"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner" />
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
