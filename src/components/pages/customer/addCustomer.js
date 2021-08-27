import React from "react";
import { Formik, Form, Field } from "formik";
import { postCustomer } from "../../redux/actions/customerAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import '../../auth/login.scss'
// import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";


const CustomerAdd = () => {
 
    const dispatch = useDispatch()
    const history = useHistory()
  return (
    <div className='container'>
      
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
         <div >
           <h1> Add Customer  </h1>

           
          <Form onSubmit={handleSubmit}>
          <div className='tex_field'> 
            <Field
            // as={Input}
              type="text"
              name="name" 
              placeholder='Name'
              />
            </div>
            
            <div className='tex_field'> 
            <Field
              type="email"
              name="email" 
              placeholder='Email'
              
           />

            </div>  

            <div className='tex_field'> 
            <Field
              type="text"
              name="mobile" 
              placeholder='mobile'
             
            />
            </div>
              <button type='submit' >Submit</button>
       
          </Form>
          </div>
        
        
        )}
      </Formik>

    </div>
  );
};
export default CustomerAdd;



