import React from 'react';
import menos from '../assets/trash-delete-bin.svg'
import paloma from '../assets/paloma.svg'


import '../App.css'

export const Todolist = ({todo,index,completeTodo,deleteTodo,editTodo}) => {
 
  return <li
   className="reminders-list-element" key={todo.id}><p  className={`${ todo.complete && ''}`}>{index+1}.-{todo.title}</p>
   <div   className=''>
   <button className='add-buton' onClick={()=>deleteTodo(todo.id)}> <img className='delete' src={menos} alt="delete"/> </button>
          <button className='add-buton' onClick={()=>completeTodo(todo.id)}><img className='complete' src={paloma}></img></button>        
  
         
   </div>
        
  </li>;
};
