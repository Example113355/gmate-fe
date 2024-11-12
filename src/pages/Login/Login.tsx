import { useState } from 'react';
import LogInForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import './login.css';

const LogIn = () => {
    const [isLogIn, setIsLogIn] = useState(true);

    function toggleLogIn() {
        setIsLogIn(!isLogIn);
    }

    return (
        <div className="log_in">
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave wave2"></div>
            </div>

            <div className="log_in--container">
                <h1 className="heading">
                    {isLogIn ? 'Happy to Have You Back!' : "Let's start Your Journey!"}
                </h1>
                <div className="description">
                    {isLogIn
                        ? "Welcome back! We’re thrilled to see you again. Let’s make your journey unforgettable!"
                        : "Welcome to Watery! Let’s start your journey with us. We’re thrilled to see you here!"}
                </div>

                {isLogIn ? <LogInForm /> : <RegisterForm />}

                <div className="log_in--toggle">
                    {isLogIn
                        ? "Don't have an account yet? "
                        : "Already have an account? "}
                    <button className="toggle_authen" onClick={toggleLogIn}>
                        {isLogIn ? 'Sign Up' : 'Log In'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;