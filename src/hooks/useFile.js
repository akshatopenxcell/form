import { useState } from "react";


const useFile = (validateValue) => {


    const [enteredValue, setEnteredValue] = useState(null);
    const [isTouched, setIsTouched] = useState(false);


    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;


    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.files[0])

    }

    const inputBlurhandler = (event) => {
        setIsTouched(true);
    }

    const reset= ()=>{
        setEnteredValue(null);
        setIsTouched(false);

    }

    return { value: enteredValue,
            isValid:valueIsValid,
            hasError: hasError ,valueChangeHandler,inputBlurhandler,
            reset}
}

export default useFile;