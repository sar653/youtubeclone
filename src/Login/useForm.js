import React,{useState} from "react"

const useForm=(validate)=>{

  const [values,setValues]=useState({
    firstname:"",
    surname:"",
    inputvalue:"",
    password:"",
    Dob:"",
    gender:"",

  })
  

  const[errors,setErrors]=useState({})

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setValues((prevValues)=>({
            ...prevValues,[name]:value,
        }))

    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        setErrors(validate(values))
        
    }


    console.log("values in useForm:", values); // Add this line inside the useForm hook

return{values,handleChange,errors,handleSubmit}
}
export default  useForm