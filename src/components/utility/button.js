import React from 'react'
import './button.scss'



const Button = (props) =>{
    console.log(props)
    return(
        <button className= {props.custStyle} onClick={props.handleAction}>{props.title}</button>
                
        )

}
export default Button