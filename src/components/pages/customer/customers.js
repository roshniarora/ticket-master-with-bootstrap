import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomerById, getCustomer } from "../../redux/actions/customerAction";
// import { connect } from "formik";
// import CustomerAdd from "./addCustomer";
// import addCustomer from '../customer/addCustomer'

const Customer = (props) => {
 
  const history = useHistory();
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customer.customers)

  const handleClick = () => {
    history.push("/addcustomer");
    console.log("click");
  };

  useEffect(() => {
    // props.getCustomer()
    dispatch(getCustomer())
  }, []);

  console.log(customers,'prtopsdta')

  const handleClickShow = (id) =>{
    history.push(`/customer/${id}`)
  }

  const handleClickDelete = (id) =>{
    if( window.confirm('Are you sure to delete this record')){
      return dispatch(deleteCustomerById(id))
    }
   else {
     return ('something went wrong')
   } 
  }

  return (
    <div>
      <h1>Customers </h1>{" "}
      <button onClick={handleClick}> addCustomer
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
          {
            customers.map((ele)=>{
              return(
                <tr>
                  <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td> {ele.email} </td>
                <td> {ele.mobile} </td>
                
                <td>{ele.action}<button onClick={()=>handleClickShow(ele._id)}>Show</button></td>
                <td><button onClick={()=> handleClickDelete(ele._id)}>Delete</button></td>
              </tr>
              )
             
            })
          }
          
        </tbody>
      </table>
    </div>
  );
};

// const mapStateToProps = (state )=>({
// state : state.customer.customers
// })

export default Customer
