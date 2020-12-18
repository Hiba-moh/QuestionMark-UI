import React from 'react';
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import Routes from './routes/index';
import './App.css';

function App () {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
