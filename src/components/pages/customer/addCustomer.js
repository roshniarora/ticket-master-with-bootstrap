import React from "react";
import { Formik, Form, Field } from "formik";
import { postCustomer } from "../../redux/actions/customerAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";


const CustomerAdd = () => {
 
    const dispatch = useDispatch()
    const history = useHistory()
  return (
    <div>
      
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobile: "",
        }}
        onSubmit={(values, {resetForm}) => {
          console.log(values);
          resetForm({values:''})
          dispatch(postCustomer(values, history))
        }}
      >
        {({ handleSubmit }) => (
         
          <Form onSubmit={handleSubmit}>
          
            <Field
            // as={Input}
              type="text"
              name="name" 
              placeholder='Name'
             
            />

          
            <Field
              type="email"
              name="email" 
              placeholder='Email'
              
           />

            
            <Field
              type="text"
              name="mobile" 
              placeholder='mobile'
             
            />
              <button type='submit' >Submit</button>
       
          </Form>
        
          
        )}
      </Formik>

    </div>
  );
};
export default CustomerAdd;



