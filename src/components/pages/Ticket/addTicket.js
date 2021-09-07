import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../redux/actions/employeeAction";
import { useHistory } from "react-router";
import "../../auth/login.scss";
import { getCustomer } from "../../redux/actions/customerAction";
import { getDepartment } from "../../redux/actions/departmentAction";
import { postTicket } from "../../redux/actions/ticketAction";
import Multiselect from "multiselect-react-dropdown";
import "./ticket.scss";

const AddTicket = () => {
  const [selectOtion] = useState([]);
  const [selectedValues, setselectedValues] = useState([]);
  const [employeeIds, setEmployeeIds] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const customers = useSelector((state) => state.customer.customers);
  const departments = useSelector((state) => state.department.departments);
  const employees = useSelector((state) => state.employee.employees);

  useEffect(() => {
    dispatch(getCustomer());
    dispatch(getDepartment());
    dispatch(getEmployee());
  }, [dispatch]);
  useEffect(() => {
    employees.map((ele) => selectOtion.push({ key: ele._id, label: ele.name }));
    //   // setSelectOption(employees.map((ele)=> [{value: ele._id , label: ele.name}]))
  }, [employees, selectOtion]);

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedItem, "emply");
    selectedValues.push(selectedItem.key);
    employeeIds.push(selectedItem.key);
  };

  const onRemove = (selectedList, removedItem) => {
    setEmployeeIds(
      employeeIds.filter((ele) => {
        return ele !== removedItem.key;
      })
    );
    console.log(removedItem, "removedItem");
  };
  console.log(selectOtion, "selectOtion");

  return (
    <div>
      <Formik
        initialValues={{
          id: "",
          customer: "",
          department: "",
          message: "",
          priority: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          const newData = await { ...values, employees: employeeIds };

          console.log(newData, "newData");
          resetForm({ values: "" });
          setselectedValues("");

          dispatch(postTicket(newData, history));
        }}
      >
        {({ handleSubmit }) => (
          <div className="container text-right">
            <h1> Add Ticket </h1>
            <Form onSubmit={handleSubmit}>
              {/* <div className="tex_field">
                <Field type="text" name="code" placeholder="Code" /> <br />
              </div> */}

              <div className="tex_field">
                <Field
                  name="customer"
                  component="select"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="" selected disabled>
                    select Customer
                  </option>

                  {customers?.map((ele) => {
                    // console.log('cusst', ele)
                    return <option value={ele._id}> {ele.name} </option>;
                  })}
                </Field>
              </div>
              <div className="tex_field">
                <Field
                  class="form-select"
                  name="department"
                  component="select"
                  placeholder="select"
                >
                  <option value="" selected disabled>
                    select Department
                  </option>
                  {departments.map((ele) => {
                    return <option value={ele._id}> {ele.department} </option>;
                  })}
                </Field>
              </div>

              <div className="tex_field">
                <Multiselect
                  placeholder="Select Employees"
                  selectedValues={selectedValues}
                  options={selectOtion}
                  displayValue="label"
                  onSelect={onSelect}
                  onRemove={onRemove}
                />
              </div>

              <div className="tex_field">
                <Field
                  className="message-box"
                  as="textarea"
                  type="text"
                  name="message"
                  placeholder="Message"
                />
              </div>
              <div id="my-radio-group">Priority</div>
              <div role="group" aria-labelledby="my-radio-group">
                <div>
                  <label>
                    <Field type="radio" name="priority" value="low" />
                    low
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="radio" name="priority" value="medium" />
                    medim
                  </label>
                </div>
                <div>
                  <label>
                    <Field type="radio" name="priority" value="high" />
                    high
                  </label>
                </div>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default AddTicket;
