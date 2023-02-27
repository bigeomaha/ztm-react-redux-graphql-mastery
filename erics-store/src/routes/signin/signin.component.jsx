import { signInWithGoogle, createUserDocumentFromAuth } from "../../utils/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGoogle();
        const user = await createUserDocumentFromAuth(response.user);
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                <span>Sign In with Google</span>
            </button>
        </div>
    )
}

export default SignIn;