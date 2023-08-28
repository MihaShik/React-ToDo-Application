import React from "react";
import cs from './MySelect.module.css'

const MySelect = ({defaultOption, options, onChange, value}) => {
    return ( 
        
            <select 
            className = {cs.mySelect}
            value={value}
            onChange = {(e)=>{onChange(e.target.value)}}>
                <option value = "" disabled>{defaultOption}</option>
               {options.map((opt) => <option value = {opt.value} key = {opt.name}> {opt.name} </option>)}
            </select>
        
     );
}
 
export default MySelect;