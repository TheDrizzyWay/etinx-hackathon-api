import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import BuyTicket from './components/BuyTicket';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Switch>
            <Route path="/purchase/:id" component={BuyTicket} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
