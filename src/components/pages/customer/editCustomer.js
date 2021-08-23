import React from 'react'
import {Field, Form , Formik} from 'formik'
import { useDispatch, useSelector } from "react-redux";
import {  updateCustomer } from '../../redux/actions/customerAction';
import { useHistory } from 'react-router';


const CustomerEdit = () =>{

    const dispatch = useDispatch()
    const history = useHistory()
    // const params = useParams()
    const customers = useSelector(state => state.customer.customers)

   
    return(
        <div>

<Formik

        initialValues={{
          name: customers.name || "",
          email: customers.email || "",
          mobile: customers.mobile || "",
        }}
        enableReinitialize 
        onSubmit={(values) => {
          console.log(values);
        //   resetForm({values:''})
          dispatch(updateCustomer(customers._id, values, history))
        }}
      >
        {({ handleSubmit }) => (
         
         <div className='container'>

           <h1> Edit Here  </h1>

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
    )
}

export default CustomerEdit