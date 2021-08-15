import React , {useEffect} from 'react'
import {Field, Form , Formik} from 'formik'
import { useDispatch, useSelector } from "react-redux";
import {  updateCustomer } from '../../redux/actions/customerAction';
import { useHistory, useParams } from 'react-router';
import { GET_CUSTOMERBYID } from '../../redux/store/constant';

const CustomerEdit = () =>{

    const dispatch = useDispatch()
    const history = useHistory()
    // const params = useParams()
    const customers = useSelector(state => state.customer.customers)

   
    return(
        <div>

<Formik
        initialValues={{
          name: "",
          email: "",
          mobile: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        //   resetForm({values:''})
          dispatch(updateCustomer(customers._id, values, history))
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
    )
}

export default CustomerEdit