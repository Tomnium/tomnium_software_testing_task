import React from 'react';
import {Form, Field} from 'react-final-form';
import '../App.css'
import TextInput from "./TextInput";
import LoadingButton from '@mui/lab/LoadingButton';
import {composeValidators, emailValidation, required} from "../validators/validators";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const checkUserByLoginValues = (formValues) => {
    const error = {};
    if (formValues.email !== 'userEmail@gmail.com') {
        error.email = "Unknown email";
    }
    if (formValues.password !== '123456789') {
        error.password = "Incorrect password";
    }
    return error;
}

const LoginForm = () => {

    const submitForm = async (values) => {
        await sleep(1500);
        const error = checkUserByLoginValues(values);
        if (error.email || error.password) {
            return error
        }
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <>
            <div>
                Only successful credentials are <code>userEmail@gmail.com</code> and{" "}
                <code>123456789</code>.
                <br/><br/>
            </div>
            <Form onSubmit={submitForm}>
                {({handleSubmit, submitting}) => (
                    <form onSubmit={handleSubmit}>
                        <h1>Login form</h1>
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
                        {/*<button disabled={submitting} type="submit">Login</button>*/}
                    </form>
                )}
            </Form>
        </>
    );
};

export default LoginForm;