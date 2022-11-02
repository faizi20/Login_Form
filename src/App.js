import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Header from './component/Layout/Header'

const App = () => {

  return (
    <Header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Header>
  );
};

export default App;
