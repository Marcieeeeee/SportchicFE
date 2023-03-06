import './App.css';
import "./style/landingpage.css"
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Adidas from './pages/Adidas'
import Nike from './pages/Nike';
import Ortuseght from './pages/Ortuseght'
import Specs from './pages/Specs'
import Home from './pages/Home'
import Chekout from './pages/Chekout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

const App =() => {
  return (
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
