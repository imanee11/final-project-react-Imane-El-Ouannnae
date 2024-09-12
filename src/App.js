import React from 'react';
import Home from './pages/home';
import { Routes } from 'react-router-dom';
import NavBar from './layouts/navBar';

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes></Routes>
    </>
  );
};

export default App;