import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomerById,
  getCustomer,
} from "../../redux/actions/customerAction";
import Button from "../../utility/button";
import PageHeader from "../../utility/pageHeader";
import Swal from "sweetalert2";
import "./customer.scss";

const Customer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);

  useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);

  const handleClick = () => {
    history.push("/addcustomer");
  };

  const handleClickShow = (id) => {
    history.push(`/customer/${id}`);
  };

  const handleClickDelete = (id) => {
    if (
      Swal.fire("Are you sure?", "You won't be able to revert this!", "warning")
    ) {
      return dispatch(deleteCustomerById(id));
    } else {
      return "something went wrong";
    }
  };

  return (
    <div className="cust-container">
      <div>
        <PageHeader
          handleActionClick={handleClick}
          title="Customer -"
          count={customers.length}
          btntitle="Add Customer"
        />
      </div>

      <div className="mt-2 cust-table-container ">
        <table className="table table-striped">
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
            {customers?.map((ele) => {
              return (
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td> {ele.email} </td>
                  <td> {ele.mobile} </td>

                  <td>
                    {ele.action}
                    <Button
                      handleAction={() => handleClickShow(ele._id)}
                      title="Show"
                    />
                  </td>
                  <td>
                    {ele.remove}
                    <Button
                      handleAction={() => handleClickDelete(ele._id)}
                      title="Remove"
                    />
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
export default Customer;
