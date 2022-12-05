import { useState } from "react";


export const useForm = ( initialForm ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    //Usar la imaginacion para crear nuestro CustomHook.}
    //Aca es donde vamos a desarrollar la logica de negocio.
    //mantegamos los componente mas limpio. 
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }
    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
