import React from 'react';
import cs from './MyInput.module.css'

const MyInput = (props) => {
    console.log(props)
    return ( 
        <input className={cs.MyInput} {...props}/>
     );
}
 
export default MyInput;