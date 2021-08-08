import React from "react";
import { Formik, Form } from "formik";
import "./register.scss";

// import { Button } from "bootstrap";

const Register = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
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
            <div className="card-register">
              <div className="ml-4">
                {" "}
                <h1>Register</h1>{" "}
              </div>
              <Form onSubmit={handleSubmit}>
                <div className="card-body mx-4">
                  <div className="input-container">
                    {/* <label>Username</label> */}

                    <input
                      placeholder="username"
                      type="text"
                      //   class="form-control"
                      id="username"
                      className="mb-4"
                    />

                    {/* <label>Email</label> */}
                    <input
                      placeholder="Email"
                      className="mb-4"
                      type="text"
                      //   class="form-control"
                      id="email"
                    />

                    {/* <label>Password</label> */}
                    <input
                      placeholder="password"
                      className="mb-4"
                      type="text"
                      //   class="form-control"
                      id="password"
                    />
                  </div>

                  <button
                    type="button"
                    class="btn btn-secondary"
                  >
                    Register
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

export default Register;
