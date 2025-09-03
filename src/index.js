import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import './portfolio.css';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './components/portfolio/navbar';
import Page1 from './components/portfolio/hero';
import { Page2 } from './components/portfolio/about';
import Page3 from './components/portfolio/skills';
import { Page4 } from './components/portfolio/project';

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
