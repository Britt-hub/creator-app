import React from 'react'
import "./Button.css"
import { Link } from "react-router-dom"

const STYLES = ["btn--primary", "btn--outline"]

const SIZES = ["btn--medium", "btn--large"]


// I did this so that if the component has a button style and that is true, then it will be the button style that we created for it.
// If its not true the value is set to the first option in our styles array
export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link to="/sign-up" className="btn-mobile">
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onclick={onclick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}
