import React,{ useState,useEffect, useReducer } from 'react'
//import {useDispatch, useSelector} from 'react-redux'
//import { ReminderUI } from './helpers/reminder'
//import { getRimenders } from './Services/reminders.service'
//import { Reminders,addTodo,add} from './Services/reminders.reducer'
import { reducers} from './Services/reducers';
import { Tasktodo  } from './components/task'
import { ShowComponents } from './components/Show-components'
import { TodoRow } from './components/TodoRow'
import { RemindersAdd } from './components/RemindersAdd'
import { TodoListul } from './components/TodoListul';
import './App.css';
//import imgs from './assets'

function App() {

 //REDUX
//  const reminders = useSelector(Reminders)
//   // console.log(reminders)
//   // const añadir= useSelector(add)

//   useEffect(()=>{
//     getRimenders() 

//   },[])
//--------------------------------------------------------------------------
const [todos,dispatch]=useReducer( reducers,[])
const [show,showState]=useState(true)
 
  useEffect(()=>{
     
  },[todos])
  
 //--------add-------------------------------------

const AddToDo = (newTodo)=>{
  dispatch(     { //accion para mandar al reducer
      type:'add',
      payload:newTodo
  })
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
//---------------marcar task como completado------------------- 
const completeTodo = (todoId)=>{
  console.log(todoId)
  const action={
    type:'complete',
    payload:todoId
  }
  dispatch(action)
}
//-----------------show on a component <p></p>---------------------
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
      <div className='header-div'>
      <h1 className='header-title'>Todos: {todos.length} </h1>
      </div>
      <div className='header-task'>
      <Tasktodo task={todos}/>
      </div>
      
      <RemindersAdd AddToDo={AddToDo}/>
       <div className='ShowComponents '> 
        <ShowComponents 
            description="Complete Tasks"
            isChecked={show}
            callback={checked =>showState(checked) }      
        />
        </div>

        {/* para mostrar tareas  cmpletadas */}
        <div className='show-task'>
        {
          show &&(  <ul className='show-list'><li className='show-taske-element'>{taskTodo(true) } {taskTodo()}</li>  </ul>)
         }
        </div>
     
 </header>
     
      <main className='reminders'>
      <TodoListul
      todos={todos}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}/>
        
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