import axios from "../../config/axios";
import * as types from "../store/constant";

const Ticketdispatch = (cust, data) => {
  return {
    type: cust,
    payload: data,
  };
};

// GET TICKET

export const getTicket =
  () => async (dispatch) => {
    try {
      const res = await axios.get("/ticket");
      console.log("ticket_action_data", res.data);
      dispatch(
        Ticketdispatch(
          types.GET_TICKET,
          res.data
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // POST ticket

  export const postTicket =
  (data, history) => async () => {
    try {
      const res = await axios.post("/ticket" ,data);
      console.log("ticket_action_data", res.data);
      if(res.data) return  history.push("/customer")
    } catch (err) {
      console.log(err);
    }
  };

  // Ticket GET BY ID

  export const showTicketById =
  (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/ticket/${id}`);
      console.log("ticket_action_data", res.data);
      dispatch(
        Ticketdispatch(
          types.GET_TICKET_BY_ID,
          res.data
        )
      );
    } catch (err) {
      console.log(err);
    }
  };      

  // Edit/ update by id 

  export const updateTicket =
  (id, data, history) => async (dispatch) => {
    try {
      const res = await axios.put(`/ticket/${id}`, data);
      console.log("ticket_action_update", res.data);
      if(res.data) return (history.push('/ticket'))
      // dispatch(getTicket())
      
    } catch (err) {
      console.log(err);
    }
  };

  // Delete by id

  export const deleteTicketById =
  (id) => async (dispatch) => {
    try {
      const res = await axios.delete(`/ticket/${id}`);
      console.log("Ticket_delete", res.data);
      dispatch(getTicket())
      
    } catch (err) {
      console.log(err);
    }
  };