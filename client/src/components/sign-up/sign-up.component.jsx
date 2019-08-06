import React, { useState } from 'react';
import { SignUpContainer, TitleContainer } from './sign-up.styles.styles';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentails] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('password is not equal to confirmPassword')
            return;
        }
        signUpStart(email, password, displayName);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserCredentails({ ...userCredentials, [name]: value })
    }

    return (
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your Email and Password</span>
            <form className='sign-up-form' onSubmit={handleSubmit} >
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>

        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName }))
})

export default connect(null, mapDispatchToProps)(SignUp);