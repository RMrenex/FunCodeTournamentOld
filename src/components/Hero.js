import React from "react";
import logo from '../assets/logo.png'
import shape1 from '../assets/shape1.png'
import shape2 from '../assets/shape2.png'
import shape3 from '../assets/shape3.png'

const Hero = () => {

    return (
        <div className="hero-container">
            <section className="hero" id="About">

                <div className="navbar">
                    <ul>
                        <li><a href="/#about">Qui sommes-nous ?</a></li>
                        <li><a href="/#podium">Gagnants</a></li>
                        <li><a href="/#calendar">Calendrier</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>

                <div className="container">
                    <div className="container__text">
                        <h1>FunCode Tournament</h1>
                        <p>Rejoignez FunCode Tournament, participer à des concours de développement web, de jeux vidéo ou encore d'algorithme. Progresser en vous amusant contre d'autres développeurs ou avec vos amis afin de remporter nos concours.</p>
                        <a href="#about"><button className="border-button">EN SAVOIR PLUS</button></a>
                    </div>
                    <div className="container__logo">
                        <img src={logo} alt="Logo FunCode Tournament" className="container__logo--logo"></img>
                        <img src={shape1} alt="Forme géometrique" className="container__logo--shape1"></img>
                        <img src={shape2} alt="Forme géometrique" className="container__logo--shape2"></img>
                        <img src={shape3} alt="Forme géometrique" className="container__logo--shape3"></img>
                    </div>
                </div>
            </section>
            <img src={require('../assets/wave.png')} alt="hero wave" className="wave"></img>
        </div>
    );

}

export default Hero;