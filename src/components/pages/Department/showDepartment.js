import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import { useHistory, useParams } from 'react-router'
import { showDepartmentById } from '../../redux/actions/departmentAction'

const DepartmentShow = () => {

    const dispatch = useDispatch()
    const params =  useParams()
    const history = useHistory()

    const departments = useSelector(state =>state.department.department)

    useEffect(()=>{
        dispatch(showDepartmentById(params.id))
    },[])
console.log(params.id, 'IDdepShow')

const handleClickEdit = (id) =>{
    history.push(`/department/${id}`)
}

    return( 
        <div>
<h1>Department Show </h1>
<div> Name :  {departments.department} </div>
        <button onClick={()=> handleClickEdit(departments._id) }>Edit
        
        </button>

        </div>
    )
}

export default DepartmentShow