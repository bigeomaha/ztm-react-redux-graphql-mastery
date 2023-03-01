import { useState } from "react";
import { signInWithGoogle, createUserDocumentFromAuth,
    signInWithEmailAndPassword } from '../../../utils/firebase.utils';
import './signin.styles.scss';
import InputButton from '../../form-input/button.component';
import FormInputField from '../../form-input/form-input.component';

const defaultSignInFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultSignInFormFields);
    const { email, password } = formFields;

    const logInGoogleUser = async () => {
        const response = await signInWithGoogle();
        const user = await createUserDocumentFromAuth(response.user);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const resetForm = () => {
        setFormFields(defaultSignInFormFields);
    }

    const handleSignInWithGoogle = () => {
        console.log('Sign in with Google');
    };

    const handleSignInSubmit = async (event) => {
        event.preventDefault();
        try {
            let { user } = await signInWithEmailAndPassword(email, password);
            user = await createUserDocumentFromAuth(user);
            console.log(user)
            resetForm()
        }
        catch (error) {
            if (error.code === 'auth/wrong-password') {
                alert('Invalid Credentials. Please try again.');
                resetForm()
            }
            console.log(error);
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSignInSubmit}>
                <FormInputField name='email' type='email' value={email}
                    autoComplete="username" label='Email'
                    handleChange={handleChange} required defaultValue=''/>

                <FormInputField name='password' type='password' value={password}
                    autoComplete="password" label='Password'
                     handleChange={handleChange} required defaultValue=''/>
            <div className="buttons-container">
                    <InputButton children='Sign In' buttonType='default' />
                    <InputButton children='Google Sign In' buttonType='google' type='button' onClick={logInGoogleUser} />
            </div>
            </form>
        </div>
    );
}

export default SignInForm;
