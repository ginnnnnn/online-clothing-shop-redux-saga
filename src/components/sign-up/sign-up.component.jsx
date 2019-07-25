import React from 'react';
import { SignUpContainer, TitleContainer } from './sign-up.styles.styles';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props
        if (password !== confirmPassword) {
            alert('password is not equal to confirmPassword')
            return;
        }
        signUpStart(email, password, displayName);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <TitleContainer>I do not have an account</TitleContainer>
                <span>Sign up with your Email and Password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>

            </SignUpContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName }))
})

export default connect(null, mapDispatchToProps)(SignUp);