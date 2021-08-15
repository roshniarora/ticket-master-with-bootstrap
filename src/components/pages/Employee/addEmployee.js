import React from 'react'
import { Formik, Form } from "formik";

const AddEmployee = () =>{
    return(
       <div>
         <h1>EMPLOYESS</h1>
           <Formik
        initialValues={{
          name: "",
          email: "",
          mobile: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
         <div>
          <Form onSubmit={handleSubmit}>
            {/* <label>Name</label> */}
            <input
              type="name"
              name="name"
              placeholder='Name'
              
            />

            {/* <label>email</label> */}
            <input
              type="email"
              name="email"
              placeholder='Email'
           />

            {/* <label>mobile</label> */}
            <input
              type="mobile"
              name="mobile"
              placeholder='Password'
            />
            <button>Submit</button>
       
          </Form>
          </div>
        )}
      </Formik>
     
        </div>
    )
        
    
}
export default AddEmployee


      