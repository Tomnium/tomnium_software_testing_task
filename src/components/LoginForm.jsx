import React from 'react';
import {Form, Field} from 'react-final-form';
import '../App.css'
import TextInput from "./TextInput";
import LoadingButton from '@mui/lab/LoadingButton';
import {composeValidators, emailValidation, required} from "../validators/validators";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {initializeApp} from "firebase/app";

initializeApp({
    apiKey: "AIzaSyB-8AA8C1LNRf_zJNzAhTLnLcLRbW4xoXc",
    authDomain: "qa-test-59375.firebaseapp.com",
    projectId: "qa-test-59375",
    storageBucket: "qa-test-59375.appspot.com",
    messagingSenderId: "417339340326",
    appId: "1:417339340326:web:fe88e3c477cd25c3ac18e7",
    measurementId: "G-93GKJ7C9MJ"
});

const auth = getAuth();

const LoginForm = () => {

    const submitForm = async (values) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
            console.log(userCredential.user.email);
            alert(JSON.stringify(values, null, 2));
        } catch (error) {
            const errorMessage = error.message;
            return { errorMessage };
        }
    }

    return (
        <>
            <div>
                Only successful credentials are <code>userEmail@gmail.com</code> and{" "}
                <code>123456789</code>.
                <br/><br/>
            </div>

            <Form onSubmit={submitForm}>
                {({handleSubmit, submitting, hasSubmitErrors, submitError}) => (
                    <form onSubmit={handleSubmit}>
                        <h1>Login form</h1>
                        {hasSubmitErrors ? <h3 style={{color: "red"}}>Email or password incorrect</h3> : undefined}
                        <Field
                            name="email"
                            type="text"
                            placeholder="Enter email"
                            validate={composeValidators([required, emailValidation])}
                        >
                            {({input, meta, placeholder}) => (
                                <TextInput input={input} meta={meta} placeholder={placeholder} />
                            )}
                        </Field>
                        <Field
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            validate={required}
                        >
                            {({input, meta, placeholder}) => (
                                <TextInput input={input} meta={meta} placeholder={placeholder} />
                            )}
                        </Field>
                        <LoadingButton
                            fullWidth={true}
                            type="submit" loading={submitting}
                            loadingIndicator="Loading..."
                            variant="outlined"
                            color={"secondary"}
                        >
                            Login
                        </LoadingButton>
                    </form>
                )}
            </Form>
        </>
    );
};

export default LoginForm;