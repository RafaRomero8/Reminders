import React from 'react';
import '../App.css';

export const TodoRow = props => (
   <p key={props.task.title} >
       {props.task.title}
   </p>
);
