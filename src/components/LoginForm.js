import React, { Component, useState } from "react";
import loginIllu from '../assets/login-illu.png'
import {verifyAdminCredential} from '../services/users_services';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const errorMessage = () => toast.error("Identifiant ou mot de passe incorrect");
    const doneMessage = () => toast.success("Vous êtes maintenant connecté !");

    const checkAuth = (e) =>{
        e.preventDefault();
       
        verifyAdminCredential({login: login, password: password});
        let result = JSON.parse(localStorage.getItem("loginResult")).loginResult.result;

        if(result === 'OK'){
            doneMessage();
            localStorage.setItem("user", JSON.stringify({username: login}));
            setTimeout(() => {
                window.location.assign('/dashboard')
            }, 1000);

        } else{
            errorMessage()
        }

    }
    return (
        <div className="login-container">
            <div className="login-container__form">
                <h1>CONNECTEZ-VOUS</h1>

                <form action="" method="POST" className="form-container">

                    <div className="form-container__input">
                        <label htmlFor="login">Votre identifiant</label>
                        <input type="etxt" name="text" value={login} onChange={e => setLogin(e.target.value)} id="text" required></input>
                    </div>

                    <div className="form-container__input">
                        <label htmlFor="password">Votre mot de passe</label>
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} id="password" required></input>
                    </div>
                    <button className="border-button" onClick={checkAuth}>CONNEXION</button>
                </form>

            </div>
            <div className="login-container__illustration">
                <img src={loginIllu} alt="Login illustration" className="login-container__illustration--image"></img>
            </div>
        </div>
    );

}

export default LoginForm;