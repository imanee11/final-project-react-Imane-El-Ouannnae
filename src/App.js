import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './layouts/navBar';

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
};

export default App;