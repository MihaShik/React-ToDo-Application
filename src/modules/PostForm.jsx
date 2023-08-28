import React from 'react';
import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/MyInput/MyInput';
import { useState } from 'react';
import {ReactComponent as Add} from '../icons/add_FILL0_wght400_GRAD0_opsz40.svg';
const PostForm = ({create}) => {

    const [newContent, setNewContent] = useState('')
    
    const creatNewPost = () => {
      const newPostTo = {
            id: Date.now(),
            content: newContent,
            statusExecution: false,
        }
        create(newPostTo)
        setNewContent('')
    }

 
    return ( 
    <div className='MyForm'>
        <MyInput placeholder = {"Задание"} value = {newContent} onChange = {(e) => setNewContent(e.target.value)}/>
        <MyButton onClick = {creatNewPost}>
            <Add className='icon'/>
        </MyButton>
        </div>
        
     );
}
 
export default PostForm;