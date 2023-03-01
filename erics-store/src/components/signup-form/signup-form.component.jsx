import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInputField from '../form-input/form-input.component';
import InputButton from "../form-input/button.component";

import './signup-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})

    }

    const resetForm = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            let {user} = await createAuthUserWithEmailAndPassword(email, password);
            user.displayName = displayName;
            user = await createUserDocumentFromAuth(user);
            resetForm()
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use');
                resetForm()
            }
            console.log(error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't Have an account?</h2>
            <span>Sign up with Email</span>
            <form action="" onSubmit={handleSubmit}>
                <FormInputField type="text" name="displayName"
                    value={displayName} handleChange={handleChange}
                    label="Display Name" required={true} />
                <label htmlFor="">Email</label>
                    <FormInputField type="email" autoComplete="email username"
                        onChange={handleChange} name="email" label="Email"
                        value={email} required={true} />
                <label htmlFor="">Password</label>
                    <FormInputField type="password" autoComplete="new-password"
                        onChange={handleChange} name="password" label="Password"
                        value={password} required={true} />
                <label htmlFor="">Confirm Password</label>
                    <FormInputField type="password" autoComplete="confirm-new-password"
                        onChange={handleChange} name="confirmPassword" label="Confirm Password"
                        value={confirmPassword} required={true} />
                <InputButton children='Sign Up' buttonType='default' />
            </form>
        </div>
    )
}

export default SignUpForm;