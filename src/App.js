import React,{ useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getRimenders } from './Services/reminders.service'
import { Reminders,addTodo,removeTodo,completeToDo} from './Services/reminders.reducer'
//----------------------------------------------------------------
import { Tasktodo  } from './components/task'
import { ShowComponents } from './components/Show-components'
import { TodoRow } from './components/TodoRow'
import { RemindersAdd } from './components/RemindersAdd'
import { TodoListul } from './components/TodoListul';
import './App.css';

//import imgs from './assets'

function App() {

 //REDUX
 const reminders = useSelector(Reminders)
 const dispatch= useDispatch();
  // console.log(reminders)
  // const añadir= useSelector(add)

  useEffect(()=>{
    getRimenders() 

  },[])

//--------------------------------------------------------------------------
//const [todos,dispatch]=useReducer( reducers,[])
const [show,showState]=useState(true)

 
  useEffect(()=>{
     
  },[reminders])
  
 //--------add-------------------------------------
const add = (newTodo) =>{
  
  dispatch(addTodo(newTodo))
  console.log({reminders})
}

 //---------------delete-----------------------------------
 const deleAsk =(newTodo)=>{
  
  dispatch(removeTodo(newTodo))
  console.log(newTodo) 
}
//---------------marcar task como completado------------------- 
const completeAsk  = (newTodo)=>{

  dispatch(completeToDo(newTodo))
  console.log(newTodo)
}
//-----------------show on a component <p></p>---------------------
const taskTodo = (completetask)=>(

    reminders.filter(task=>task.complete===completetask )
    .map(task=>(
      <TodoRow task={task} key={task.id} />     
    ))
)
//---------------------------eidt-------------------



 //--------------------------------------------------------------- 
  return (
    < >
    
    <header className='header'>
      <div className='header-div'>
      <h1 className='header-title'>Todos: {reminders.length} </h1>
      </div>
      <div className='header-task'> 
      <Tasktodo task={reminders}/>
      </div>
      
      <RemindersAdd  AddToDo={add}/>
     
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
                  show &&(  <ul className='show-list'><li className='show-taske-element'>{taskTodo(true) } </li>  </ul>)
         }
        </div>
     
 </header>
     
      <main className='reminders'>
      <TodoListul
      reminders={reminders}
      deleteTodo={deleAsk}
      completeTodo={completeAsk }
     />  
     
    </main> 
   
    </>
  )
}

export default App