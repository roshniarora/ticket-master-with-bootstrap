import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTicket } from "../../redux/actions/ticketAction";
import "../../utility/button.scss";
import Button from "../../utility/button";
import PageHeader from "../../utility/pageHeader";

const Ticket = () => {
  const [checkBox, setCheckBox] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket.tickets);

  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);
  console.log(tickets, "ticketdata");

  const handleClick = () => {
    history.push("/addticket");
    console.log("ticket click");
  };

  const handleClickCheck = () => setCheckBox(!checkBox);

  return (
    <div>
      <h1>
        <PageHeader
          btntitle="Add Ticket"
          handleActionClick={handleClick}
          title="Tickets"
          count={tickets.length}
        />
      </h1>{" "}
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
            <td>
              {" "}
              <Button custStyle="show-btn" title="Show" />
            </td>
            <td>
              {" "}
              <Button custStyle="delete-btn" title="Delete" />{" "}
            </td>
            <td>
              {/* <Field name="acceptTerms" className="mr-2 leading-tight" type="checkbox" /> */}
              <label>
                <input
                  onClick={handleClickCheck}
                  type="checkbox"
                  name="checkBox"
                />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
