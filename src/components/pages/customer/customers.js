import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomerById,
  getCustomer,
} from "../../redux/actions/customerAction";
import "../../utility/button.scss";
import Button from "../../utility/button";
import "./customer.scss";

import PageHeader from "../../utility/pageHeader";

const Customer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);

  useEffect(() => {
    // props.getCustomer()
    dispatch(getCustomer());
  }, [dispatch]);

  console.log(customers, "prtopsdta");

  const handleClick = () => {
    history.push("/addcustomer");
    console.log("click");
  };

  const handleClickShow = (id) => {
    history.push(`/customer/${id}`);
  };

  const handleClickDelete = (id) => {
    if (window.confirm("Are you sure to delete this record")) {
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
        {/* <h2>
          Customers - {customers.length}
          <AddButton
            addButton="btn-add"
            handleActionClick={handleClick}
            title="Add Button"
          />
        </h2> */}
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
                      custStyle="show-btn"
                      handleAction={() => handleClickShow(ele._id)}
                      title="Show"
                    />
                  </td>
                  <td>
                    {ele.remove}
                    <Button
                      custStyle="delete-btn"
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

// const mapStateToProps = (state )=>({
// state : state.customer.customers
// })

export default Customer;
