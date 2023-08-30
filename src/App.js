import React,{ useState} from "react";

import Header from "./modules/Header";
import PostForm from "./modules/PostForm";
import SelectionForm from "./modules/SelectionForm";
import {useSearch, useSearchAndQeary} from "./hooks/useSearchAndQeary"
import PostList from './modules/PostList'

function App() {
const [posts, setPost] = useState([
    {id: 1, content: 'Выучить 100 английских глаголов', statusExecution: false},
    {id: 2, content: 'Отжаться 50 раз', statusExecution: false},
    {id: 3, content: 'Выкурить только 3 сигареты', statusExecution: false},
  ])

const [filter, setFilter] = useState({sort: "", query: ""})
const SearchAndQearyPosts = useSearchAndQeary(posts, filter.sort, filter.query)

const addNewPost = (newPost) => {
    setPost([...posts, newPost])
  }

const removePost = (id) => {
  setPost(posts.filter((post) => post.id !== id))
}

const changeStatus = (id) => {
  setPost(posts.map((post) => {
    if ( post.id === id) {return {...post, statusExecution: !post.statusExecution }}
    return post
  }))
}

const removeAllСompletedPosts = () => {
  setPost(posts.filter((post) => !post.statusExecution ))
}

  return (
    <div className="App">
      <Header/>
      <PostForm create = {addNewPost}/>
      <SelectionForm
        filter = {filter}
        setFilter = {setFilter}
        removeAll = {removeAllСompletedPosts}/>
      <PostList posts = {SearchAndQearyPosts} removePost = {removePost} changeStatus = {changeStatus}/>
     
    </div>
  );
}

export default App;
