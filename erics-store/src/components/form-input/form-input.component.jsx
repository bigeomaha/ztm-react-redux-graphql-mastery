import './form-input.styles.scss';

const FormInputField = ({ handleChange, label, ...otherProps }) => {

    return (

        <div className="group">
            <input className="form-input" {...otherProps} />
            {/* If Label exists, then render it */}
            { label &&
                (<label className={`${otherProps.defaultValue.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
            }

        </div>
    );
};

export default FormInputField;