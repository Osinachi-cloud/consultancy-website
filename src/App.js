import './App.css';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Navbar from './components/home/navBar/Navbar';
import Footer from './components/home/footer/Footer';
import Blog from './components/blog/Blog';


function App() {
  return (

        <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />   
              <Route path="/contact" element={<Contact/>} />   
              <Route path="/blog" element={<Blog/>} />                       
            </Routes> 
            <Footer/>

      </Router>
  
  )
}

export default App;

