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
import { Tasktodo  } from './task'
import { ShowComponents } from './Show-components'
import { TodoRow } from './helpers/TodoRow'
//import imgs from './assets'

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

const [show,showState]=useState(true)

const [{description},handelInputChange,reset]=useForm({
  description:'', //agregar reminders

})


  
  useEffect(()=>{
    console.log('hey')
   
  },[todos])
  


//--------add-------------------------------------
 const addNewTodo =(e)=>{
   e.preventDefault()
   //console.log("new todo")
   
   const newTodo = {
    userId:new Date().getTime(),
    id:new Date().getTime(),
    title:description,
    complete:false
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

const taskTodo = (completetask)=>(

    todos.filter(task=>task.complete===completetask )
    .map(task=>(
      <TodoRow task={task} key={task.id} />     
    ))
)


 //--------------------------------------------------------------- 
  return (
    < >
    <header className='header'>
      <h1 className='header-title'>My remenders{todos.length} </h1>
      {/* <h2>{todos.filter(t=> !t.complete).length} - task to do</h2>  */}
      <Tasktodo task={todos}/>
      <p>
        {taskTodo()}
      </p>
      
      <form className='form' onSubmit={addNewTodo}>

      <input className='form-input' type='text'
       name='description' 
      placeholder='add reminder' 
      autoComplete='off'
      value={description}
      onChange={handelInputChange}>
      </input>

       <button type='submit'  ><img className='delete' src={mas}></img></button> 
   
       </form>
       <div> <ShowComponents description="Complete Tasks"
            isChecked={show}
            callback={checked =>showState(checked) }      
        />

        </div>
        {/* para mostrar tareas  cmpletadas */}
      {
        show &&(
          <table className=''>
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTodo(true) }
            </tbody>

          </table>
        )
      }
      
    
 </header>
     
      <main className='reminders'>
        <ul className='reminders-list'>
        {
       todos.map((todo,i)=>(
         <li className="reminders-list-element" key={todo.id}><p  className={`${ todo.complete && 'complete'}`}>{i+1}.-{todo.title}</p>
         <button className='add-buton' onClick={()=>deleteTodo(todo.id)}> <img className='delete' src={menos} alt="delete"/> </button>
          <button className='add-buton' onClick={()=>completeTodo(todo.id)}><img className='delete' src={paloma}></img></button>        
         </li>
       ))
     }
        
        </ul>
      {/* <ul className='list-group list-group-flush'>
        {reminders.map((reminder,todo)=> (
           <ReminderUI  key={`Reminder-${reminder.id} ${todo.id}`} 
           reminder={reminder} 
    
           completed/>
        ))}
      </ul> */}
    </main>  
    
    
    
    </>
  )
}

export default App