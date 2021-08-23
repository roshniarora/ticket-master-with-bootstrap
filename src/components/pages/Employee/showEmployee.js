import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory , useParams} from 'react-router-dom'


import { showEmployeeById } from "../../redux/actions/employeeAction";

const EmployeeShow =()=>{
    const history = useHistory();
    const dispatch= useDispatch()
    const params = useParams();

    const employees = useSelector(state => state.employee.employee)

useEffect(()=>{
    dispatch(showEmployeeById(params.id))
},[params.id , dispatch])
console.log(params.id, 'ID')

// const handleClickEdit = (id) =>{
//     history.push(`/showcustomer/${id}`)
// }
    return(
        <div>
           
            <h1>employee detail</h1>
            <div>{employees.name} </div>
            <div> {employees.email} </div>
            {/* <button onClick={()=>handleClickEdit(employees._id)}> Edit</button> */}
        </div>
    )
}
export default EmployeeShow