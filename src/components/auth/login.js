import React from "react";
import { Formik, Form } from "formik";

const Login = () => {
  return (
    <div>
      <h1>Login Here</h1>
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
        {({ handleSubmit }) => {
          return (
            <div>
              <h1>Form</h1>
              <Form onSubmit={handleSubmit}>
                <div>
                  <label>Email</label>
                  <input
                    type="text"
                    //   class="form-control"
                    id="email"
                  />

                  <label>Password</label>
                  <input
                    type="text"
                    //   class="form-control"
                    id="password"
                  />

                  <button
                    type="button"
                    class="btn btn-secondary"
                  >
                    Login
                  </button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
