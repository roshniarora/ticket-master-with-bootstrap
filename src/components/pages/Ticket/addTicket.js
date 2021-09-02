import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../redux/actions/employeeAction";
import { useHistory } from "react-router";
import "../../auth/login.scss";
import { getCustomer } from "../../redux/actions/customerAction";
import { getDepartment } from "../../redux/actions/departmentAction";
import { postTicket } from "../../redux/actions/ticketAction";

const AddTicket = () => {
  const [selectOtion, setSelectOption] = useState([]);

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
    employees.map((ele) =>
      selectOtion.push({ value: ele._id, label: ele.name })
    );
    //   // setSelectOption(employees.map((ele)=> [{value: ele._id , label: ele.name}]))
  }, [employees]);
  console.log(employees, "tick_emp");
  console.log(selectOtion, "option");

  return (
    <div>
      <h1>TICKETS</h1>
      <Formik
        initialValues={{
          code: "",
          customer: "",
          department: "",
          employee: [],
          message: "",
          priority: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(postTicket(values, history));
        }}
      >
        {({
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          values,
          errors,
          touched,
        }) => (
          <div className="container text-right">
            <h1> Add Ticket </h1>
            <Form onSubmit={handleSubmit}>
              <div className="tex_field">
                <Field type="text" name="code" placeholder="Code" /> <br />
              </div>

              <div className="tex_field">
                <Field name="customer" component="select">
                  <option value="" disabled>
                    Select
                  </option>

                  {customers?.map((ele) => {
                    // console.log('cusst', ele)
                    return <option value={ele._id}> {ele.name} </option>;
                  })}
                </Field>
              </div>
              <div className="tex_field">
                <Field
                  name="department"
                  component="select"
                  placeholder="select"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {departments.map((ele) => {
                    // console.log('dep', ele)
                    return <option value={ele._id}> {ele.department} </option>;
                  })}
                </Field>
              </div>
              <div className="tex_field">
                {/* <Select
                  // defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="employee"
                  onChange={}
                  options={selectOtion}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  // component={Select}
                /> */}
                <MySelect
                  value={values.employee?.value}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  error={errors.employee}
                  touched={touched.employee}
                  option={selectOtion}
                />
              </div>

              <div className="tex_field">
                <Field
                  as="textarea"
                  type="text"
                  name="message"
                  placeholder="Message"
                />
              </div>

              <label>
                <Field type="radio" name="priority" value="low" />
                low
              </label>
              <br />
              <label>
                <Field type="radio" name="priority" value="medim" />
                medim
              </label>
              <br />
              <label>
                <Field type="radio" name="priority" value="high" />
                high
              </label>
              <br />
              <br />

              <button type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default AddTicket;

class MySelect extends React.Component {
  handleChange = (value) => {
    console.log(value, "mycomp");
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange("employee", value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur("employee", true);
  };

  render() {
    return (
      <div style={{ margin: "1rem 0" }}>
        {/* <label htmlFor="color">Topics (select at least 3) </label> */}
        <Select
          options={this.props.option}
          isMulti
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error && this.props.touched && (
          <div style={{ color: "red", marginTop: ".5rem" }}>
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}
