import axios from "../../config/axios";
import * as types from "../store/constant";

const customerDispatch = (cust, data) => {
  return {
    type: cust,
    payload: data,
  };
};

export const getCustomer =
  () => async (dispatch) => {
    try {
      const res = await axios.get("/customers");
      console.log("custdata", res);
      dispatch(
        customerDispatch(
          types.GET_CUSTOMERS,
          res.data
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
