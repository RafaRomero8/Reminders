import axios from 'axios';
import store from '../Redux/store';
import { setReminders } from './reminders.reducer';

export async function getRimenders(){
    //metodos http get,put,post,delete,add
    
   const url = 'https://jsonplaceholder.typicode.com/todos#'

    try {
       const {data}  = await axios.get(url) 
       console.log(data)
       store.dispatch(setReminders(data)) 

       return data

    } catch (error) {
        console.error("error on getRimenders",error)        
           return null
    }
}