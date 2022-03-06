import React, { Component } from 'react';
import ArticleSection from '../components/ArticleSection'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Article extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <ArticleSection />
                <Footer/>
            </div>
        );
    }
}

export default Article;