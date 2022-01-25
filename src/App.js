import React,{ useState,useEffect, useReducer } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ReminderUI } from './helpers/reminder'
import { getRimenders } from './Services/reminders.service'
import { Reminders,addTodo,add} from './Services/reminders.reducer'
import menos from './assets/menos.png'
import mas from './assets/mas.png'
import paloma from './assets/paloma.svg'
import { reducers} from './Services/reducers';
import './App.css';
import { useForm } from './useForm'
function App() {


 //REDUX
 const reminders = useSelector(Reminders)
  // console.log(reminders)
  // const añadir= useSelector(add)

  useEffect(()=>{
    getRimenders() 

  },[])
//--------------------------------------------------------------------------


const [todos,dispatch]=useReducer( reducers,[])



const [{description},handelInputChange,reset]=useForm({
  description:'' //agregar reminders
})


  
  useEffect(()=>{
    console.log('hey')
   
  },[todos])
  


//--------add-------------------------------------
 const addNewTodo =(e)=>{
   e.preventDefault()
   //console.log("new todo")
   
   const newTodo = {
    id:new Date().getTime(),
    desc:description,
    done:false
   }
   const action={
     type:'add',
     payload:newTodo
   }
   dispatch(action)
     reset()//resetear la entrada
 }

 //---------------delete-----------------------------------
 const deleteTodo =(todoId)=>{
  
  console.log(todoId)
  const action={
    type:'delete',
    payload:todoId
  }
  dispatch(action)
    
}

const completeTodo = (todoId)=>{
  console.log(todoId)
  const action={
    type:'complete',
    payload:todoId
  }
  dispatch(action)
    


}

 //--------------------------------------------------------------- 
  return (
    < >
    <header className='header'>
      <h1 className='header-title'>My remenders -{todos.length}</h1>
      <form onSubmit={addNewTodo}>

      <input type='text'
       name='description' 
      placeholder='add reminder' 
      autoComplete='off'
      value={description}
      onChange={handelInputChange}>
      </input>

       <button type='submit'  ><img className='delete' src={mas}></img></button> 
   
       </form>
       
      
    
 </header>
    <div className='row'>
      
      <div className='col-7'>
      <main className='reminders'>
        <ul className='list-group list-group-flush'>
        {
       todos.map((todo,i)=>(
         <li className="reminders-list-element" key={todo.id}><p  className={`${ todo.done && 'complete'}`}>{i+1}.-{todo.desc}</p>
         <button className='add-buton' onClick={()=>deleteTodo(todo.id)}> <img className='delete' src={menos} alt="delete"/> </button>
          <button className='add-buton' onClick={()=>completeTodo(todo.id)}><img className='delete' src={paloma}></img></button>        
         </li>
       ))
     }
     
            
        </ul>
      <ul className='list-group list-group-flush'>
        {reminders.map((reminder,todo)=> (
           <ReminderUI  key={`Reminder-${reminder.id} ${todo.id}`} 
           reminder={reminder} 
    
           completed/>
        ))}
      </ul>
    </main>  
    

      </div>
      <div className='col-5'>
     
      </div>

  </div>
    </>
  )
}

export default App