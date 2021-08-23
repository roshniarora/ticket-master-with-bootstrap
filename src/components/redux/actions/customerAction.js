import axios from "../../config/axios";
import * as types from "../store/constant";

const Customerdispatch = (cust, data) => {
  return {
    type: cust,
    payload: data,
  };
};

// GET CUSTOMERs

export const getCustomer =
  () => async (dispatch) => {
    try {
      const res = await axios.get("/customer");
      console.log("custdata", res.data);
      dispatch(
        Customerdispatch(
          types.GET_CUSTOMER,
          res.data
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // POST CUSTOMERS

  export const postCustomer =
  (data, history) => async () => {
    try {
      const res = await axios.post("/customer" ,data);
      console.log("postcust", res.data);
      if(res.data) return  history.push("/customer")
    } catch (err) {
      console.log(err);
    }
  };

  // GET BY ID

  export const showCustomerBYID =
  (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/customer/${id}`);
      console.log("custdatabyid", res.data);
      dispatch(
        Customerdispatch(
          types.GET_CUSTOMER_BY_ID,
          res.data
        )
      );
    } catch (err) {
      console.log(err);
    }
  };      

  // Edit/ update by id 

  export const updateCustomer =
  (id, data, history) => async (dispatch) => {
    try {
      const res = await axios.put(`/customer/${id}`, data);
      console.log("custdupdate", res.data);
      if(res.data) return (history.push('/customer'))
      dispatch(getCustomer())
      
    } catch (err) {
      console.log(err);
    }
  };

  // Delete by id

  export const deleteCustomerById =
  (id) => async (dispatch) => {
    try {
      const res = await axios.delete(`/customer/${id}`);
      console.log("custdelete", res.data);
      dispatch(getCustomer())
      
    } catch (err) {
      console.log(err);
    }
  };