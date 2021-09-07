import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { postEmployee } from "../../redux/actions/employeeAction";
import { useHistory } from "react-router";
import "../../auth/login.scss";
import { getDepartment } from "../../redux/actions/departmentAction";

const AddEmployee = () => {
  const departments = useSelector((state) => state.department.departments);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDepartment());
  }, [dispatch]);

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobile: "",
          department: "",
        }}
        onSubmit={(values) => {
          dispatch(postEmployee(values, history));
        }}
      >
        {({ handleSubmit }) => (
          <div className="container">
            <h1> Add Employee </h1>
            <Form onSubmit={handleSubmit}>
              <div className="tex_field">
                <Field type="text" name="name" placeholder="Name" />
              </div>

              <div className="tex_field">
                <Field type="email" name="email" placeholder="Email" />
              </div>

              <div className="tex_field">
                <Field type="text" name="mobile" placeholder="mobile" />
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
              </div>
              <button type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default AddEmployee;
