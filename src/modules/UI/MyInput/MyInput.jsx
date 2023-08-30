import React from 'react';
import cs from './MyInput.module.css'

const MyInput = ({CssModifier, ...props}) => {

    const newClass = 
        CssModifier
        ?
        [cs[CssModifier], cs.MyInput].join(" ")
        :
        cs.MyInput
    
    return ( 
        <input className = {newClass} {...props}/>
     );
}
 
export default MyInput;