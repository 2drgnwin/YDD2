import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import Messages from './pages/Messages';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Messages" component={Messages} />
          <Route path="/Support" component={Support} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
