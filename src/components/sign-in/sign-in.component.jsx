import React from 'react';
import { connect } from 'react-redux';

import {
    SignInContainer,
    TitleContainer,
    FormSubmitButtonContainer
} from './sign-in.styles';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { emailSignInStart } = this.props
        const { email, password } = this.state
        emailSignInStart(email, password)
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span >Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='email'
                        handleChange={this.handleChange}
                        type="email"
                        name='email'
                        value={this.state.email}
                        required />

                    <FormInput
                        label='password'
                        handleChange={this.handleChange}
                        type="password"
                        name='password'
                        value={this.state.password}
                        required />
                    <FormSubmitButtonContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={this.props.googleSignInStart} isGoogleSignIn >
                            Sign In with Google
                        </CustomButton>
                    </FormSubmitButtonContainer>
                </form>
            </SignInContainer >
        );
    }
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);