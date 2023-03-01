import SignUpForm from "../../components/authentication/signup-form/signup-form.component";
import SigninForm from "../../components/authentication/signin-form/signin.component";
import "./authentication.styles.scss";

const Authentication = () => {

    return (
        <div className='authentication-container'>
            <SigninForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;