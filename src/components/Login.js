import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidateData from "../utils/validate";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { DEFAULT_DP } from "../utils/constant";
const Login = () => {
  const dispatch = useDispatch;
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const handleButtonClick = () => {
    //Validate FormData
    const isverify = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(isverify);

    if (isverify != null) {
      return;
    }
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: DEFAULT_DP,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: photoURL })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message + error.code);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(isverify);

          // ..
        });

      // update user profile
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
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
            className="m-auto p-2 rounded-md w-[334px] h-12 bg-gray-800 text-white"
            ref={email}
          ></input>
          {!isSignInForm && (
            <input
              ref={fullname}
              type="text"
              placeholder="Full Name"
              className="m-auto my-6 p-2 rounded-md w-[334px] h-12 bg-gray-800 text-white"
            ></input>
          )}
          <br></br>
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="m-auto my-6 bg-gray-800 p-2 rounded-md w-[334px] h-12 text-white"
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
