import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployeeById,
  getEmployee,
} from "../../redux/actions/employeeAction";
import Button from "../../utility/button";
import PageHeader from "../../utility/pageHeader";
import "./employee.scss";
import Swal from "sweetalert2";
const Employee = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);

  useEffect(() => {
    dispatch(getEmployee());
  }, [dispatch]);

  const handleClick = () => {
    history.push("/addemployee");
  };

  const handleClickShow = (id) => {
    history.push(`/employee/${id}`);
  };

  const handleClickDelete = (id) => {
    if (
      Swal.fire("Are you sure?", "You won't be able to revert this!", "warning")
    ) {
      return dispatch(deleteEmployeeById(id));
    } else {
      return "something went wrong";
    }
  };
  return (
    <div className="emp-container">
      <div>
        <PageHeader
          handleActionClick={handleClick}
          title="Employee -"
          count={employees.length}
          btntitle="Add Emp.."
        />
      </div>
      <div className="emp-table-con">
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
                    />
                  </td>
                  <td>
                    {ele.remove}
                    <Button
                      custStyle="delete-btn"
                      handleAction={() => handleClickDelete(ele._id)}
                      title="Remove"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
