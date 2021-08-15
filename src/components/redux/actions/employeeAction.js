import axios from "axios"
import { types } from "sass"

const EmployeeDispatch = (cust, data) =>{
    return{
        types:cust,
        payload: data
    }
}

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