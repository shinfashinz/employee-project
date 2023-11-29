import React, { useEffect, useState } from 'react'
import './Edit.css'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
const Edit = () => {
    const {id}=useParams()
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

  const getData=(e)=>{
    e.preventDefault();
   
   
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  //ADD DATA
  const getDatas=async()=>{
    const res=await axios.post(`http://localhost:7869/api/getDetails/${id}`)
    console.log(res.data);
    if (res.status==200){
        setVal(res.data)
    }
  }
  useEffect(()=>{
    getDatas()
  },[])
 
//UPLOAD IMAGE

const Upload=async(e)=>{
  // console.log(e.target.files[0]);
  let Photo=""
  Photo=await convertTobase64(e.target.files[0])
  setVal((pre)=>({...pre,Photo:Photo}))
  // console.log(Photo);
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




  const editData=async(e)=>{
    e.preventDefault()
    console.log(val)
    
    const res=await axios.patch(`http://localhost:7869/api/editEmp/${id}`,{...val})
    if(res.status!=200){
      console.log(res.status);
      alert("Data Edited")
      navigate("/")
    }else{
      alert ("404 ERROR")
    }
  }



  



  return (

    <div className="main">
    <form className="registration-form"  >
        <h2>Edit</h2>

        <p></p>
        <input type="text" id="name" name="Name" value={val.Name} onChange={getData} placeholder='Enter The Name' />

        <input type="text" id="address" name="Address" value={val.Address} onChange={getData}placeholder='Enter The Address' />
        <input type="email" id="email" name="Email"value={val.Email}onChange={getData} placeholder='Enter The Email'/>
        <input type="text" id="empid" name="Empid" value={val.Empid} onChange={getData}placeholder='Enter The Emp id' />
        <input type="tel" id="phone" name="Phone" value={val.Phone} onChange={getData}placeholder='Enter The Phone Number'/>
        <input type="text" id="designation" name="Designation" value={val.Designation} onChange={getData}placeholder='Enter The Designation'/>
        <input type="text" id="salary" name="Salary" value={val.Salary} onChange={getData}placeholder='Enter The Salary' />
        <input type="file" id="photo" name="Photo" onChange={Upload} />
        <button type="submit"onClick={editData} >Register</button>
    </form>
</div>
   

  )
}

export default Edit

