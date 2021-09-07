import axios from "../../config/axios";
import * as types from "../store/constant";

const EmployeeDispatch = (cust, data) => {
  return {
    type: cust,
    payload: data,
  };
};

// Get all employees

export const getEmployee = () => async (dispatch) => {
  try {
    const res = await axios.get("/employee");
    dispatch(EmployeeDispatch(types.GET_EMPLOYEE, res.data));
  } catch (err) {
    console.log(err);
  }
};

// Post a employee

export const postEmployee = (data, history) => async () => {
  try {
    const res = await axios.post("/employee", data);
    if (res.data) return history.push("/employee");
  } catch (err) {
    console.log(err);
  }
};

// Get a employee by id

export const showEmployeeById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/employee/${id}`);
    dispatch(EmployeeDispatch(types.GET_EMPLOYEE_BY_ID, res.data));
  } catch (err) {
    console.log(err);
  }
};

// Update a employee

export const updateEmployee = (id, data, history) => async (dispatch) => {
  try {
    await axios.put(`/employee/${id}`, data);
    //  if(res.data) return history.push('/employee')
    dispatch(history.push("/employee"));
  } catch (err) {
    console.log(err);
  }
};

// Delete a employee

export const deleteEmployeeById = (id) => async (dispatch) => {
  try {
    await axios.delete(`/employee/${id}`);
    dispatch(getEmployee());
  } catch (err) {
    console.log(err);
  }
};
