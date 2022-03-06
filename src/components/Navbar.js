import React from "react";

const Navbar = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="navbar simple-navbar">
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/blog">Blog</a></li>
                {user && (<li><a href="/dashboard">Dashboard</a></li>)}
                {user && (<button className="border-button signout-button">DECONNEXION</button>)}
            </ul>
        </div>
    );

}

export default Navbar;