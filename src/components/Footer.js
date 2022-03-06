import React from "react";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__social">
                <ul>
                    <li><a href="https://discord.gg/UpavTYdhyC" target="_blank" rel="noreferrer">DISCORD</a></li>
                    <li><a href="https://www.youtube.com/channel/UCHWPs-vJg9uGkyIrixR-yCA" target="_blank" rel="noreferrer">YOUTUBE</a></li>
                    <li><a href="https://www.instagram.com/funcode_tournament/" target="_blank" rel="noreferrer">INSTAGRAM</a></li>
                </ul>
            </div>
            <div className="footer__copyright"><p>FunCode Tournament - Copyright ©</p></div>
        </footer>
    );

}

export default Footer;