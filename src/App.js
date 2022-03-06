import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Login from './pages/Login';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';

function App() {


  return (

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/article' element={<Article/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        <ToastContainer/>
      </Router>
  );
}

export default App;