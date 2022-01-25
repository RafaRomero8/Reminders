import '../App.css';



export function ReminderUI({reminder}) {
  const {completed,id,title,userId} = reminder
  return(
    <li className="reminders-list-element"> 
    <p>{id}.-</p>
         <p>
           {title} {completed? <span>;)</span>:<></>}
         </p>
        
     </li>
      
  ) 
}
