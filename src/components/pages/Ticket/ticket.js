import React from "react";

const Ticket = () => {
  return (
    <div>
      <h1>Tickets </h1>{" "}
      <button className=".float-right">
        Add Ticket
      </button>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Department</th>
            <th>Employee</th>
            <th>Mobile</th>
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
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
