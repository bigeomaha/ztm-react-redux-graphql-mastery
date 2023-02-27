import { async } from "@firebase/util";
import { getRedirectResult } from "firebase/auth";
import { signInWithGoogle, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase.utils";


const SignIn = () => {
    const logInGoogleUser = async () => {
        const response = await signInWithGoogle();
        const user = await createUserDocumentFromAuth(response.user);
    }

    const logInGoogleUserRedirect = async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log(user)
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logInGoogleUser}>
                <span>Sign In with Google</span>
            </button>
        </div>
    )
}

export default SignIn;