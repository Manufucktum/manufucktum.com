import React from 'react';
import { createRoot } from 'react-dom/client';
import {  
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import './index.css';

import ManuProvider from './providers/ManuProvider'
import Main from './components/Main'
import Live from './components/Live'
import About from './components/About'
import Collections from './components/Collections'
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ManuProvider>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/live" element={<Live/>} />
      <Route path="/collections" element={<Collections/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/imprint" element={<Live/>} />
    </Routes>
    </BrowserRouter>
  </ManuProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
