import React from 'react';
import { Todolist } from './Todolist';


export const TodoListul = ({todos,completeTodo,deleteTodo}) => {
  return <>
       <ul className='reminders-list'>
        {
       todos.map((todo,i)=>(
        <Todolist key={todo.id}
           todo={todo}
          index={i}
          completeTodo={ completeTodo}
          deleteTodo ={deleteTodo}/>
       ))
     } 
        </ul>
  </>;
};
