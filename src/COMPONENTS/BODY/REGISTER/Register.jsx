import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate=useNavigate()
let Photo="";
  const [val,setVal]=useState({
    Name:"",
    Address:"",
    Email:"",
    Empid:"",
    Phone:"",
    Designation:"",
    Salary:"",
    Photo:""
    
  })



  // const RegisterData=(e)=>{
  //   e.preventDefault()
  //   console.log(val);
    
  // }
  //ADD DATA
  const getData=(e)=>{
    e.preventDefault();
   
   
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  //CONVERT IMAGE

  function convertTobase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

//UPLOAD IMAGE

const Upload=async(e)=>{
// console.log(e.target.files[0]);
Photo=await convertTobase64(e.target.files[0])
console.log(Photo);
}



  

//CONVERT IMAGE 
function convertTOBase64(file){
  return new Promise((resolve,reject)=>{
    const fileReader =new FileReader();
    fileReader.readAsDataURL(file);
  })
}
//DISPLAY DATA
   
const RegisterData=async(e)=>{
  e.preventDefault();
  console.log({...val});
  console.log(Photo);

  const res=await axios.post("http://localhost:7869/api/addtask",{...val,Photo:Photo})
  console.log(res.status);
  if(res.status!=201){
    alert("Data Not Added")
  }
  else{
    alert("Data Added")
    navigate("/")
  }
}

  return (

    <div className="main">
    <form className="registration-form" onSubmit={RegisterData} >
        <h2>Registration</h2>
        {/* <label htmlFor="name">Name:</label> */}
        <p></p>
        <input type="text" id="name" name="Name"onChange={getData} placeholder='Enter The Name' />

        {/* <label htmlFor="address">Address:</label> */}
        <input type="text" id="address" name="Address"onChange={getData} placeholder='Enter The Address' />

        {/* <label htmlFor="email">Email:</label> */}
        <input type="email" id="email" name="Email" onChange={getData} placeholder='Enter The Email'/>

        {/* <label htmlFor="empid">Employee-ID:</label> */}
        <input type="text" id="empid" name="Empid"onChange={getData} placeholder='Enter The Emp id' />

        {/* <label htmlFor="phone">Phone Number:</label> */}
        <input type="tel" id="phone" name="Phone" onChange={getData} placeholder='Enter The Phone Number'/>

        {/* <label htmlFor="designation">Designation:</label> */}
        <input type="text" id="designation" name="Designation" onChange={getData} placeholder='Enter The Designation'/>

        {/* <label htmlFor="salary">Salary:</label> */}
        <input type="text" id="salary" name="Salary"onChange={getData} placeholder='Enter The Salary' />
        {/* <label htmlFor="photo">Photo:</label> */}
        <input type="file" id="photo" name="Photo" onChange={Upload} />

        <button type="submit" onClick={RegisterData}>Register</button>
    </form>
</div>
   

  )
}

export default Register
