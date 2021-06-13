import React from 'react'
// eslint-disable-next-line 
const Input=({label,type,val,disptchContent})=>{
    // function handleChange(e){
    //     changeVal(e.currentTarget.value)
    // }
return <div className="Input">
    <label htmlFor={label}>{label}:</label>
    <input type={type} name={label} value={val} onChange={disptchContent} />
</div>
}
export default Input