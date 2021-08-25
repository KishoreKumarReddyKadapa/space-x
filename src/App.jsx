import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

import { Header } from './Components/Header/Header.jsx';
import { Launches } from './Components/Launches/Launches.jsx';
import './style.css';
import LaunchRouter from './Components/Router/LaunchRouter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <LaunchRouter />
          <Launches />
        </Router>

      </div>
    );
  }
}

export default App;
