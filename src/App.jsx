import React from 'react';
import { Routes, Route } from'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/HomePage';
import About from './components/AboutPage';
import Menu from './components/MenuPage';
import BookingPage from './components/BookingPage';
import OrderOnline from './components/OrderPage';
import Login from './components/LoginPage';
import ConfirmationPage from './components/ConfirmationPage';


function App() {
  return (
  <>
    <Header/>
    <Main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path='/confirmation' element={<ConfirmationPage />} />
      </Routes>
    </Main>
    <Footer/>
  </>
  );
}

export default App;
