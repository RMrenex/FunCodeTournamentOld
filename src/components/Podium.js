import React from 'react';

const Podium = () => {

    return (
        <div className="podium" id="podium">
            <div className="left-title"><h2>GAGNANTS DU DERNIER CONCOURS</h2></div>
            <div className="podium-container">
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
                            <p>Player 1111111</p>
                            <p>Player 1111111</p>
                            <p>Player 1111111</p>
                        </div>
                    </div>
                </div>

                <a href="#" className="podium-container__link">VOIR L'ARTICLE DU CONCOURS</a>
            </div>
        </div>
    );

}

export default Podium;