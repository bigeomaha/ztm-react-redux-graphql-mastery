import { async } from "@firebase/util";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/signup-form/signup-form.component";
import { signInWithGoogle, createUserDocumentFromAuth, signInWithGoogleRedirect,  } from "../../utils/firebase.utils";

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
            <div>
                <h1>Sign In</h1>
                <button onClick={logInGoogleUser}>
                    <span>Sign In with Google</span>
                </button>

            </div>
            <SignUpForm />
        </div>
    )
}

export default SignIn;