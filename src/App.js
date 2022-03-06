import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Login from './pages/Login';
import Blog from './pages/Blog';
import Article from './pages/Article';

function App() {

  return (
    <Router>
      {/* <Hero/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/article' element={<Article/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;