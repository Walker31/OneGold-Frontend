import "./signup.css";
import React from "react";

function SignUp() {
    return (
        <div className="login-container">
            <div className="login-box">
                {/* Header row */}
                <div className="header-row">
                    <div className="header">
                        <img src="./src/assets/logo.png" alt="OneGold" />
                    </div>
                    <h1 className="title">SIGN UP</h1>
                    <a href="#" className="go-back">
                        <span>&larr;</span> GO BACK
                    </a>
                </div>

                {/* Sign Up form */}
                <form className="login-form">
                    <input
                        type="text"
                        placeholder="Enter Your Phone Number / Email ID"
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Create Unique Password"
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Your Password"
                        className="input-field"
                    />
                    <button type="submit" className="login-button">
                        SIGN UP
                    </button>
                </form>

                {/* Sign in link */}
                <p className="text-center">
                    <span>OR</span> <br />
                    <span>ALREADY HAVE AN ACCOUNT? </span>
                    <a href="#" className="sign-in-link">SIGN IN</a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
