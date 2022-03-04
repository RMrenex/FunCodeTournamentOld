import React from "react";

const Hero = () => {
    
    return (
        <section className="hero" id="About">

            <div className="navbar">
                <ul>
                    <li><a href="#">Qui sommes-nous ?</a></li>
                    <li><a href="#">Gagnants</a></li>
                    <li><a href="#">Calendrier</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>

            <div className="container">
                <div className="container__text">
                    <h1>FunCode Tournament</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="border-button"><a href="#">EN SAVOIR PLUS</a></button>
                </div>
                <div className="container__logo">
                    <img src={require('../assets/logo.png')} alt="Logo FunCode Tournament" className="container__logo--logo"></img>
                    <img src={require('../assets/shape1.png')} alt="Forme géometrique" className="container__logo--shape1"></img>
                    <img src={require('../assets/shape2.png')} alt="Forme géometrique" className="container__logo--shape2"></img>
                    <img src={require('../assets/shape3.png')} alt="Forme géometrique" className="container__logo--shape3"></img>
                </div>
            </div>
        </section>
    );

}

export default Hero;