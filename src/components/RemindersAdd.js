import React from 'react';
import { useForm } from '../helpers/useForm.jsx';
import mas from '../assets/mas.png'
import paloma from '../assets/paloma.svg'

export const RemindersAdd = ({AddToDo}) => {

    const [{description},handelInputChange,reset]=useForm({
        description:'', //agregar reminders
      })
      //--------add-------------------------------------
 const addNewTodo =(e)=>{
    e.preventDefault()
    //console.log("new todo")
    
    const newTodo = {
     userId:new Date().getTime(),
     id:new Date().getTime(),
     title:description,
     complete:false
    }
    // const action={
    //   type:'add',
    //   payload:newTodo
    // }
    // dispatch(action)
    AddToDo(newTodo)
      reset()//resetear la entrada
  }
 
      
  return <>
       
       
       <form className='form' onSubmit={addNewTodo}>

          <input className='form-input' type='text'
                 name='description' 
                  placeholder='  add reminder...' 
                   autoComplete='off'
                    value={description}
                      onChange={handelInputChange}>
         </input>

 <button type='submit' className='form-button'  ><img className='delete' src={mas}></img></button> 

 </form>
  </>;
};
