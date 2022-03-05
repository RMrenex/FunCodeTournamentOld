import React from 'react';

const About = () => {

    return (
        <section className="about" id="about">
            <div className="right-title"><h2>QUI SOMMES-NOUS ?</h2></div>
            <div className='about-container'>
                <div className='about-container__illustration'>
                    <img src={require('../assets/illustrations.png')} alt="Logo FunCode Tournament" className="about-container__illustration--image"></img>
                </div>
                <div className='about-container__text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="https://discord.com/invite/UpavTYdhyC"><button className="button">REJOINS NOTRE DISCORD</button></a>
                </div>
            </div>
        </section>
    );

}

export default About;