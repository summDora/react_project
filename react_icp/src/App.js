import React from 'react';
import './App.css';

import Routes from './router';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <div className="App">
        <Router>
          <Header />
          <Routes />
        </Router>
      <Footer />
    </div>
    </div>
  );
}

export default App;
