import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-image"
        />
      </div>
      <form className="absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        { !isSignInForm && <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Name"
        />}
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now!"
            : "Already a User, Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
