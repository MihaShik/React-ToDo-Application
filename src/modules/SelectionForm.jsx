import React from "react";
import MySelect from "./UI/MySelect/MySelect";
import MyButton from "./UI/MyButton/MyButton";
import { useState } from "react";
import MyInput from "./UI/MyInput/MyInput";

const SelectionForm = ({setFilter, filter}) => {

  // const [selectedSort, setselectedSort] = useState('')
  // const [selectedQuery, setSelectedQuery] = useState('')

    return ( 
       <form action="" className="selection-form">
       <MySelect 
        defaultOption = {'Выбрать по...'} 
        options = {[
          {value: true, name: 'Выполненные'},
          {value: false, name: 'Не выполненные'},
          {value: '', name: 'Все'},
        ]}
        value = {filter.sort}
        onChange = {selectedSort =>  setFilter({...filter, sort: selectedSort})}
      />
       <MyInput value={filter.query} onChange = {(e)=> setFilter({...filter, query: e.target.value})}/>
       </form>
        
     );
}
 
export default SelectionForm;