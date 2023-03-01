import './form-input.styles.scss';

const FormInputField = ({ handleChange, label, ...otherProps }) => {
    console.log('otherProps: ' + otherProps.value);
    return (

        <div className="group">
            <input className="form-input"
                onChange={handleChange} {...otherProps} />
            {/* If Label exists, then render it */}
            { label &&
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
            }

        </div>
    );
};

export default FormInputField;