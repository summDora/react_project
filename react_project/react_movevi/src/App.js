import React from 'react';
import './App.css';
import Routes from './router';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes />
        </Router>
      <Footer />
    </div>
  );
}
export default App;
