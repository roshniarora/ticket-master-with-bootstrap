import axios from "../../config/axios";
import * as types from "../store/constant";

const Customerdispatch = (cust, data) => {
  return {
    type: cust,
    payload: data,
  };
};

// Get all customers

export const getCustomer = () => async (dispatch) => {
  try {
    const res = await axios.get("/customer");
    dispatch(Customerdispatch(types.GET_CUSTOMER, res.data));
  } catch (err) {
    console.log(err);
  }
};

// Post a customer

export const postCustomer = (data, history) => async () => {
  try {
    const res = await axios.post("/customer", data);
    if (res.data) return history.push("/customer");
  } catch (err) {
    console.log(err);
  }
};

// Get a customer by id

export const showCustomerBYID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/customer/${id}`);
    dispatch(Customerdispatch(types.GET_CUSTOMER_BY_ID, res.data));
  } catch (err) {
    console.log(err);
  }
};

// Update a customer

export const updateCustomer = (id, data, history) => async (dispatch) => {
  try {
    const res = await axios.put(`/customer/${id}`, data);
    if (res.data) return history.push("/customer");
    dispatch(getCustomer());
  } catch (err) {
    console.log(err);
  }
};

// Delete a customer

export const deleteCustomerById = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/customer/${id}`);
    console.log("custdelete", res.data);
    dispatch(getCustomer());
  } catch (err) {
    console.log(err);
  }
};
