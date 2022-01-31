import  {useState} from 'react'

export const useForm = (initialState = {}) => { //nuestro estado inicial sera un objeto vacio
    //sino nos manda nada en el formulario no queremos que nos marque error

    const [values, setvalues] = useState(initialState)

    const reset = ()=>{//para que resiva los nuevos valores
        setvalues(initialState)
    }

    const handelInputChange = ({target})=>{
        //para que se vea en el input lo que estamos escribiendo debemos de llamar al setFormState
        setvalues({
            ...values,
            [target.name]:target.value
        })
    }

    
    return [values,handelInputChange,reset]//podemos regresarlo como un arreglo,o como un obeto dependiendo de lo que se requiera 
    //se regresa el estado del formulario(values) y el segundo handelInputChange
    
    //tambien se puedde mandar directo , asi.. aunque no es recomendable a la vista

    // return [values,({target})=>{

    //     setformState({
    //         ...values,
    //         [target.name]:target.value
    //     })

    // }]
}
