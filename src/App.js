import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './layouts/navBar';
import Footer from './layouts/footer';
import About from './pages/about';
import Contact from './pages/contact';

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;