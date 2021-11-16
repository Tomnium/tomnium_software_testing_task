export const required = (value) => (value ? undefined : 'Required');

export const emailValidation = (value) =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? 'Invalid email address' : undefined;

export const composeValidators = (validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);