// import "../../App.css"
// import React, { Component } from 'react';
// import HeroSection from "../HeroSection";
// import Cards from "../Cards";
// import Footer from "../Footer";

// function SignUp() {
//     return (
//         <>
//             <HeroSection />
//             <Cards />
//             <Footer />
//         </>
//     )
// }

// // export default function SignUp() {
// //     return <h1 className="sign-up">Sign-up</h1>
// // }

// export default SignUp

import React, { Component } from 'react';
import SignupForm from '../signupForm';
import Footer from "../Footer";

function SignUp() {
    return (
        <>
            <SignupForm />
            <Footer />
        </>
        
    )
}

// class Signup extends Component {
//     render() {
//         return (
//             <div className='sign-up'>
//                 <SignupForm/>
//             </div>
//         )
//     }
// }

export default Signup;