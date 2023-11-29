import React, { useEffect, useState } from 'react'
// import "./Nav.css"
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
import { Link } from 'react-router-dom'
import "./Home.css"
  import axios from 'axios'
const Home = () => {
  const [getEmp,setEmp]=useState([])
  const getEmployee=async()=>{
    const res=await axios.get("http://localhost:7869/api/gettask")
    setEmp(res.data)
    // console.log(getEmp[0]);
  }
 useEffect(()=>{
  getEmployee()
 },[])
 console.log(getEmp[0])

 // DELETE CODE

 const deletEmp = async (id)=>{
  const isConformed= window.confirm("Are you sure you want to delete this employee?");
  if(isConformed){
    try {
      const res= await axios.delete(`http://localhost:7869/api/deltask/${id}`);
      console.log('Employee deleted:', res.data);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }
  else {
    console.log('Deletion cancelled.');
  }
  getEmployee();
 }

  return (
    
       <div className='emp-table'>
      <h2>Employee Table</h2>
      <table className="employee-table">
        <tr>
          <th>Emp id</th>
          <th>name</th>
          <th>Action</th>
        </tr>
         {
          getEmp.map((data,index)=> <tr>
          <td>{data.Empid}</td>
            <td>{data.Name}</td>
            <td> <Link className='vieww' to={`/View/${data._id}`}>View</Link>
              <Link className='editt' to={`/edit/${data._id}`}>Edit</Link>
              <Link className='delett'to={`#${data._id}`}onClick={()=>deletEmp(data._id)}>Delete</Link></td>
           
          </tr>)
         }
      
      </table>
    </div>
  )
}

export default Home
