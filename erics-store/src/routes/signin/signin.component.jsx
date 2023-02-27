import { async } from "@firebase/util";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { auth, signInWithGoogle, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase.utils";


const SignIn = () => {
    useEffect( () => {
        (async () => {
            const response = await getRedirectResult(auth);

            if (response) {
                const user = await createUserDocumentFromAuth(response.user);
            }
        })()
    }, []);

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
            <button onClick={logInGoogleUserRedirect}>
                <span>Sign In with Email</span>
            </button>
        </div>
    )
}

export default SignIn;