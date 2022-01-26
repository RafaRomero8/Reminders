import React from 'react';
import '../App.css';

export const ShowComponents = props => {
  return (<div className='div-input'>
          <input
          className='input'
             type="checkbox"
             checked={props.isChecked}
             onChange={e=> props.callback(e.target.checked)}>
                
          </input>
          {/* <button
           type="submit"
           checked={props.isChecked}
   
           onChange={e=> props.callback(e.target.checked)}
          >Show Tasks</button> */}
          <label className='input-label'> Show {props.description} </label>

  </div>)
};
