import React from 'react';
import '../App.css'
export const Tasktodo = props => (
 <h3  className='header-title'>
   Task to do: {props.task.filter(t=> !t.complete).length} 
  </h3>
);
