import React,{ useState,useEffect } from 'react'
import {useSelector} from 'react-redux'
import { ReminderUI } from './helpers/reminder'
import { getRimenders } from './Services/reminders.service'
import {getReminders as getREmindersSelector} from './Services/reminders.reducer'
//import {Addreminders} from './Services/reminders.reducer'


function App() {

  //ya no se ocupa useState porque vamos a utilizar redux
 // const [reminders,setReminders] = useState([""])

 //REDUX
 const reminders = useSelector(getREmindersSelector)//se importa useSelector de react-redux


  // useEffect(() => {//para treaer la api
  //   //se ejecuta en dos condiciones 1.-alprincipio de la app 2.-cuando observe una variable
  //   getRimenders().then((data)=> setReminders(data))
  // },[])

  //REDUX
  useEffect(()=>{
    getRimenders() //nos ahorramos el .then(data ...)

  },[])
  // useEffect(()=>{

  //    Addreminders()
  //   console.log({reminders})
  // },[])

  const add = () =>{
    // setReminders([...reminders,{title:`Reminders ${reminders.length + 1}`,id:reminders.length + 1}])
    //...reminders apunta al mismo espacio de memoria,el valor puede ser diferente
    //contiene lo que ya tenia el arreglo anterior pero ademas una nueva entrada ,sobreescribe el anterior
   
    console.log({reminders})
  }

  return (
    < >
    <header className='header'>
      <h1 className='header-title'>My remenders</h1>
      <button className='add-buton' onClick={add}>+</button>
      </header>
    <main className='reminders'>
      <ul className='reminders-list'>
        {reminders.map((reminder)=> (
           <ReminderUI  key={`Reminder-${reminder.id}`} 
           reminder={reminder} 
           completed/>
        ))}
      </ul>
    </main>  
    </>
  )
}

export default App
