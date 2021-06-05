import React, { Component } from 'react';
import SignupForm from '../signupForm';
import Footer from "../Footer";


class Signup extends Component {
    render() {
        return (
            <div className='sign-up'>
                <SignupForm />
                <Footer />
            </div>
        )
    }
}

export default Signup;

