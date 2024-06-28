# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

// import React, { useEffect, useState } from 'react'
// import { Youtube } from '../Utils/Constants' 
// import VideoCard from './VideoCard'



// const VideoContainer = () => {
//     const [data,setData]=useState([])


//     useEffect(()=>{
       

//         fetchData()
//     },[])

//     const fetchData= async ()=>{
//         const data= await fetch(Youtube)
//         const json=await data.json()
//         console.log(json)
//         setData(json.items)
//     }
// // const {items}=data
// // console.log(items)


//   return (
//     <div  className='flex flex-wrap' >
{data.map((dat)=>{return
<Link to {"/watch?"+id}>
<VideoCard 
//       info={dat}/> </Link>})}
//      </div>
//   )
// }

// export default VideoContainer
/* opacity 0.2s ease, visibility 0.2s ease;   */
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";



const SignUp = () => {

  const [pronoun,setPronoun]=useState(false)
  const navigate=useNavigate()

  const login=()=>{
    navigate("/Login")


  }
  const pronounChange=(e)=>{
    if(e.target.value==="custom"){
      setPronoun(true)
    } else{
      setPronoun(false)
    }

   
  }

  return (
    <div>
      <div className="main-div">
        <h1 id="logo">facebook</h1>

        <div className="signup-form">
          <div className="signup-heading">
            <h2>Create a new account</h2>
            <p> its quick and easy</p>
          </div>
          <form>
            <div className="input-fields">
              <div className="half-width">
                <input type="text " placeholder="first name"></input>
              </div>
              <div className="half-width">
                <input type="text " placeholder="Surname"></input>
              </div>
              <div className="full-width">
                <input
                  type="text "
                  placeholder="Mobile number or email address"
                ></input>
              </div>
              <div className="full-width">
                <input type="text " placeholder="New password"></input>
              </div>

              <label>Date of birth</label>
              <div className="date">
                <div className="quart">
                  <select>
                    <option>1</option>
                  </select>
                </div>
                <div className="quart">
                  {" "}
                  <select>
                    <option>2</option>
                  </select>
                </div>
                <div className="quart">
                  {" "}
                  <select>
                    <option>3</option>
                  </select>
                </div>
              </div>
              <label >Gender</label>
              <div className="date">
                <div className="quart">
                  <div className="radio">
                    <label for="female" className="radio-label">female</label>
                    <input name="gender" value="female" id="female" className="radio-input" type="radio" onChange={pronounChange}></input>
                  </div>
                </div>
                <div className="quart">
                  <div className="radio">
                    <label  for="male" className="radio-label">male</label>
                    <input id="male"  name="gender" value="male" className="radio-input" type="radio" onChange={pronounChange}></input>
                  </div>
                </div>
                <div className="quart">
                  <div className="radio">
                    <label  for="custom"  className="radio-label">custom</label>
                    <input className="radio-input"  name="gender" value="custom" id="custom" type="radio" onChange={pronounChange}></input>
                  </div>
                </div>
              </div>
           { pronoun&& <> <div className="pronoun">
                <select className="pronoun-select" defaulValue="" required>
                  <option value="" disabled hidden> select your pronoun</option>
                  <option vaue="she">she,wish here her birthday</option>
                  <option vaue="he">she,wish here her birthday</option>
                  <option vaue="they">she,wish here her birthday</option>
                  </select>
              </div>
              <label className="pronoun-visible">your pronoun is visible here</label>
              <div className="full-width">
                <input
                  type="text "
                  placeholder="Mobile number or email address"
                ></input>
              </div></> }
              
            </div>
             <div> <small> people who use our service may have uploaded your contact information to Facebook.Learn more </small>
          <small> By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
 </small></div> 
 <div className="button-container"><button>Sign Up</button></div>
  
          </form>
          <div  className="account">
            <h1  onClick={login}>Already have an account?</h1>
          </div>
       
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;

@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
h2 {
  font-size: x-large;
  font-weight: 500;
}
h2 {
  /* word-spacing: 1px; */
  letter-spacing: 1px;
  padding-bottom:5px;
  padding-left:25px
}
.main-div {
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#logo {
  color: #0866ff;
  font-size: 56px;
  padding: 12px 0px;

  font-weight: 500;
  font-style: normal;
}

.signup-form {
  background-color: #ffffff;
  width: 480px;
  border-radius:5px
}
.signup-heading {
  text-align: center;
  padding:10px;
  border-bottom:1px;
  border-bottom:1px solid #ccc
}
.input-fields{
  padding:15px;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap
}
input,select{
  padding:8px;
  border:1px solid #ccc;
  border-radius:5px;
  width:100%;
 margin-bottom:10px
  


}
.half-width{
  display:flex;
  width:48%
}

.full-width{
  display:flex;
  width:100%

}
label{
  font-size:12px;
  color:#356871;
  padding-bottom:10px
}

.date{
  display:flex;
  width:100%;
  justify-content:space-between
}
.quart{

  width:31%;
  display:flex
}
.radio{
  padding:8px;
  border:1px solid #ccc;
  border-radius:5px;
  width:100%;
 margin-bottom:10px;
 display:flex;
 align-items:center;
 justify-content:space-between;
 
  


}
.radio-input{
  margin:0;
  width:auto;

}
.radio-label{
  padding-bottom:0px;
  font-size:15px
}
small{
  
  display: block;
  padding: 7px;
  font-size: 12px;
  color: #6c757d;
  word-wrap: break-word;
  text-align: justify;
}
.button-container,.account{

  display:flex;
  align-items:center;
  justify-content:center;
 
  width:100%;
  /* padding:10px; */
  padding-bottom:20px;
}
button{
  background-color:   #1bbe1b;
  width:200px;
  height:40px;
  border-radius:10px;
  color:white;
  font-size:18px;
  font-weight:500
}
.pronoun{

  width:100%;
  color: #6c757d;
}

.pronoun-visible{

  padding-left:2px
}
.pronoun-select{
  width:100%;
  padding-left:4px;
}

.button-container{
 padding-top:10px;
}

/* Login.css */
.pronoun-select {
  color: gray;
}

.pronoun-select option {
  color: black;
}

.pronoun-select option:not(:first-child) {
  color: blue;
}

.pronoun-select:invalid {
  color: gray;
}

