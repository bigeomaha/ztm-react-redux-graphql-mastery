import './button.styles.scss';

/*  This component is a wrapper for the <button> element.
    It is used to create a custom button with the same
    styling as the other buttons in the application.
    It is used in the form-input.component.jsx file.

    There are 3 stylings for this button:
    1. The default styling
    2. The "inverted" styling
    3. The "google-sign-in" styling
*/


const BUTTON_TYPE_CLASSES = {
    default: '',
    inverted: 'inverted',
    google: 'google-sign-in'
}

const InputButton = ({ children, buttonType, ...otherProps }) => (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        {children}
    </button>
);

export default InputButton;