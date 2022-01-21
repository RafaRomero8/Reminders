import { createSlice } from "@reduxjs/toolkit";



export const slice = createSlice({
  name: "reminders", //objeto 

  initialState: {//estado inicial(string,numero,arreglo,obj etc)
    list: [],
  },

  reducers: {
    setReminders: (state, { payload: list }) => ({//recibe el state(estado actual), payload lo renombramos con list que recibe un arreglo
      ...state,//se refiere al list:[] de arriba
      list,
    }),

  },
  
});

export const { setReminders} = slice.actions;
//mandamos a llamar nuestro funcion(reducer)  setReminders para ocupar en dispach

export default slice.reducer;//exportar como default nuestro reducer para que la ocupa para crear nuestra store de toda la aplicacion

// Selector para oocuparlo en el hook
export const getReminders = (store) => store.reminders.list;//
//export const Addreminders = (store) => store.reminders.mesage;