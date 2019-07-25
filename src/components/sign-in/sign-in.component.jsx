import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    SignInContainer,
    TitleContainer,
    FormSubmitButtonContainer
} from './sign-in.styles';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';



const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [EmailandPassword, setEmailandPassword] = useState({
        email: "",
        password: ""
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = EmailandPassword
        emailSignInStart(email, password);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailandPassword({ ...EmailandPassword, [name]: value })
    }

    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span >Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='email'
                    handleChange={handleChange}
                    type="email"
                    name='email'
                    value={EmailandPassword.email}
                    required />

                <FormInput
                    label='password'
                    handleChange={handleChange}
                    type="password"
                    name='password'
                    value={EmailandPassword.password}
                    required />
                <FormSubmitButtonContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >
                        Sign In with Google
                        </CustomButton>
                </FormSubmitButtonContainer>
            </form>
        </SignInContainer >
    );

}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);