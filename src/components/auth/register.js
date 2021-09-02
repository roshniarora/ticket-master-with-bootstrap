import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useHistory } from "react-router-dom";
import "./login.scss";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/authAction";

const Register = () => {
  const dispatch = useDispatch;
  const history = useHistory;

  // const handleButton = () => {
  //   history.push("/login");
  // };

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          mobile: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
          dispatch(registerUser(values, history));
        }}
      >
        {({ handleSubmit }) => (
          <div className="container">
            <h1>Register Here </h1>

            <Form onSubmit={handleSubmit}>
              <div className="tex_field">
                <Field
                  // as={Input}
                  type="text"
                  name="username"
                  placeholder="username"
                />
              </div>
              <div className="tex_field">
                <Field type="email" name="email" placeholder="Email" />
              </div>
              <div className="tex_field">
                <Field type="text" name="mobile" placeholder="mobile" />
              </div>
              <div className="tex_field">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
              </div>
              <button type="submit">Submit</button>
              <div className="sig_link">
                {" "}
                Already a member ?<Link to="/login"> Sign Up</Link>{" "}
              </div>
              ;
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
