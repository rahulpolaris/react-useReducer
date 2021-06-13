import React from 'react'


const Button = ({type,name,handleSubmit,disabled})=>{

    // async handleSubmit(e){
    //     e.preventDefault()

    // }
    return <button type={type} onClick={handleSubmit} disabled={disabled}>{name}</button>
}
export default Button