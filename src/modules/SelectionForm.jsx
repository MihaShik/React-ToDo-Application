import React, { useState } from "react";
import {TransitionGroup, CSSTransition, SwitchTransition } from "react-transition-group"

import MySelect from "./UI/MySelect/MySelect";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

import { ReactComponent as FilterOn} from "../icons/filter_list_on.svg";
import { ReactComponent as FilterOff} from "../icons/filter_list_off.svg";

const SelectionForm = ({setFilter, filter}) => {
const [FormVisibility, setFormVisibility] = useState(true)

const changeVisibility = () => {
  setFormVisibility(()=>!FormVisibility)
}

return ( 

<div className = "wrap">
  <SwitchTransition mode = {'out-in'}>
    <CSSTransition
       key={FormVisibility}
       timeout={300}
       classNames={'fade'}
    >
      { FormVisibility 
        ?
        <div className="cont">
          <MyButton onClick={changeVisibility}>
            <FilterOn/>
          </MyButton>
        </div>
        :
        <div className="cont">
          <MyButton onClick={changeVisibility}>
            <FilterOff/>
          </MyButton>
  
          <form action="" className="selection-form">
            <MySelect 
              defaultOption = {'Выбрать по:'} 
              options = {[
                {value: true, name: 'Выполненные'},
                {value: false, name: 'Не выполненные'},
                {value: '', name: 'Все'},
              ]}
              value = {filter.sort}
              onChange = {selectedSort =>  setFilter({...filter, sort: selectedSort})}
            />
            <MyInput placeholder = {"Поиск.."}
              CssModifier = "Filter" 
              value={filter.query} 
              onChange = {(e)=> setFilter({...filter, query: e.target.value})}
            />
          </form> 
        </div>
        }
     
    </CSSTransition>
  </SwitchTransition>
</div>
 



  
  //   FormVisibility? 
  //   <div className="Burgr">
  //     <MyButton onClick={changeVisibility}>
  //       <FilterOn/>
  //     </MyButton>
  //   </div>
  // :
    // <div className="Burgr">
    //   <MyButton onClick={changeVisibility}>
    //     <FilterOff/>
    //   </MyButton>

    //   <form action="" className="selection-form">
    //     <MySelect 
    //       defaultOption = {'Выбрать по:'} 
    //       options = {[
    //         {value: true, name: 'Выполненные'},
    //         {value: false, name: 'Не выполненные'},
    //         {value: '', name: 'Все'},
    //       ]}
    //       value = {filter.sort}
    //       onChange = {selectedSort =>  setFilter({...filter, sort: selectedSort})}
    //     />
    //     <MyInput placeholder = {"Поиск.."}
    //      CssModifier = "Filter" 
    //      value={filter.query} 
    //      onChange = {(e)=> setFilter({...filter, query: e.target.value})}
    //      />
    //   </form> 
    // </div>
  
  );
}
 
export default SelectionForm;




// <div>
// <CSSTransition
//   in = {!FormVisibility}
//   timeout={500}
//   classNames={'Burgr'}
//   mountOnEnter
//   unmountOnExit
// >
// <div className="Burgr">
//   <MyButton onClick={changeVisibility}>
//     <FilterOn/>
//   </MyButton>
// </div>
// </CSSTransition>

// <CSSTransition
//   in = {FormVisibility}
//   timeout={500}
//   classNames={'Burgr'}
//   mountOnEnter
//   unmountOnExit
// >
// <div className="Burgr">
//   <MyButton onClick={changeVisibility}>
//     <FilterOff/>
//   </MyButton>

//   <form action="" className="selection-form">
//     <MySelect 
//       defaultOption = {'Выбрать по...'} 
//       options = {[
//         {value: true, name: 'Выполненные'},
//         {value: false, name: 'Не выполненные'},
//         {value: '', name: 'Все'},
//       ]}
//       value = {filter.sort}
//       onChange = {selectedSort =>  setFilter({...filter, sort: selectedSort})}
//     />
//     <MyInput placeholder = {"Поиск.."} CssModifier = "Filter" value={filter.query} onChange = {(e)=> setFilter({...filter, query: e.target.value})}/>
//   </form> 
// </div>
// </CSSTransition>
// </div>