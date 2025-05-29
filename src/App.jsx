import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Shared/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomersPage from './pages/Customers';
import MoliProductPage from './pages/MoliProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Customers" element={<CustomersPage />} />
          <Route path="/MoliProductPage" element={<MoliProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;