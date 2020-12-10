import React from 'react'
import Signup from './pages/signup/Signup';
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

import './App.css';

function App () {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/pages/signup' component = {Signup}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  )

}

export default App;
