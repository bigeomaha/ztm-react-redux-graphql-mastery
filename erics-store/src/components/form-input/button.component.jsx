import './button.styles.scss';

/*  This component is a wrapper for the <button> element. It is used to create a custom button with
    the same styling as the other buttons in the application.

    There are 3 stylings for this button:
    1. The default styling
    2. The "inverted" styling
    3. The "google-sign-in" styling
    4. The "processing" styling
*/

export const BUTTON_TYPE_CLASSES = {
    default: '',
    inverted: 'inverted',
    google: 'google-sign-in',
    processing: 'processing'
}

const _buttonNormal = ({ children, buttonType, is_loading, ...otherProps }) => (
    <button disabled={is_loading} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        {children}
    </button>
);

const _buttonProcessing = ({ children, buttonType, is_loading, ...otherProps }) => (
    <button disabled={true} className={`button-container processing`} {...otherProps}>
        Processing <span className='spinner'> </span>
    </button>
);

const InputButton = (params) => {
    if (!params.is_loading) {
        return _buttonNormal(params);
    }
    else {
        return _buttonProcessing(params);
    }
};

export default InputButton;