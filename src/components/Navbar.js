import React from "react";

const Navbar = () => {

    return (
        <div className="navbar simple-navbar">
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
            </ul>
        </div>
    );

}

export default Navbar;