import "./login.css";
import React from "react";

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                {/* Header row */}
                <div className="header-row">
                    <div className="header">
                        <img src="./src/assets/logo.png" alt="OneGold" />
                    </div>
                    <h1 className="title">LOGIN</h1>
                    <a href="#" className="go-back">
                        <span>&larr;</span> GO BACK
                    </a>
                </div>

                {/* Login form */}
                <form className="login-form">
                    <input
                        type="text"
                        placeholder="Enter Your Username"
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        className="input-field"
                    />
                    <button type="submit" className="login-button">
                        LOG IN
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
