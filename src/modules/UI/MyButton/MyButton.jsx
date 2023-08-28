import React, { useState, useRef} from 'react';
import sc from './MyButton.module.css'

const MyButton = ({children, onClick,...props}) => {

  

// const [toggle, setToggle] = useState(false)
// const changeToggle = () => {
//     setToggle((toggle) => !toggle)
// }

// const changeIconClass = () => {
// }




    return ( 
        <button type = 'button' onClick={()=>{onClick()}} {...props} className = {children? sc.imageButton: sc.chackBoxBtn}>{children}</button>
     );
}
 
export default MyButton;