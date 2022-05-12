import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/style.scss';

import Navbar from './Navbar';
import Swipe from './Swipe';
import Login from './auth/Login';
import Register from './auth/Register';
import SwipedGames from './SwipedGames';
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/games' element={<Swipe />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/swipedGames' element={<SwipedGames />} />
    </Routes>
  </BrowserRouter>
);

export default App;
