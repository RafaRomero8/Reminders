import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "reminders", //objeto 

  initialState: {//estado inicial(string,numero,arreglo,obj etc)
    list: []
  },

  reducers: {
    setReminders: (state , { payload: list }) => ({//recibe el state(estado actual), payload lo renombramos con list que recibe un arreglo
      ...state,//se refiere al list:[] de arriba
      list,
    })
        ,
         addTodo:(state,{payload})=>{
         
        return  {
          ...state,
           list:[...state.list,payload] //regeresa estado actual,regresa u clon de list
        }
          
       },
     
       removeTodo: (state, { payload: todoId})=>({
        ...state,
        list: state.list.filter( todo=>todo.id!==todoId )
      }),

      completeToDo:(state,{ payload: todoId})=>({
        list:state.list
        .map( todo => (todo.id === todoId)
            ?{...todo,complete: !todo.complete}
             : todo
           )
        }),


        editReminders: (state, {payload:todoid})=>({
          ...state,
          list: state.list
          .map(e => (e.id === todoid) ?(todoid):e)
         
        }),
      

     
  
  },
 

});

export const { setReminders,addTodo,removeTodo,completeToDo,editReminders} = slice.actions;

 export default slice.reducer;

// // Selector para oocuparlo en el hook
 export const Reminders = (store) => store.reminders.list;//

