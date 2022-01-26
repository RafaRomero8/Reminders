import React from 'react';
import '../App.css';

export const TodoRow = props => (
   <tr key={props.task.title} >
       <td>{props.task.title}</td>
   </tr>
);
