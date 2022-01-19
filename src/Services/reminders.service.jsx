import axios from 'axios';
import store from '../Redux/store';
import { setReminders } from './reminders.reducer';

export async function getRimenders(){
    //metodos http get,put,post,delete,add
    
   const url = 'https://jsonplaceholder.typicode.com/todos#'
    //axios.get(url)  llamada api con metodo get pide url y config(objeto)
    //errores
    //------------------------------
    //PROMESA
    // let data 
    // axios.get(url)
    // .then((response)=>{ //response es un objeto que tiene axios
    //     data=response.data
    //     console.log(response.data)
    // })
    // .catch((error) =>{
    //     console.error("error on getRimenders",error)            
    // })
    //---------------------------------

    try {
       const {data}  = await axios.get(url) 
       console.log(data)
       store.dispatch(setReminders(data)) //dispatch para poder lanzar un evento un action
       //setReminders recibe un payload,un arreglo que seria response.data

       //getState  sirve para poder acceder al estado actual de la aplicación
       return data
    } catch (error) {
        console.error("error on getRimenders",error)        
           return null
    }
}