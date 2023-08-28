import React from 'react';
import MyButton from './UI/MyButton/MyButton';
import { ReactComponent as DeleteIcon } from '../icons/delete_FILL0_wght400_GRAD0_opsz40.svg';

const PostItem = ({post, num, remove, changeStatus}) => {
const creatClass = (post) => {
    return (post.statusExecution)?{newClass:'post postExecution' , newBtnColor:'radial-gradient(circle, rgba(0,41,251,1) 0%, rgba(255,255,255,1) 100%)'}:{newClass:'post', newBtnColor:'white'}
}


const newClassAndBtnStyle = creatClass(post)
    return ( 
        <div className={newClassAndBtnStyle.newClass} id = {post.id} >
            
            <MyButton style = {{
                width: 40, 
                height: 40,
                background: newClassAndBtnStyle.newBtnColor,
            }} 
                onClick = {()=>{changeStatus(post.id)}}>
            </MyButton>

            <div className='post__post-content'>
                {num} {post.content} 
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