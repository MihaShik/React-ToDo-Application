import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group"

import PostItem from './PostItem';

const PostList = ({posts, removePost, changeStatus}) => {
    return ( <div className='post-list'>
        <TransitionGroup>
            {posts.map((post, index) => 
                <CSSTransition
                    key = {post.id}
                    timeout={300}
                    classNames="post"
                >
                    <PostItem post = {post}  key = {post.id} num = {index + 1} remove = {removePost} changeStatus = {changeStatus}/>
                </CSSTransition>)}
        </TransitionGroup>
        </div>
     );
}
 
export default PostList;