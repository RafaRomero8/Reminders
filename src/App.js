import React,{ useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ReminderUI } from './helpers/reminder'
import { getRimenders } from './Services/reminders.service'
import { getReminders as getREmindersSelector} from './Services/reminders.reducer'

import {addTodo, completeToDo, deleteTodo} from './slice/reminders'


function App() {

  
 //const reminders = useSelector(getREmindersSelector)//se importa useSelector de react-redux
 const reminders = useSelector(getREmindersSelector)



  useEffect(()=>{
    getRimenders() 

  },[])
  

const dispatch = useDispatch()


   function addtoDo() {
      dispatch(addTodo())
   console.log("hola")
  }

  const  deletetoDo = ()=>{
    dispatch(deleteTodo())
    console.log({deleteTodo})

  }
  
  return (
    < >
    <header className='header'>
      <h1 className='header-title'>My remenders</h1>
      <button className='add-buton' onClick={addtoDo}>+</button>
      <button className='add-buton' onClick={ deletetoDo}>-</button>
      </header>
    <main className='reminders'>
      <ul className='reminders-list'>
        {reminders.map((reminder)=> (
           <ReminderUI  key={`Reminder-${reminder.id}`} 
           reminder={reminder}/>
        ))}
      </ul>
    </main>  
    </>
  )
}

export default App
