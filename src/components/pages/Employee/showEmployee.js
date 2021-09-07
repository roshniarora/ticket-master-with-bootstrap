import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { showEmployeeById } from "../../redux/actions/employeeAction";

const EmployeeShow = () => {
  const employees = useSelector((state) => state.employee.employee);
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(showEmployeeById(params.id));
  }, [params.id, dispatch]);

  const handleClickEdit = (id) => {
    history.push(`/editemployee/${id}`);
  };
  return (
    <div>
      <h1>employee detail</h1>
      <div>{employees.name} </div>
      <div> {employees.email} </div>
      <button onClick={() => handleClickEdit(employees._id)}> Edit</button>
    </div>
  );
};
export default EmployeeShow;
