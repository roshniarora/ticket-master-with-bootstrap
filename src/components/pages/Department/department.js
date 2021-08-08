import React from "react";
import { Formik, Form } from "formik";

const Department = () => {
  return (
    <div>
      <h1> Department</h1>
      <Formik
        initialValues={{
          department: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label> Add Department</label>
            <input
              type="text"
              name="department"
              //  onChange={handleChange}
              //  onBlur={handleBlur}
              //  value={values.email}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Department;
