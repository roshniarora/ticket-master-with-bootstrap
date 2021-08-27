import React, { useEffect } from 'react'
import { Formik, Form, Field } from "formik";
import { useDispatch , useSelector} from 'react-redux';
import { updateEmployee } from '../../redux/actions/employeeAction';
import { useHistory } from 'react-router';
import '../../auth/login.scss'
import { getDepartment } from '../../redux/actions/departmentAction';


const EmployeeEdit = () =>{

const dispatch = useDispatch()
const history = useHistory()
const departments = useSelector(state =>state.department.departments)
const employees = useSelector(state => state.employee.employee)

useEffect(()=>{
dispatch(getDepartment())
},[dispatch])

    return(
       <div>
         <h1>EMPLOYESS Edit </h1>
           <Formik
        initialValues={{
          name: employees.name || "",
          email: employees.email || "",
          mobile: employees.mobile || "",
          department: employees.department || ""
        }}
        enableReinitialize
        onSubmit={(values) => {
          console.log(values);
          dispatch(updateEmployee( employees._id ,values, history ))
          
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
export default EmployeeEdit


      