import React from 'react';
import menos from './assets/menos.png'
import paloma from './assets/paloma.svg'

export const Todolist = ({todo,index,completeTodo,deleteTodo}) => {
  return <li
   className="reminders-list-element" key={todo.id}><p  className={`${ todo.complete && 'complete'}`}>{index+1}.-{todo.title}</p>
         <button className='add-buton' onClick={()=>deleteTodo(todo.id)}> <img className='delete' src={menos} alt="delete"/> </button>
          <button className='add-buton' onClick={()=>completeTodo(todo.id)}><img className='delete' src={paloma}></img></button>        
         
  </li>;
};
