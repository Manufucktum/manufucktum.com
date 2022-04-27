import React from 'react'
import { createRoot } from 'react-dom/client'
import {  
  BrowserRouter,
  Routes,
  Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import './index.css';

import ManuProvider from './providers/ManuProvider'
import Main from './components/Main'
import Live from './components/Live'
import About from './components/About'
import Collections from './components/Collections'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ManuProvider>
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} key="main" />
          <Route path="/live" element={<Live/>} key="live" />
          <Route path="/collections" element={<Collections/>} key="collections" />
          <Route path="/about" element={<About/>} key="about" />
          <Route path="/imprint" element={<Live/>} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  </ManuProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
