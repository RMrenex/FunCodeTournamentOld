import React from "react";
import loginIllu from '../assets/login-illu.png'

const LoginForm = () => {

    return (
        <div className="login-container">
            <div className="login-container__form">
                <h1>CONNECTEZ-VOUS</h1>

                <form action="" method="" className="form-container">

                    <div className="form-container__input">
                        <label for="email">Votre adresse email</label>
                        <input type="email" name="email" id="email" required></input>
                    </div>

                    <div className="form-container__input">
                        <label for="password">Votre mot de passe</label>
                        <input type="password" name="password" id="password" required></input>
                    </div>

                </form>

                <button className="border-button">CONNEXION</button>
            </div>
            <div className="login-container__illustration">
                <img src={loginIllu} alt="Login illustration" className="login-container__illustration--image"></img>
            </div>
        </div>
    );

}

export default LoginForm;