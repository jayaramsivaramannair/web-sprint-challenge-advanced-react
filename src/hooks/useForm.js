// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage.js";

export const useForm = (initialValue) => {
    const [values, setValues] = useLocalStorage('formValues', initialValue);

    const handleChanges = (evt) => {
        console.log(values);
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        });
    };

    return [values, handleChanges];
}
