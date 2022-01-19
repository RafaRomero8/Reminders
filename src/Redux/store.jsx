import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
//reducer tiene adentro reminders del archivo reducer.jsx

const store = configureStore({//configureStore recibe un objeto y debe tenr un atributo en este caso reducer
  reducer,
});

export default store;
//debemos de ir  nuestro index.js y poner ahi nuestro store