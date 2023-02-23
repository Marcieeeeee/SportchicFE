import './App.css';
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Brand from "./components/Brand"
import "./style/landingpage.css"
import Populer from './components/Populer';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Adidas from './pages/Adidas'
import Nike from './pages/Nike';
import Ortuseght from './pages/Ortuseght'
import Specs from './pages/Specs'
import Home from './pages/Home'
import Chekout from './pages/Chekout';
import Login from './pages/Login';
import Register from './pages/Register';

const App =() => {
  return (
    // <div>
    //   <div className="myBG">
    //     <NavigationBar />
    //     <Intro />
    //   </div>
    //   <div className="brand">
    //     <Brand/>
    //   </div>
    //   <div className="populer">
    //     <Populer/>
    //   </div>
    //   <div className="about">
    //     <About/>
    //   </div>
    //   <div className="contact">
    //     <Contact/>
    //   </div>
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Nike' element={<Nike/>} />
        <Route path='/Adidas' element={<Adidas/>} />
        <Route path='/Ortuseght' element={<Ortuseght/>} />
        <Route path='/Specs' element={<Specs/>} />
        <Route path='/Chekout' element={<Chekout />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
