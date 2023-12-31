import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/CSS/Regular.css'
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import About from './components/About';
import Requirements from './components/Requirements';
import Installation from './components/Installation';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <section> 
    <About/>
    <Requirements/>
    <Installation/>
    <FAQ/>
    </section>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
