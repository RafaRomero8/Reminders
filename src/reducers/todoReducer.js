
export const todoReducer = (state = [],action)=>{

    switch (action.type) {//action.type es el valor
        case 'addTodo':
            return [...state,action.payload]
        case 'deleteTodo':
            return state.filter(todo => todo.id !== action.payload)//regresa los elemntos del arreglo que cumplan una condicion

        case 'completeToDo':

        return state.map( todo =>
            (todo.id === action.payload)
            ?{...todo,done: !todo.done}
            : todo
        )

        case 'completeTodo':
            return state.map( todo => {
                if(todo.id === action.payload){//action.payload contiene los id
                
                    return{
                        ...todo,
                        done:!todo.done //done es el atributo que contiene mi objeto de false o true
                    } 
                }else {
                    return todo;
               }
                
            })

        default:
            return state
    }

}