import React from "react";

const Article = () => {

    return (
        <div className="article-container">
            <h1 className="article-container__title">CONCOURS WEB</h1>
            <p className="article-container__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

            <h2 className="article-container__title">PODIUM</h2>
            <div className="cards-container">
                <div className="podium-card">
                    <div className="podium-card__place podium-card__place--first">1</div>
                    <div className="podium-card__icon">O</div>
                    <div className="podium-card__player"><p>Player 1111111</p></div>
                </div>

                <div className="podium-card">
                    <div className="podium-card__place podium-card__place--second">2</div>
                    <div className="podium-card__icon">O</div>
                    <div className="podium-card__player">
                        <p>Player 1111111</p>
                        <p>Player 1111111</p>
                    </div>
                </div>

                <div className="podium-card">
                    <div className="podium-card__place podium-card__place--third">3</div>
                    <div className="podium-card__icon">O</div>
                    <div className="podium-card__player">
                        <p>canne_a_peche</p>
                        <p>Player 1111111</p>
                        <p>Player 1111111</p>
                    </div>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th colspan="2">TOUS LES PARTICIPANTS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Player</td>
                        <td>Player</td>
                    </tr>
                    <tr>
                        <td>Player, Player</td>
                        <td>Player, Player, Player</td>
                    </tr>
                    <tr>
                        <td>Player, Player, Player</td>
                        <td>Player, Player,</td>
                    </tr>
                    <tr>
                        <td>Player</td>
                        <td>Player</td>
                    </tr>
                    <tr>
                        <td>Player, Player</td>
                        <td>Player</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default Article;