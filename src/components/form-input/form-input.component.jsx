import React from 'react';
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabelContainer
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherInputProps }) => {
    return (
        <GroupContainer>
            <FormInputContainer
                onChange={handleChange}
                {...otherInputProps}
            />
            {label ?
                <FormInputLabelContainer className={`${otherInputProps.value.length ? 'shrink' : ""} form-input-label`}>{label}</FormInputLabelContainer> : null
            }
        </GroupContainer>
    );
}

export default FormInput;

//label className will check the value of input ,if user type in something ,label will add
//'shrink className and  always has form-input-label className