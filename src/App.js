import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Login from './components/LoginForm';
import BlogSection from './components/BlogSection';

import Req from './pages/Req'
function App() {

  return (
    <Router>
      <Hero/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blog' element={<BlogSection/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;