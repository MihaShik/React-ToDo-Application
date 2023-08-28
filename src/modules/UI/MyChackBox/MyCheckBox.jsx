import React from 'react';

const MyCheckBox = ({props, post}) => {

    const creatClass = (post) => {
        return (post.statusExecution)?{newClass:'post postExecution' , newBtnColor:'radial-gradient(circle, rgba(0,41,251,1) 0%, rgba(255,255,255,1) 100%)'}:{newClass:'post', newBtnColor:'white'}
    }
    
    const newClassAndBtnStyle = creatClass(post)

    return ( 
    <button type='button' {...props}></button>
     );
}
 
export default MyCheckBox;