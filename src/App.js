import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './layouts/navBar';
import Footer from './layouts/footer';

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;