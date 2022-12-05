//La letra use es un estandar en react, para indentificar que se trata de un hooks.
//Un Custom Hook es simplemente una funcion que puede devolver cualquier cosa que usted necesite.}

import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }
    //Aca podemos colocar la logica de negocio. 
    const decrement = (value = 1) => {
        if( counter === 0) return;
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    //Estamos retornando un objeto.
    //Esponemos una funcion del UseCouter
    return {
        counter,
        increment,
        decrement,
        reset,
    }
}