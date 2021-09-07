import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../redux/actions/employeeAction";
import { useHistory } from "react-router";
import "../../auth/login.scss";
import { getDepartment } from "../../redux/actions/departmentAction";

const EmployeeEdit = () => {
  const departments = useSelector((state) => state.department.departments);
  const employees = useSelector((state) => state.employee.employee);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDepartment());
  }, [dispatch]);

  return (
    <div>
      <Formik
        initialValues={{
          name: employees.name || "",
          email: employees.email || "",
          mobile: employees.mobile || "",
          department: employees.department || "",
        }}
        enableReinitialize
        onSubmit={(values) => {
          dispatch(updateEmployee(employees._id, values, history));
        }}
      >
        {({ handleSubmit }) => (
          <div className="container">
            <h1> Edit </h1>
            <Form onSubmit={handleSubmit}>
              <div className="tex_field">
                <Field type="text" name="name" placeholder="Name" /> <br />
              </div>

              <div className="tex_field">
                <Field type="email" name="email" placeholder="Email" /> <br />
              </div>

              <div className="tex_field">
                <Field type="text" name="mobile" placeholder="mobile" />
                <br />
              </div>

              <div className="tex_field">
                <Field
                  name="department"
                  component="select"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="" selected disabled>
                    select Department
                  </option>

                  {departments.map((ele) => {
                    return <option value={ele._id}> {ele.department} </option>;
                  })}
                </Field>
                <br />
              </div>
              <button type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default EmployeeEdit;
