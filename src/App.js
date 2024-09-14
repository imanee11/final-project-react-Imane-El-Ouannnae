import React, { createContext, useState } from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './layouts/navBar';
import Footer from './layouts/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Shop from './pages/shop';
import ProductDetail from './components/shop/productDetail';
import BlogDetail from './components/blog/blogDetail';
import User from './pages/user';
import CreateAcc from './components/user/createAcc';
import UserDetail from './components/user/userDetail';

export const dataContext = createContext();

const App = () => {
  const [user , setUser] = useState ({
    firstname : "",
    lastname : "",
    password : "",
    email : ""
  })

  return (
    <>
    <dataContext.Provider value={{user , setUser}}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:id' element={<ProductDetail/>}/>
        <Route path='/blog/:id' element={<BlogDetail/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/createaccount' element={<CreateAcc/>}/>
        <Route path='/userdetail' element={<UserDetail/>}/>
      </Routes>
      <Footer/>
    </dataContext.Provider>
    </>
  );
};

export default App;