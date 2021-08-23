import axios from "../../config/axios";
import * as types from "../store/constant";

const EmployeeDispatch = (cust, data) =>{
    return{
        type:cust,
        payload: data
    }
}

 // Get All Employess

export const getEmployee = () => async (dispatch) =>{
    try{
        const res = await axios.get("/employee")
        console.log('getemploy', res.data)
        dispatch(EmployeeDispatch(types.GET_EMPLOYEE, res.data))
    }
    catch(err){
        console.log(err)
    }
}


 // POST Employee

export const postEmployee = (data , history) => async() =>{
    try{
     const res = await axios.post('/employee', data)
     console.log('employee post data', res.data)
     if(res.data) return history.push('/employee')             
    }
    catch(err){
        console.log(err)
    }
}

// GET Employee BY ID

export const showEmployeeById = (id) => async(dispatch) =>{
    try{
        const res = await axios.get(`/employee/${id}`)
        dispatch(EmployeeDispatch(types.GET_EMPLOYEE_BY_ID, res.data))
     }
    catch(err){
        console.log(err)
    }
}

// Edit / updadte a employee

export const updateEmployee = (id,data , history) => async(dispatch) =>{
    try{
     const res = await axios.put(`/employee/${id}`, data)
     console.log('employee edit data', res.data)
     if(res.data) return history.push('/employee')   
     dispatch(getEmployee())          
    }
    catch(err){
        console.log(err)
    }
}

// Delete by id

export const deleteEmployeeById =
(id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/employee/${id}`);
    console.log("Employee_delete", res.data);
    dispatch(getEmployee())
    
  } catch (err) {
    console.log(err);
  }
}