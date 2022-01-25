import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
  name: "reminders", //objeto 

  initialState: {//estado inicial(string,numero,arreglo,obj etc)
    list: [{
      completed: true,
        id: 202,
         title: "consequuntur aut ut fugit si",
         userId: 323
    }]
  },

  reducers: {
    setReminders: (state , { payload: list }) => ({//recibe el state(estado actual), payload lo renombramos con list que recibe un arreglo
      ...state,//se refiere al list:[] de arriba
      list,
    })

  },
  addTodo:(state,action)=>{
    //return setReminders([...state,{title:`Reminders ${state.length + 1}`,id:state.length + 1}])
   //console.log({reminders})
  return [...state,action.payload]
   //return {...state,add:[action.payload]}
 },
 deleteTodo:(state,action)=>{
  return state.filter(todo => todo.id !== action.payload)
 },
 completeToDo:(state,action)=>{

  return state.map( todo => (todo.id === action.payload)
    ?{...todo,done: !todo.done}
    : todo
)
 }
});

export const { setReminders,addTodo,deleteTodo,completeToDo} = slice.actions;
//mandamos a llamar nuestro funcion(reducer)  setReminders para ocupar en dispach

export default slice.reducer;//exportar como default nuestro reducer para que la ocupa para crear nuestra store de toda la aplicacion

// Selector para oocuparlo en el hook
export const Reminders = (store) => store.reminders.list;//
 export const add = (store) => store.reminders.addTodo;
