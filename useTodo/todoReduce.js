
export const todoReduce = ( initialState = [], action ) =>{
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        case '[TODO] Remove Todo':
            //Retonar el mismo estado del todos menos el todo que quiero eliminar. 
            //Usaremos el metodo filter para regresar un nuevo arreglo. 
            return initialState.filter( todo => todo.id !== action.payload ); 
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                //Si id de un todo es igual a una action payload.
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                //Siempre va estar retornando un todo. 
                return todo;
            })
        default:
            return initialState;
    }
}