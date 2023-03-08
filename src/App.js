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
import Dashboard from './components/admin-content/Dashboard';
import Profile from './components/admin-content/profile';
import AddProduk from './components/admin-content/AddProduct';
import ViewProduk from './components/admin-content/ViewProduct';
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
        <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/profile" element={<Profile/>} /> 
        <Route path="/admin/add-product" element={<AddProduk/>} /> 
        <Route path="/admin/view-product" element={<ViewProduk/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
