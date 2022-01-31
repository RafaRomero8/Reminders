import axios from 'axios';
import store from '../Redux/store';
import { setReminders } from './reminders.reducer';

export async function getRimenders(){
    //metodos http get,put,post,delete,add
    
   const url = 'https://jsonplaceholder.typicode.com/todos#'

    try {
       const {data}  = await axios.get(url) 
     
      // let pos = 0
       //store.dispatch(setReminders(data.slice(0,5)) )
      store.dispatch(setReminders(data.filter(user=>user.id<=5)) )
     // const result = data.filter(word => word.length < 6);
      //store.dispatch(setReminders(result ))
      
   //    store.dispatch(setReminders(data.map( todo => {
   //       if(todo.id <= 5){
   //           return{
   //               ...todo
   //           } 
   //          }
   //   })))

       return data

    } catch (error) {
        console.error("error on getRimenders",error)        
           return null
    }
}
