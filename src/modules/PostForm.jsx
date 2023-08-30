import React, { useState } from 'react';

import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/MyInput/MyInput';
import {ReactComponent as Add} from '../icons/add.svg';

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
        <MyInput CssModifier = "NewPost" placeholder = {"Новое задание..."} value = {newContent} onChange = {(e) => setNewContent(e.target.value)}/>
        <MyButton CssModifier = 'addBtn' onClick = {creatNewPost}>
            <Add className='icon'/>
        </MyButton> 
        </div>
     );
}
 
export default PostForm;