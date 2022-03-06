import React from 'react';
import illustration from '../assets/illustrations.png'

const About = () => {

    return (
        <section className="about" id="about">
            <div className="right-title"><h2>QUI SOMMES-NOUS ?</h2></div>
            <div className='about-container'>
                <div className='about-container__illustration'>
                    <img src={illustration} alt="Logo FunCode Tournament" className="about-container__illustration--image"></img>
                </div>
                <div className='about-container__text'>
                    <p>FunCode Tournament est serveur discord proposant des concours de développement que ce soit du développement web, du développement de jeux vidéo ou encore de l'algorithmie. Vous retrouverez sur notre serveur discord une communauté active et accueillante ayant pour but de progresser dans le développement tout en s'amusant via les nombreux concours que nous proposons. N'hésitez donc pas à venir nous dire bonjour sur notre discord.</p>
                    <a href="https://discord.com/invite/UpavTYdhyC"><button className="button">REJOINS NOTRE DISCORD &nbsp;<i className="fa-brands fa-discord"></i></button></a>
                </div>
            </div>
        </section>
    );

}

export default About;