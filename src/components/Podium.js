import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

class Podium extends Component {

    render() {
        const {contests} = this.props;
        return (
            <section className="podium" id="podium">
                <div className="left-title"><h2>GAGNANTS DU DERNIER CONCOURS</h2></div>
                <div className="podium-container">
                    <div className="cards-container">
                        <div className="podium-card">
                            <div className="podium-card__place podium-card__place--first">1</div>
                            <div className="podium-card__icon"><FontAwesomeIcon icon={faCrown}/></div>
                            <div className="podium-card__player">
                                {
                                    <p>{contests[0].contributors}</p>
                                }
                            </div>
                        </div>

                        <div className="podium-card">
                            <div className="podium-card__place podium-card__place--second">2</div>
                            <div className="podium-card__icon"><FontAwesomeIcon icon={faTrophy}/></div>
                            <div className="podium-card__player">
                                {
                                    contests[1].contributors.map(contributor => {
                                        return (<p key={contributor}>{contributor}</p>)
                                    })
                                }
                            </div>
                        </div>

                        <div className="podium-card">
                            <div className="podium-card__place podium-card__place--third">3</div>
                            <div className="podium-card__icon"><FontAwesomeIcon icon={faMedal}/></div>
                            <div className="podium-card__player">
                                {
                                    contests[2].contributors.map(contributor => {
                                        return (<p key={contributor}>{contributor}</p>)
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <a href="/article" className="podium-container__link">VOIR L'ARTICLE DU CONCOURS</a>
                </div>
            </section>
        )
    }

} export default Podium;