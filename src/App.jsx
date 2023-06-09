import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
