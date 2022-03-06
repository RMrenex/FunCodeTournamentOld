import React, { Component } from 'react';
import BlogSection from '../components/BlogSection'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <BlogSection/>
                <Footer/>
            </div>
        );
    }
}

export default Blog;