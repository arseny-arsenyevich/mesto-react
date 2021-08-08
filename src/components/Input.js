import React, { useCallback, useEffect, useState } from "react"

function Input ({ 
                name,
                type, 
                inputRef,
                validities,
                setButtonState,
                placeholder, 
                minLength, 
                maxLength,
                isOpen
            }) {
    const [inputError, setInputError] = useState('');
    const [justOpened, setJustOpened] = useState(null);
    const [inputTimer, setInputTimer] = useState(false);

    let validationTimer

    const checkFormValidity = (evt) => {
        // console.log(inputRef.current.validity.valid);
        if (validities.some(a => !a.current.validity.valid)) {
            setInputError(evt.target.validationMessage);
            // console.log(evt.target.validationMessage);
            setButtonState(true);
        }
        else {
            setInputError('');
            setButtonState(false);
        }
    }
    
    const handleChange = useCallback((e) => {
        clearTimeout(validationTimer);
        setInputTimer(false);
        validationTimer = setTimeout(() => setInputTimer(true), 1000)
        setJustOpened(true);
        checkFormValidity(e);
    }, [])

    useEffect(() => {
        setJustOpened(null);
        inputRef.current.addEventListener('input', handleChange);

        return () => inputRef?.current?.removeEventListener('input', handleChange);
    }, [isOpen])
    
    return (            
    <label className='form__field'>
    <input 
        type={type} 
        className={`form__input ${ 
            (inputTimer) &&
            (justOpened !== null) && 
            (!inputRef.current?.validity.valid && 'form__input-invalid')}
            `} 
        id={`form-${name}`}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        ref={inputRef}
        required
    />
    <span className={`form__error ${
        (inputTimer) &&
        (justOpened !== null) && 
        (!inputRef.current?.validity.valid && 'form__error_active')}`} >{inputError}</span>
    </label>)
}

export default Input