import React, { useState, useRef} from 'react';
import sc from './MyButton.module.css'

const MyButton = ({CssModifier, children,...props}) => {

    const newClass = 
        CssModifier
        ?
        [ sc.imageButton, sc[CssModifier]].join(" ")
        :
        sc.imageButton

    return ( 
        <button type = 'button' {...props} className = {newClass}>{children}</button>
     );
}
 
export default MyButton;