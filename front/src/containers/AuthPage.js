import React from "react";
import AuthPage from "../components/AuthPage/AuthPage";

export const AuthPageComponent = () => {
    const initialData = {}; // from the back
    const onFormSubmit = (formData) => {
        // console.log('Form data:', formData);
        console.log(formData);
    };
    return(
        <AuthPage />
    )
};