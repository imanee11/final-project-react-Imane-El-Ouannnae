import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './layouts/navBar';
import Footer from './layouts/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Shop from './pages/shop';

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;