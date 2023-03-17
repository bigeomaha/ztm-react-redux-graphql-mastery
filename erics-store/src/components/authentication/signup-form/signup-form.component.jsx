import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase.utils";
import { UserContext } from "../../../contexts/user.context";
import FormInputField from '../../form-input/form-input.component';
import InputButton from "../../form-input/button.component";

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
    const {setCurrentUser} = useContext(UserContext);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetForm = () => {
        setFormFields(defaultFormFields);
    }

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            let {user} = await createAuthUserWithEmailAndPassword(email, password);
            user.displayName = displayName;
            user = await createUserDocumentFromAuth(user);
            setCurrentUser(user);
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
            <form action="" onSubmit={handleSignUpSubmit}>
                <FormInputField type="text" name="displayName"
                    defaultValue={displayName} onChange={handleChange}
                    label="Display Name" required={true} />
                <FormInputField type="email" autoComplete="username"
                    onChange={handleChange} name="email" label="Email"
                    defaultValue={email} required={true} />
                <FormInputField type="password" autoComplete="new-password"
                    onChange={handleChange} name="password" label="Password"
                    defaultValue={password} required={true} />
                <FormInputField type="password" autoComplete="confirm-new-password"
                    onChange={handleChange} name="confirmPassword" label="Confirm Password"
                    defaultValue={confirmPassword} required={true} />
                <InputButton children='Sign Up' buttonType='default'/>
            </form>
        </div>
    )
}

export default SignUpForm;