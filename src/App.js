import React,{ useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ReminderUI } from './helpers/reminder'
import { getRimenders } from './Services/reminders.service'
import { Reminders,addTodo,add} from './Services/reminders.reducer'
import menos from './assets/menos.png'
import './App.css';
function App() {


 //REDUX
 const reminders = useSelector(Reminders)
  // console.log(reminders)
  // const añadir= useSelector(add)

  useEffect(()=>{
    getRimenders() 

  },[])


  const [reminder,setreminder]=useState({
      name:'',
      title:'',
  })
   const {name, title}=reminder
 
  //REDUX
  
  useEffect(()=>{
    console.log('hey')
   

  },[reminder])
  
 const inputChange=({target})=>{
  //  console.log( e.target.name)
  //  console.log( e.target.value)
   setreminder({
     ...reminder,
     [target.name]:target.value

   })

 }
  
  return (
    < >
    <header className='header'>
      <h1 className='header-title'>My remenders</h1>
      <input type='text'
       name='name' 
      placeholder='add reinder' 
      autoComplete='off'
      value={name}
      onChange={inputChange}></input>

       <button className='add-buton' >+</button> 
      
      {/* <button className='add-buton' onClick={add}>-</button>
      */}
    
 </header>
    <div className='row'>
      
      <div className='col-7'>
      <main className='reminders'>
      <ul className='list-group list-group-flush'>
        {reminders.map((reminder)=> (
           <ReminderUI  key={`Reminder-${reminder.id}`} 
           reminder={reminder} 
           completed/>
        ))}
      </ul>
    </main>  
    

      </div>
      <div className='col-5'>
      <img className='delete' src={menos} alt="delete"/> 
      </div>

  </div>
    </>
  )
}

export default App