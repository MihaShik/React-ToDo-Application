import React,{ useMemo} from "react";
import Header from "./modules/Header";
import PostForm from "./modules/PostForm";
import { useState } from "react";
import PostItem from "./modules/PostItem";
import SelectionForm from "./modules/SelectionForm";
import MyInput from "./modules/UI/MyInput/MyInput";
import MyButton from "./modules/UI/MyButton/MyButton";
import MySelect from "./modules/UI/MySelect/MySelect"
import {useSearch, useSearchAndQeary} from "./hooks/useSearchAndQeary"
import PostList from './modules/PostList'
import {ReactComponent as Logo} from './icons/delete_FILL0_wght400_GRAD0_opsz40.svg';
import {ReactComponent as Mogo} from './icons/check_box_outline_blank_FILL0_wght400_GRAD0_opsz40.svg';

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
// Нужно ли выносить функции в отдельный модуль? (эти три выше)
  return (
    <div className="App">
      <MyButton>
                <p>Первый елемент</p>
                <p>Второй елемент</p>
            </MyButton>
      <Header/>
      
      <button className="Test" onClick={()=>{console.log('кнопка')}}><Logo className="logo" onClick={()=>{console.log('лого')}}/><Mogo/></button>
      <PostForm create = {addNewPost}/>
      <SelectionForm
        filter = {filter}
        setFilter = {setFilter}/>
      <PostList posts = {SearchAndQearyPosts} removePost = {removePost} changeStatus = {changeStatus}/>
     
    </div>
  );
}

export default App;
