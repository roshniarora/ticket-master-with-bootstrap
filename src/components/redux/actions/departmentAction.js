import axios from "../../config/axios";
import * as types from "../store/constant";

const DepartmentDispatch = (cust, data) => {
  return {
    type: cust,
    payload: data,
  };
};
// Get all departments

export const getDepartment = () => async (dispatch) => {
  try {
    const res = await axios.get("/department");
    dispatch(DepartmentDispatch(types.GET_DEPARTMENT, res.data));
  } catch (err) {
    console.log(err);
  }
};

// Post a department

export const postDepartment = (data, history) => async (dispatch) => {
  try {
    const res = await axios.post("/department", data);
    if (res.data) return dispatch(getDepartment());
  } catch (err) {
    console.log(err);
  }
};

// Get department by id

export const showDepartmentById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/department/${id}`);
    dispatch(DepartmentDispatch(types.GET_DEPARTMENT_BY_ID, res.data));
  } catch (err) {
    console.log(err);
  }
};

// Update a department

export const updateDepartmentById = (id, data, history) => (dispatch) => {
  try {
    axios.put(`/department/${id}`, data);
    // if(res.data) return (history.push('/department'))
    dispatch(history.push("/department"));
  } catch (err) {
    console.log(err);
  }
};

// Delete a department

export const deleteDepartmentById = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/department/${id}`);
    console.log("deleteDepartment", res.data);
    dispatch(getDepartment());
  } catch (err) {
    console.log(err);
  }
};
