import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import "./login.scss";

// import { Button } from "bootstrap";

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values, 'post');
        }}
      >
        {({ handleSubmit }) => {
          return (
            <div className="container">
             
   <h1>Register</h1>{" "}
              
              <Form onSubmit={handleSubmit}>
                <div className="tex_field">
                    <input
                      placeholder="username"
                      type="text"
                      //   class="form-control"
                      id="username"
                      className="mb-4"
                    />
                  </div>

                  <div className='tex_field'> 
                    <input
                      placeholder="Email"
                      className="mb-4"
                      type="text"
                      //   class="form-control"
                      id="email"
                    />
                    </div>

                  <div className='tex_field'>
                    <input
                      placeholder="password"
                      className="mb-4"
                      type="text"
                      //   class="form-control"
                      id="password"
                    />
                    </div>
                 
                <div className='btn'> 
                  <button type="button">
                    Register
                  </button>
                  </div>
                  <div className='sig_link'> Already a member ?<Link to ='/login'> Sign In</Link> </div>
                
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
