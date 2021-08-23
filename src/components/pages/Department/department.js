import React , {useEffect}from "react";
import { Formik, Form, Field } from "formik";
import {useDispatch, useSelector} from 'react-redux'
import { deleteDepartmentById, getDepartment , postDepartment } from "../../redux/actions/departmentAction";
import { useHistory } from "react-router-dom";

const Department = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const departments = useSelector(state =>state.department)

useEffect(()=>{
  dispatch(getDepartment())
  // props.getDepartment()
}, [dispatch]);

console.log('depCompData', departments)

// const handleClick = () => {
//   history.push("/department");
//   console.log("clickDepartment");
// };

const handleClickShow = (id) =>{
  history.push(`/department/${id}`)
}

const handleClickDelete = (id) =>{
  if(window.confirm('Are you sure want to delete this item')){
    return dispatch(deleteDepartmentById(id))
  }
  else{
    return ('something went wrong')
  }
}
return (
    <div>
       <div>
        <table class="table table-borderless">
          {
            departments && departments?.departments.map((ele)=>(
              <tr>
                <td> {ele.department}  
                <button onClick={()=>handleClickShow(ele._id)}>show</button> 
                <button onClick={()=>handleClickDelete(ele._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
      <h1> Department</h1>
      <Formik
        initialValues={{
          department: "",
        }}
        onSubmit={(values, {resetForm}) => {
          console.log(values);
          resetForm({values:''})
          dispatch(postDepartment(values, history))
        }}
      >
        {({ handleSubmit }) => (
          
          <Form onSubmit={handleSubmit}>
            {/* <label> Add Department</label> */}
           
            <Field
              type="text"
              name="department"
              //  onChange={handleChange}
              //  onBlur={handleBlur}
              //  value={values.email}
            />
            
             <button type="submit">Add</button>
          </Form>
          
        )}
      </Formik>
     
    
     
    </div>
    
  );
};


export default Department
