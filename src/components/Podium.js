import React, { Component } from 'react';
import { retrieveContests } from '../services/contest_service'

class Podium extends Component {


    async componentDidMount() {
        let contests = await retrieveContests();
        contests.forEach(contest => {
            if (contest.finish === true) {
                this.setState({ lastContest: contest.users });
                console.log(this.state.lastContest[1].contributors)
            }
        })
    }

    render() {
        return (
            <section className="podium" id="podium">
                <div className="left-title"><h2>GAGNANTS DU DERNIER CONCOURS</h2></div>
                <div className="podium-container">
                    <div className="cards-container">
                        <div className="podium-card">
                            <div className="podium-card__place podium-card__place--first">1</div>
                            <div className="podium-card__icon">O</div>
                            <div className="podium-card__player">
                                {
                                    this.state !== null && (
                                        <p>{this.state.lastContest[0].contributors}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className="podium-card">
                            <div className="podium-card__place podium-card__place--second">2</div>
                            <div className="podium-card__icon">O</div>
                            <div className="podium-card__player">
                                {
                                    this.state !== null && (
                                        this.state.lastContest[1].contributors.map(contributor => {
                                            return (<p key={contributor}>{contributor}</p>)
                                        })
                                    )
                                }
                            </div>
                        </div>

                        <div className="podium-card">
                            <div className="podium-card__place podium-card__place--third">3</div>
                            <div className="podium-card__icon">O</div>
                            <div className="podium-card__player">
                                {
                                    this.state !== null && (
                                        this.state.lastContest[2].contributors.map(contributor => {
                                            return (<p key={contributor}>{contributor}</p>)
                                        })
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <a href="#" className="podium-container__link">VOIR L'ARTICLE DU CONCOURS</a>
                </div>
            </section>
        )
    }

} export default Podium;