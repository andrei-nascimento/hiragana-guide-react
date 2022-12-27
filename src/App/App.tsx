import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// @ts-ignore
import Footer from '../components/static/Footer/Footer.tsx';
// @ts-ignore
import Material from '../pages/Books/Books.tsx';
// @ts-ignore
import Navbar from '../components/static/Navbar/Navbar.tsx';
// @ts-ignore
import Additional from '../pages/Additional/Additional.tsx';
// @ts-ignore
import Basic from '../pages/Basic/Basic.tsx';
// @ts-ignore
import Essential from '../pages/Essential/Essential.tsx';
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
            <Route path='/books' element={<Material />} />
            <Route path='/basic-table' element={<Basic />} />
            <Route path='/essential-table' element={<Essential />} />
            <Route path='/additional-table' element={<Additional />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
