import { createContext, useState } from "react";

const FormValuesContext = createContext({});

export const FormValuesProvider = ({ children }) => {

    const [formValues, setFormValues] = useState({});
    const setFormValue = (value, key) => {
        setFormValues(currentFormValues => ({ ...currentFormValues, [key]: value }));
    };

    const resetFormValues = () => {
        setFormValues({});
    };

    const contextObject = {
        formValues,
        setFormValues,
        setFormValue,
        resetFormValues,
    }
    return (
        <FormValuesContext.Provider value={contextObject} >
            {children}
        </FormValuesContext.Provider>
    )
}

export default FormValuesContext;