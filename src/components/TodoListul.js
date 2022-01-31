import React from 'react';
import { Todolist } from './Todolist';


export const TodoListul = ({reminders,completeTodo,deleteTodo,editTodo}) => {
  return <>
       <ul className='reminders-list'>
        {
          reminders.map((todo,i)=>(
         <Todolist key={todo.id}
           todo={todo}
          index={i}
          completeTodo={ completeTodo}
          deleteTodo ={deleteTodo}
          editTodo={editTodo}/>
       ))
     } 
        </ul>
        
  </>;
};
