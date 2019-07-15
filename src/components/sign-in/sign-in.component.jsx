import React from 'react';
import {
    SignInContainer,
    TitleContainer,
    FormSubmitButtonContainer
} from './sign-in.styles';



import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';



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
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: ""
            });
        } catch (err) {
            console.log(err);
        }
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
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            Sign In with Google
                        </CustomButton>
                    </FormSubmitButtonContainer>
                </form>
            </SignInContainer >
        );
    }
}

export default SignIn;