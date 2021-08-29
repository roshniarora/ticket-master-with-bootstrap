import React from "react";
import { Formik, Form } from "formik";
import { Link, useHistory } from "react-router-dom";
import "./login.scss";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(loginUser(values, history));
        }}
      >
        {({ handleSubmit }) => {
          return (
            <div className="container">
              <h1>Sign in </h1>
              <Form onSubmit={handleSubmit}>
                <div className="tex_field">
                  <input
                    type="text"
                    //   class="form-control"
                    id="email"
                    placeholder="Email"
                  />

                  <span></span>
                  {/* <label>Email</label> */}
                </div>

                <div className="tex_field">
                  <input
                    type="text"
                    //   class="form-control"
                    id="password"
                    placeholder="Password"
                  />

                  <span></span>
                  {/* <label>Password</label> */}
                </div>
                {/* <div className='pass'><h3>Forgot Password</h3></div> */}

                <button type="submit" className="btn">
                  Login
                </button>
                <div className="sig_link">
                  {" "}
                  Not a member ?<Link to="/register"> Sign Up</Link>{" "}
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
