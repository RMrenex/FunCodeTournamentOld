import React, { Component } from 'react';
import About from '../components/About'
import Podium from '../components/Podium'
import Calendar from '../components/Calendar'
import { retrieveContests } from '../services/contest_service'
import Hero from '../components/Hero';
import Footer from '../components/Footer';

class Home extends Component {

    async componentDidMount(){
        let contests = await retrieveContests();
        contests.forEach(contest => {
            if (contest.finish === true) {
                this.setState({ lastContestContributors: contest.users });
                localStorage.setItem("contest", JSON.stringify(contest));
            }
        })
        localStorage.setItem("contests", JSON.stringify(contests));
    }

    render() {
        return (
            <div>
                <Hero/>
                <About />
                {this.state !== null && (<Podium contests = {this.state.lastContestContributors}/>)}
                {this.state !== null && (<Calendar contests = {JSON.parse(localStorage.getItem("contests"))}/>)}
                <Footer/>
            </div>
        );
    }
}

export default Home;