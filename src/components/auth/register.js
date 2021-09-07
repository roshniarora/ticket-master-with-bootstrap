import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useHistory } from "react-router-dom";
import "./login.scss";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/authAction";
import * as Yup from "yup";
import Button from "../utility/button";
import { right } from "@popperjs/core";

const validate = Yup.object().shape({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("*Required"),
  email: Yup.string().email("Email is invalid").required("*Email is required"),
  mobile: Yup.number().required("*Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("*Password is required"),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "Password must match")
  //   .required("Confirm password is required"),
});
const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="container">
      <Formik
        initialValues={{
          username: "",
          email: "",
          mobile: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
          dispatch(registerUser(values, history));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <div>
            <h1> Register Here </h1>

            <Form onSubmit={handleSubmit}>
              <div className="tex_field ">
                <Field
                  // as={Input}
                  type="text"
                  name="username"
                  placeholder="username"
                />
              </div>
              {errors.username && touched.username ? (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {errors.username}
                </div>
              ) : null}

              <div className="tex_field">
                <Field type="email" name="email" placeholder="Email" />
              </div>
              {errors.email && touched.email ? (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {errors.email}
                </div>
              ) : null}

              <div className="tex_field">
                <Field type="text" name="mobile" placeholder="mobile" />
              </div>
              {errors.mobile && touched.mobile ? (
                <div
                  style={{
                    color: "red",
                    // padding: "1rem",
                  }}
                >
                  {errors.mobile}
                </div>
              ) : null}

              <div className="tex_field">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>

              {errors.password && touched.password ? (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {errors.password}
                </div>
              ) : null}
              <Button type="submit" title="Submit" />
              <div className="sig_link">
                {" "}
                Already a member ?<Link to="/login"> Sign In</Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
