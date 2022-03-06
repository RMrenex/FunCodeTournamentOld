import React, { Component } from "react";

class BlogSection extends Component{

    contests = JSON.parse(localStorage.getItem('contests'));

    render() {
        console.log(this.contests)
        return (
            <div className="blog-container">
                <div className="article-container">
                    {this.contests.map(contest => {
                        return(
                            <article className="article">
                                <h2 className="article__title">{contest.name}</h2>
                                <p className="article__text">Date de début : {contest.start_date}</p>
                                <p className="article__text">Date de fin : {contest.end_date}</p>
                                <p className="article__text">Type de concours : {contest.type.toUpperCase()}</p>
                            </article>
                        )
                    })}
                </div>
        </div>
        );
    }
} export default BlogSection;