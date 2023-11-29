import React, { useEffect, useState } from 'react'
import './View.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const View = () => {
  const {id}=useParams()
  console.log(id);
  const[getEmp,setEmp]=useState([])
  const fullView=async(id)=> {
    try {
      const res =await axios.post(`http://localhost:7869/api/getDetails/${id}`);
      console.log(res);
      setEmp(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching employee details:',error);

      
    }
  };
  useEffect(()=>{
    fullView(id);
  },[id]);
  console.log(getEmp);
  return (
    
    <div className="view-main">
    <div className="sub-div">
    <div className="view-img">
            <img src={getEmp.Photo} alt="" />
          </div>
          
          <div className=" container view-name-email">
            <h1>{getEmp.Name}</h1>
            <h4>{getEmp.Email}</h4>
          </div>
        
        <div className=" container view-other-details" >
          <table>
          {/* <tr>
              <th>Email</th>
              <td>: {getEmp.Email}</td>
            </tr> */}
            <tr>
              <th>Emp Id</th>
              <td>{getEmp.Empid}</td>
            </tr>
            <tr>
              <th>Phone Number </th>
              <td>+91 {getEmp.Phone }</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{getEmp.Address}</td>
            </tr>
            <tr>
              <th>Designation</th>
              <td>{getEmp.Designation}</td>
            </tr>
            <tr>
              <th>Salery</th>
              <td>{getEmp.Salary}</td>
            </tr>
          
          </table>
        </div>
    </div>
   
      
            
        
      
       
    </div>
  
)
}




export default View


