import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';
import Products from './components/products/Products';
import TopMenu from './components/TopMenu';


function App() {
  return (
   <BrowserRouter>
    <div>
      <TopMenu />
      <Routes>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
