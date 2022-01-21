import {combineReducers, createStore} from 'redux'
import { todoReducer } from '../reducers/todoReducer'


//combineReducers
const reducers = combineReducers({
    //podemos añadir aqui nuestro nuevos reducers
    addTodo:todoReducer
    
})
export const store = createStore(reducers)//recibe nuestro reducer