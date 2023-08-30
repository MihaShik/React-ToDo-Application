import React from 'react';

import MyButton from './UI/MyButton/MyButton';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import MyCheckBox from '../modules/UI/MyCheckbox/MyCheckBox'

const PostItem = ({post, num, remove, changeStatus}) => {

const creatClass = (post) => {
    return (post.statusExecution)?{newClass:'post postExecution'}:{newClass:'post'}
}
const postsClass = creatClass(post)
    return ( 
            <div className={postsClass.newClass} id = {post.id} >
            <div>
                 <MyCheckBox num = {num} postContent = {post.content} onClick = {()=>{changeStatus(post.id)}}/>
            </div>
            <div className='post__post-content'>
                {num}. {post.content}
            </div>
            <div className='post__post-btn'>
                <MyButton onClick = {()=>{remove(post.id)}}>
                    <DeleteIcon className='icon'/>
                </MyButton>
            </div>

        </div>
     );
}
 
export default PostItem;