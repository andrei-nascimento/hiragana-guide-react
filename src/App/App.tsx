import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// @ts-ignore
import Footer from '../components/static/Footer/Footer.tsx';
// @ts-ignore
import Navbar from '../components/static/Navbar/Navbar.tsx';
// @ts-ignore
import Home from '../pages/Home/Home.tsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
