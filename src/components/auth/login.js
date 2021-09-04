import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useHistory } from "react-router-dom";
import "./login.scss";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/authAction";
import * as Yup from "yup";

// Validations

const Login = () => {
  const validate = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .required("Password is Required"),
  });
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          resetForm({ values: "" });
          dispatch(loginUser(values, history));
        }}
      >
        {({ handleSubmit }) => (
          <div className="container">
            <h1> Login Here </h1>

            <Form onSubmit={handleSubmit}>
              <div className="tex_field">
                <Field type="email" name="email" placeholder="Email" />
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
                Not a member ?<Link to="/register"> Sign Up</Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
