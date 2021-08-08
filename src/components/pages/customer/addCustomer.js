import React from "react";
import { Formik, Form } from "formik";
import { Button } from "bootstrap";

const CustomerAdd = () => {
  return (
    <div>
      <h1>CUSTOMER</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="name"
              name="name"
              //  onChange={handleChange}
              //  onBlur={handleBlur}
              //  value={values.email}
            />

            <label>email</label>
            <input
              type="email"
              name="email"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.email}
            />

            <label>mobile</label>
            <input
              type="mobile"
              name="mobile"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.email}
            />
            <Button> Submit </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CustomerAdd;
