import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployeeById, getEmployee } from "../../redux/actions/employeeAction";

const Employee = () => {

  const history = useHistory()
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employee.employee)

  useEffect(() => { dispatch(getEmployee()) }, [dispatch]);

  // console.log(Employee,'employecom data')

  const handleClick = ()=>{
    history.push('/addemployee')
    console.log('employeeClick')
  }

  const handleClickShow = (id) =>{
    history.push(`/employee/${id}`)
    console.log('employeeShowClick')
  }

  const handleClickDelete = (id) =>{
    if(window.confirm('Are you sure to delte this record')){
      return dispatch(deleteEmployeeById(id))
      
    }
    else{
      return ('something went wrong')
    }
    
  }
  console.log('employeeDeleteClick')
  return (
    <div>
      <h1>Employees </h1>
      <button onClick={handleClick}>Add Employee</button>
      <table className ="table table-borderless">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Department</th>
            <th>Actions</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map((ele)=>{
              return(
                <tr>
                <td> {ele.id} </td>
                <td> {ele.name} </td>
                <td> {ele.email} </td>
                <td> {ele.mobile} </td>

                   <td> {ele.department} </td> 
                 <td> <button onClick={()=> handleClickShow(ele._id)}> Show </button> </td> 
                 <td> <button onClick={()=>handleClickDelete(ele._id)}> Remove </button> </td> 
             
              </tr>
              )
            })
               
          }
        
        </tbody>
      </table>
    </div>
  )
}

export default Employee;
