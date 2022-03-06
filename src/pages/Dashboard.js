import React from 'react';
import DashboardForm from '../components/DashboardForm'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Dashboard = () => {


    return (
        <div>
            <Navbar />
            <DashboardForm />
            <Footer />
        </div>
    );

}

export default Dashboard;