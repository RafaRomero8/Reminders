

export const reducers = (state=[],action) => {
   switch(action.type){
       case 'add':
           return [...state,action.payload]
    case 'delete':
        return state.filter(todo => todo.id !== action.payload)

     case 'complete':
         return state.map( todo => {
            if(todo.id === action.payload){
                return{
                    ...todo,
                    complete:!todo.complete 
                } 
            }else {
                return todo;
           }
        })
       
    default:
        return state;
        
   }
};



// const store =[
//     {
//        id:2,
//        name:'rafa',
//        alias:'spiderman',
//     },
//     {
//        id:3,
//        name:'rafaaaa',
//        alias:'tony',
//     },
//     {
//        id:4,
//        name:'rafajjj',
//        alias:'hulk',
//     },
//     {
//        id:5,
//        name:'rafahhh',
//        alias:'extraño',
//     },
//     {
//        id:6,
//        name:'rafaewe',
//        alias:'black',
//     }
 
 
// ]
// const users = store.filter((user,)=>(user.id<=4))
// console.log(users)