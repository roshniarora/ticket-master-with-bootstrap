import React, { useEffect } from 'react'
import { Formik, Form, Field } from "formik";
import { useDispatch , useSelector} from 'react-redux';
import { postEmployee } from '../../redux/actions/employeeAction';
import { useHistory } from 'react-router';
import '../../auth/login.scss'
import { getDepartment } from '../../redux/actions/departmentAction';

const AddEmployee = () =>{

const dispatch = useDispatch()
const history = useHistory()
const departments = useSelector(state =>state.department.departments)

useEffect(()=>{
dispatch(getDepartment())
},[])

    return(
       <div>
         <h1>EMPLOYESS</h1>
           <Formik
        initialValues={{
          name: "",
          email: "",
          mobile: "",
          department:""
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(postEmployee( values, history ))
          
        }}
      >
        {({ handleSubmit }) => (
         <div className='container'>
           <h1> Add Employee </h1>
          <Form onSubmit={handleSubmit}>

            {/* <label>Name</label>{" "} */}
            <div className='tex_field'> 
            <Field
              type="text"
              name="name"
              placeholder='Name'
              
            /> <br />
            </div>

            <div className='tex_field'> 
            {/* <label>email</label> */}
            <Field
              type="email"
              name="email"
              placeholder='Email'
           /> <br />
           </div>

           <div className='tex_field'> 
            {/* <label>mobile</label> */}
            <Field
              type="text"
              name="mobile"
              placeholder='mobile'
              />
              <br />
              </div>

              <div className='tex_field'> 
              <label>department</label>
              {/* <select
              type="text"
              name="department"
              placeholder='department'
            >
              {
                departments.map((ele)=>{
                  console.log('dep', ele)
                  return(
                    <option value={ele._id}>  {ele.department} </option>
                  )
                })
              }
              </select> */}

          <Field name="department" component="select">
              {
                departments.map((ele)=>{
                  console.log('dep', ele)
                  return(
                    <option value={ele._id}>  {ele.department} </option>
                  )
                })
              }


</Field>
            <br />
            </div>
            <button type='submit'>Submit</button>
       
          </Form>
          </div>
        )}
      </Formik>
     
        </div>
    )
        
    
}
export default AddEmployee


      