import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteTicketById, getTicket } from "../../redux/actions/ticketAction";
import "../../utility/button.scss";
import Button from "../../utility/button";
import PageHeader from "../../utility/pageHeader";
import Swal from "sweetalert2";
import "./ticket.scss";

const Ticket = () => {
  const tickets = useSelector((state) => state.ticket.tickets);

  const [checkBox, setCheckBox] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);

  const handleClick = () => {
    history.push("/addticket");
  };

  const handleClickCheck = () => setCheckBox(!checkBox);

  const handleClickShow = (id) => {
    history.push(`/ticket/${id}`);
  };

  const handleClickDelete = (id) => {
    if (
      Swal.fire("Are you sure?", "You won't be able to revert this!", "warning")
    ) {
      return dispatch(deleteTicketById(id));
    } else {
      return "something went wrong !";
    }
  };

  return (
    <div className="cust-container">
      <div>
        <PageHeader
          btntitle="Add Ticket"
          handleActionClick={handleClick}
          title="Tickets"
          count={tickets.length}
        />
      </div>
      <div className="mt-2 tick-table-container ">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>code</th>
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
            {tickets.map((ele) => {
              return (
                <tr>
                  <td> {ele.id} </td>
                  <td>{ele.customer?.name}</td>

                  <td>{ele.department.department}</td>
                  <td>
                    {ele.employees.map((ele) => {
                      return <td>{ele.name} </td>;
                    })}
                  </td>
                  <td> {ele.message} </td>
                  <td> {ele.priority} </td>
                  <td>
                    <Button
                      custStyle="show-btn"
                      title="Show"
                      handleAction={() => handleClickShow(ele._id)}
                    />
                  </td>
                  <td>
                    <Button
                      custStyle="delete-btn"
                      title="Delete"
                      handleAction={() => handleClickDelete(ele._id)}
                    />
                  </td>
                  <td>
                    <label>
                      <input
                        onClick={handleClickCheck}
                        type="checkbox"
                        name="checkBox"
                      />
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ticket;
