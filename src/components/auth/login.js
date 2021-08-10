import React from "react";
import { Formik, Form } from "formik";
import './login.scss'

const Login = () => {
  return (
    <div>
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
            <div className='container'>
              <h1>Sign in </h1>
              <Form onSubmit={handleSubmit}>
                <div className='tex_field'> 
                 
                  <input
                    type="text"
                    //   class="form-control"
                    id="email"
                    placeholder='Email'
                  />
                  
                  <span></span>
                  {/* <label>Email</label> */}
                  </div>

                  <div className='tex_field'>
                
                  <input
                    type="text"
                    //   class="form-control"
                    id="password"
                    placeholder='Password'
                  />
                   
                    <span></span>
                    {/* <label>Password</label> */}
                  </div>
                  {/* <div className='pass'><h3>Forgot Password</h3></div> */}

                  <div className='btn'> 
                  <button type="button">
                    Login
                  </button>
                  </div>
                    <div className='sig_link'> Not a member ?<a href='#'> Sign Up</a> </div>
                
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
