import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getTicket } from "../../redux/actions/ticketAction";


const Ticket = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const tickets = useSelector(state => state.ticket.tickets)

  useEffect(()=>{
    dispatch(getTicket())
  }, [])


const handleClick = () =>{
 history.push('/addticket')
  console.log('ticket click')
}

  return (
    <div>
      <h1>Tickets </h1>{" "}
      <button onClick={handleClick} > Add Ticket </button>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Department</th>
            <th>Employee</th>
            <th>message</th>
            <th>priority</th>
            <th>Action</th>
            <th>Remove</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
      
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> <button>Show</button> </td>
            <td> <button>Remove</button> </td>
            <td>
          
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
