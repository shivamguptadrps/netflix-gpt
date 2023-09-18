import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidateData from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    console.log(isSignInForm);
    setIsSignInForm(!isSignInForm);
  };
  const [errorMessage ,setErrorMessage ]= useState("")
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  console.log(email);
  console.log(password);
  const handleButtonClick = () => {
    //Validate FormData
    console.log(email.current.value);
    console.log(password.current.value);
    const isverify = checkValidateData(
      email.current.value,
      password.current.value
    );
    if (isverify != null) {
      setErrorMessage(isverify)
    } 
  };
  return (
    <div>
      <Header />

      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
        logo
      ></img>
      <div className="h-[660px] w-[450px]   mx-auto bg-black right-0 left-0 my-32 absolute bg-opacity-80">
        <h1 className="text-white text-3xl font-medium mx-16 my-14">
          {isSignInForm ? "Sign ln" : "SignUp"}
        </h1>
        <form className="px-16 py-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Email or phone number"
            className="m-auto p-2 rounded-md w-[334px] h-12 bg-gray-800"
            ref={email}
          ></input>
          {!isSignInForm && (
            <input
              ref={fullname}
              type="text"
              placeholder="Full Name"
              className="m-auto my-6 p-2 rounded-md w-[334px] h-12 bg-gray-800"
            ></input>
          )}
          <br></br>
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="m-auto my-6 bg-gray-800 p-2 rounded-md w-[334px] h-12"
          ></input>
          <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
          <button
            type="submit"
            className=" p-2 w-[334px] rounded-md my-8 h-12 bg-red-600"
            onClick={() => {
              handleButtonClick();
            }}
          >
            {isSignInForm ? "SignIN" : "Signup"}
          </button>
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already have account? SingIn"}
          </p>
          \
        </form>
      </div>
    </div>
  );
};

export default Login;
