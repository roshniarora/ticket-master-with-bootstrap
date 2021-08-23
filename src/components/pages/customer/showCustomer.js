import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory , useParams } from 'react-router-dom'
import { showCustomerBYID } from '../../redux/actions/customerAction'


const CustomerShow =()=>{
    const history = useHistory();
    const dispatch= useDispatch()
    const params = useParams();

    const customers = useSelector(state => state.customer.customer) 

useEffect(()=>{
    dispatch(showCustomerBYID(params.id))
},[params.id , dispatch])
console.log(params.id, 'ID')

const handleClickEdit = (id) =>{
    history.push(`/editcustomer/${id}`)
}
    return(
        <div>
           
            <h1>customer detail</h1>
            <div> {customers?.name} </div>
            <div> {customers?.email} </div>
            <button onClick={()=>handleClickEdit(customers?._id)}> Edit</button>
        </div>
    )
}
export default CustomerShow