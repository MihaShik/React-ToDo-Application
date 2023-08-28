import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, removePost, changeStatus}) => {
    return ( <div className='post-list'>
        {posts.map((post, index) => <PostItem post = {post}  key = {post.id} num = {index} remove = {removePost} changeStatus = {changeStatus}/>)}
        </div>
     );
}
 
export default PostList;