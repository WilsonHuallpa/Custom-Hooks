import { useEffect, useReducer } from 'react';
import { todoReduce } from '../08-useReduce/todoReduce';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const initialState = [];

export const useTodo = () => {
    
    //TodoReduce, simplememte estamos pasando la referencia de la funcion. 
    //init: Es la funcion  que inicializa el reducer. 
    const [todos, dispatch] = useReducer( todoReduce, initialState, init);
    //yo necesito ejecutar algo cuando el estado de mi todo cambia. 
    useEffect(() => {
      //En el localStorega solo podemos de manda string.
      localStorage.setItem('todos',JSON.stringify( todos ));
      //Condicional el useEffect solo se activa cuando se modifica el todos. 
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action =  {
            type: '[TODO] Add Todo',
            payload: todo, 
        }
        //Es la funcion que yo voy usar para mandar el mundial.
        //Despacho la acción
        dispatch( action );
    }

    const hanbleRemoveTodo = (id) => {

        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const hanbleToggleTodo = (id) => {

        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }
    
    return {
        todos,
        handleNewTodo,
        hanbleRemoveTodo,
        hanbleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
    }
}
