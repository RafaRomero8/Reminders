


export const reducers = (state=[],action) => {
   switch(action.type){
       case 'add':
           return [...state,action.payload]
    case 'delete':
        return state.filter(todo => todo.id !== action.payload)
     case 'complete':
         return state.map( todo => {
            if(todo.id === action.payload){//action.payload contiene los id
                return{
                    ...todo,
                    complete:!todo.complete //done es el atributo que contiene mi objeto de false o true
                } 
            }else {
                return todo;
           }
        })
        case 'showtodo':
    //   
            return state.filter(t=> !t.complete).length
    default:
        return state;
        
   }
};
