import React from 'react';
import './App.css'
export const Tasktodo = props => (
 <h2>  
     {props.task.filter(t=> !t.complete).length}task to do
  </h2>
);
