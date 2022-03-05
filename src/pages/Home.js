import React, { Component } from 'react';
import About from '../components/About'
import Podium from '../components/Podium'
import Calendar from '../components/Calendar'

class Home extends Component {
    render() {
        return (
            <div>
                <About />
                <Podium />
                <Calendar />
            </div>
        );
    }
}

export default Home;