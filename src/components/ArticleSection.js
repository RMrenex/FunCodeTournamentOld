import React, { Component } from "react";

class ArticleSection extends Component {

    contest = JSON.parse(localStorage.getItem("contest"));

    render() {
        return (
            <div className="article-container">
                <h1 className="article-container__title">{this.contest.name.toUpperCase()}</h1>

                <div className="cards-container article-card-container">
                    <div className="podium-card">
                        <div className="podium-card__place podium-card__place--first">1</div>
                        <div className="podium-card__icon"><i className="fa-solid fa-crown"></i></div>
                        <div className="podium-card__player"><p>{this.contest.users[0].contributors[0]}</p></div>
                    </div>

                    <div className="podium-card">
                        <div className="podium-card__place podium-card__place--second">2</div>
                        <div className="podium-card__icon"><i className="fa-solid fa-trophy"></i></div>
                        <div className="podium-card__player">
                            {
                                this.contest.users[1].contributors.map(contributor => {
                                    return (<p key={contributor}>{contributor}</p>)
                                })
                            }
                        </div>
                    </div>

                    <div className="podium-card">
                        <div className="podium-card__place podium-card__place--third">3</div>
                        <div className="podium-card__icon"><i className="fa-solid fa-medal"></i></div>
                        <div className="podium-card__player">
                            {
                                this.contest.users[2].contributors.map(contributor => {
                                    return (<p key={contributor}>{contributor}</p>)
                                })
                            }
                        </div>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">TOUS LES PARTICIPANTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.contest.users.map((contributor, i) => {
                            if (contributor.rank > 3 && contributor.rank < 6) {
                                return(
                                <tr key={i}>
                                    {(<td>{contributor.contributors}</td>)}
                                </tr>)
                            } else if(contributor.rank >= 6){
                                return(
                                   <tr key={i}>
                                       {(<td>{contributor.contributors}</td>)}
                                   </tr> 
                                )
                            }
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
} export default ArticleSection;