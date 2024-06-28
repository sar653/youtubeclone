import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import useForm from "./useForm";
import validate from "./FormValidate";



const SignUp = () => {
const {handleChange,errors,values,handleSubmit}=useForm(validate)
console.log("rro",errors)
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
            <h2 tabIndex="0">Create a new account</h2>
            <p> its quick and easy</p>
          </div>
          <form autoComplete="on"  onSubmit={handleSubmit}>
            <div className="input-fields">
              <div className="half-width">
                <input type="text " placeholder="first name" name="firstname"  value={values.firstname} onChange={handleChange}></input>
                <input type="hidden" name="ip"></input>
              </div>
              <div className="half-width">
                <input type="text " placeholder="Surname"  name="surname" value={values.surname} onChange={handleChange}></input>
              </div>
              <div className="full-width">
                <input
                  type="text "
                  placeholder="Mobile number or email address"
                  name="inputvalue"
                  value={values.inputvalue}
                  onChange={handleChange}
                ></input>
                 {errors.surname && (
            <div className="error">
              
              <p>{errors.surname}</p>
            </div>
          )}
              </div>  
             
              
              <div className="full-width">
                <input type="text " placeholder="New password"  name="password" value={values.password} onChange={handleChange}></input>
              </div>

              <label>Date of birth</label>
              <div className="date">
                <div className="quart">
                  <select>
                    <option>1</option>
                  </select>
                </div>
                <div className="quart">
                 
                  <select>
                    <option>2</option>
                  </select>
                </div>
                <div className="quart">
                  
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
                <select className="pronoun-select" >
                  <option value=""  disabled > select your pronoun</option>
                  <option value="she">she,wish here her birthday</option>
                  <option value="he">she,wish here her birthday</option>
                  <option value="they">she,wish here her birthday</option>
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
 <div className="button-container"><button type="submit">Sign Up</button></div>
  
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
