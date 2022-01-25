import axios from 'axios';
import store from '../Redux/store';
import { setReminders } from './reminders.reducer';

export async function getRimenders(){
    //metodos http get,put,post,delete,add
    
   const url = 'https://jsonplaceholder.typicode.com/todos#'

    try {
       const {data}  = await axios.get(url) 
    //    console.log(data)
      // let pos = 0
       //store.dispatch(setReminders(data.splice(pos,5))) 
       store.dispatch(setReminders(data.slice(-5)) )

       return data

    } catch (error) {
        console.error("error on getRimenders",error)        
           return null
    }
}