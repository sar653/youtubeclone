import React, { useRef, useState } from "react";

const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(false)

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  
  // console.log("auth", auth.currentUser);

 
  return (
    <div>
      {/* <Header /> */}
      <div className="absolute">
        <img
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
          alt="background-im"
        ></img>
        login
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 ">
          Login
        </h1>

        <input
          type="text"
          ref={email}
          placeholder="email address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {/* {!isSignInForm ? <p className="text-red-500">{errorMessage}</p> : null}
        {isSignInForm ? <p className="text-red-500">{errorMessage}</p> : null}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="full name"
            ref={username}
            className="p-4 my-4 w-full bg-gray-700"
          />
        )} */}
        <input
          type="password"
          placeholder="password"
          ref={password}
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        {/* {!isSignInForm ? <p className="text-red-500">{errorMessage}</p> : null} */}
        <button
          // onClick={handleButtonClick}
          className="p-2 my-6 bg-red-700 w-full "
        >
          {isSignInForm ? "signin" : "signup"}
        </button>
        <p className="py-4 cursor-pointer" >
          {isSignInForm
            ? "new to netflix sign up "
            : " already registerd signin now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
