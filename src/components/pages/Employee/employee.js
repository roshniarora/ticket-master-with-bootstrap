import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteEmployeeById,
  getEmployee,
} from "../../redux/actions/employeeAction";
// import './employee.scss'
import "../../utility/button.scss";
import Button from "../../utility/button";

const Employee = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);
  // const departments = useSelector(state =>state.department.departments)

  useEffect(() => {
    dispatch(getEmployee());
  }, [dispatch]);

  // console.log(Employee,'employecom data')

  const handleClick = () => {
    history.push("/addemployee");
    console.log("employeeClick");
  };

  const handleClickShow = (id) => {
    history.push(`/employee/${id}`);
    console.log("employeeShowClick");
  };

  const handleClickDelete = (id) => {
    if (window.confirm("Are you sure to delte this record ?")) {
      return dispatch(deleteEmployeeById(id));
    } else {
      return "something went wrong";
    }
  };
  console.log("employeeDeleteClick");
  return (
    <div>
      <h1>Employees - {employees.length}</h1>
      <table className="table table-striped">
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
          {employees.map((ele) => {
            return (
              <tr>
                <td> {ele.id} </td>
                <td> {ele.name} </td>
                <td> {ele.email} </td>
                <td> {ele.mobile} </td>

                <td value={ele._id}> {ele.department?.department} </td>
                <td>
                  <Button
                    custStyle="show-btn"
                    handleAction={() => handleClickShow(ele._id)}
                    title="Show"
                  />{" "}
                </td>
                <td>
                  {" "}
                  {ele.remove}{" "}
                  <Button
                    custStyle="delete-btn"
                    handleAction={() => handleClickDelete(ele._id)}
                    title="Remove"
                  />{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
