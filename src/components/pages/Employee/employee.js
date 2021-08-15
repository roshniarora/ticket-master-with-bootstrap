import React from "react";
import { useHistory } from 'react-router-dom';

const Employee = () => {

  const history = useHistory()

  const handleClick = ()=>{
    history.push('/addemployee')
    console.log('employeeClick')
  }

  return (
    <div>
      <h1>Employees </h1>{" "}
      <button onClick={handleClick}>Add Employee</button>
      <table class="table table-borderless">
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
