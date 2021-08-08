import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { getCustomer } from "../../redux/actions/customerAction";

const Customer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push("/addCustomer");
    console.log("click");
  };

  useEffect(() => {
    dispatch(getCustomer());
  }, []);
  return (
    <div>
      <h1>Customers </h1>{" "}
      <button onClick={handleClick}>
        {" "}
        Add Customer
      </button>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
            <th>Remove</th>
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

export default Customer;
