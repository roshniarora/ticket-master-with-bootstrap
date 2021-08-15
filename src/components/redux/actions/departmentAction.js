import axios from "../../config/axios"
import *as types  from "../store/constant"


const DepartmentDispatch = (cust, data) =>{
    return{
        type: cust,
        payload: data
    }
}

export const getDepartment = () =>async(dispatch)=>{
    try{
        const res =await axios.get("/department")
        console.log("DepartmentDta", res.data);
dispatch(DepartmentDispatch(
    types.GET_DEPARTMENT,res.data
    ))
    }
    catch(err){
        console.log(err)
    }
}

export const postDepartment = (data,history) =>async(dispatch)=>{
    try{
        const res = await axios.post('/department', data)
       if(res.data)return dispatch(getDepartment())
    }
    catch(err){
        console.log(err)
    }
}

export const showDepartmentById = (id) => async(dispatch) =>{
try{
    const res = await axios.get(`/department/${id}`)
    console.log('department by id' , res.data)
    dispatch(DepartmentDispatch(types.GET_DEPARTMENT_BY_ID, res.data))
}
catch(err){
    console.log(err)
}
}

    // UPDATE DEPARTMENT 

    export const updateDepartmentById = (id , data, history) => (dispatch) => {
        try{
            const res = axios.put(`/department/${id}`, data)
            if(res.data) return (history.push('/department'))
        }
        catch(err){
            console.log(err)
        }
    }


    // DELETE DEPARTMENT

export const deleteDepartmentById = (id) => async(dispatch) =>{
    try{
        const res = await axios.delete(`/department/${id}`)
        console.log('deleteDepartment', res.data )
        dispatch(getDepartment())
    }
    catch(err){
        console.log(err)
    }
}