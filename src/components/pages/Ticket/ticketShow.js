import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { showTicketById } from "../../redux/actions/ticketAction";

const TicketShow = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const tickets = useSelector((state) => state.ticket.tickets);

  useEffect(() => {
    dispatch(showTicketById(params.id));
  }, [params.id, dispatch]);
  console.log(params.id, "ID");

  // const handleClickEdit = (id) => {
  //   history.push(`/editticket/${id}`);
  // };
  return (
    <div>
      <h1>Ticket detail</h1>
      <div> {tickets?.customer?.name} </div>
      <div> {tickets?.email} </div>
      {/* <button onClick={() => handleClickEdit(tickets?._id)}> Edit</button> */}
    </div>
  );
};
export default TicketShow;
