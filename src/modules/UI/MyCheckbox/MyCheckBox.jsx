import React from 'react';
import sc from './MyCheckBox.module.css'

const MyCheckBox = ({content, ...props}) => {

    return ( 
        <div>
        <label>
          <input {...props} type="checkbox" className={sc.MyCheckBox} />
          {content}
        </label>
      </div>
    )
}
  
export default MyCheckBox;