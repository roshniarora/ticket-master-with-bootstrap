import axios from "../../config/axios";
import * as types from "../store/constant";

const Ticketdispatch = (cust, data) => {
  return {
    type: cust,
    payload: data,
  };
};

// Get all tickets

export const getTicket = () => async (dispatch) => {
  try {
    const res = await axios.get("/ticket");
    dispatch(Ticketdispatch(types.GET_TICKET, res.data));
  } catch (err) {
    console.log(err);
  }
};

// Post a ticket

export const postTicket = (data, history) => async () => {
  try {
    const res = await axios.post("/ticket", data);
    if (res.data) return history.push("/ticket");
  } catch (err) {
    console.log(err);
  }
};

// get a ticket by id

export const showTicketById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/ticket/${id}`);
    dispatch(Ticketdispatch(types.GET_TICKET_BY_ID, res.data));
  } catch (err) {
    console.log(err);
  }
};

// Update a ticket

export const updateTicket = (id, data, history) => async (dispatch) => {
  try {
    const res = await axios.put(`/ticket/${id}`, data);
    if (res.data) return history.push("/ticket");
  } catch (err) {
    console.log(err);
  }
};

// Delete a ticket

export const deleteTicketById = (id) => async (dispatch) => {
  try {
    await axios.delete(`/ticket/${id}`);
    dispatch(getTicket());
  } catch (err) {
    console.log(err);
  }
};
