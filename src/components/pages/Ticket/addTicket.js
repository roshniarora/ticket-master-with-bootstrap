import React, { useEffect } from 'react'
import { Formik, Form, Field } from "formik";
import Select from 'react-select';
import { useDispatch , useSelector} from 'react-redux';
import { getEmployee, postEmployee } from '../../redux/actions/employeeAction';
import { useHistory } from 'react-router';
import '../../auth/login.scss'
import { getCustomer } from '../../redux/actions/customerAction';
import { getDepartment } from '../../redux/actions/departmentAction';


const AddTicket = () =>{

const dispatch = useDispatch()
const history = useHistory()
const customers = useSelector(state => state.customer.customers)
const departments = useSelector(state =>state.department.departments)
const employees = useSelector(state => state.employee.employee)

useEffect(()=>{
dispatch(getCustomer())
 dispatch(getDepartment())
 dispatch(getEmployee())

},[])

    return(
       <div>
         <h1>TICKETS</h1>
           <Formik
        initialValues={{
          code: "",
          customer: "",
          department:"",
          employee:"",
          message:"",
          priority:""


        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
         <div className='container'>
           <h1> Add Ticket </h1>
          <Form onSubmit={handleSubmit}>
          
          <div className='tex_field'> 
            
            {/* <Field
              type="text"
              name="code"
              placeholder='Code'
            />  */}
            {/* {tickets.code} */}
            <br />

            </div>


            {/* <div className='tex_field'>
              <select
              type="text"
              name="customer"
              placeholder='customer'
            >
              {
                customers.map((ele)=>{
                  return(
                    
                    
                      <option> {ele.name} </option>
                      
                   
                    
                  )
                })
              }
              </select>
            <br />
            </div> */}

<Field name="customer" component="select">
              {
                customers?.map((ele)=>{
                  console.log('cusst', ele)
                  return(
                    <option value={ele._id}>  {ele.name} </option>
                  )
                })
              }


</Field>

            
            {/* <div className='tex_field'> 
              <select
              type="text"
              name="department"
              placeholder='Department'
            >
              {
                departments.map((ele)=>{
                  return(
                    <option> {ele.department} </option>
                  )
                })
              }
              </select>
            <br />
            </div> */}

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

            {/* <div className='tex_field'> 
              
              <select
              type="text"
              name="employee"
              placeholder='Employee'
              mode='multiple'
            >
              {
                employees.map((ele)=>{
                  return(
                    <option> {ele.name} </option>
                  )
                })
              }
              </select>
            <br />
            </div> */}

<Select
    // defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="employee"
    options={employees}
    className="basic-multi-select"
    classNamePrefix="select"
  />

            <div className='tex_field'>
         {"  "}   <Field as='textarea' type="text" name="message" placeholder="Message" />

              

            </div>

            <div id="my-radio-group">priority</div> <br />
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="high" />
              High
            </label>
            <br/> 
            <label>
              <Field type="radio" name="picked" value="medium" />
              Medium
            </label>
            <br/>
            <label>
              <Field type="radio" name="picked" value="low" />
              Low
            </label>
            {/* <div>Picked: {values.priority}</div> */}
          </div>
         
            <button type='submit'>Submit</button>
       
          </Form>
          </div>
        )}
      </Formik>
     
        </div>
    )}
export default AddTicket


      