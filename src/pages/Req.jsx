import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {createNewContest} from '../services/contest_service'

class Req extends Component {

    componentDidMount(){
        //createNewContest(obj);
    }

    render() {
        return (
            <div>
                <h1>Salut</h1>
            </div>
        );
    }
}

Req.propTypes = {

};

export default Req;