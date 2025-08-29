import React from 'react';
import ReactDOM from 'react-dom/client';
import './portfolio.css';

import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import bootstrap as bootstrap from 'bootstrap';
import { Navbar } from './Components/Portfolio/Navbar';
import Page1 from './Components/Portfolio/Hero';
import { Page2 } from './Components/Portfolio/About';
import Page3 from './Components/Portfolio/Skills';
import { Page4 } from './Components/Portfolio/ProjectsContact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
