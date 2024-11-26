import React from 'react';
import { Routes, Route } from'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/HomePage';
import About from './components/AboutPage';
import Menu from './components/MenuPage';
import Reservations from './components/ReservationsPage';
import OrderOnline from './components/OrderPage';
import Login from './components/LoginPage';
import './App.css';

function App() {
  return (
  <>
    < Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/orderonline" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
    </Routes>

    <Footer/>
  </>
  );
}

export default App;
