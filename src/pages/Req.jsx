import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {verifyAdminCredential} from '../services/users_services'

class Req extends Component {

    componentDidMount(){
        verifyAdminCredential();
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