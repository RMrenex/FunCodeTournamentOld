import React, { Component } from 'react';
import DashboardForm from '../components/DashboardForm'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <DashboardForm />
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;