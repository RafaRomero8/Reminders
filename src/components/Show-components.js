import React, { useState } from 'react';
import '../App.css';

export const ShowComponents = props => {
// const [show,setShow]=useState(false)
// const notvisible = {display:show ? 'none' : ''}
// const visible = {display:show ? '' : 'none'}

  return (
  <div className='div-input'>
    {/* <div style={ notvisible}>
    <button onClick={()=>setShow(true)}>Show</button>

    </div>
   */}

    <input
          className='input'
             type="checkbox"
             checked={props.isChecked}
             onChange={e=> props.callback(e.target.checked)}>
                
          </input>
          <label className='input-label'> Show {props.description} </label>

  </div>)
};
