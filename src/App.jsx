import React from 'react';
import {
  BrowserRouter as Router, Switch
} from "react-router-dom";

import { Header } from './Components/Header/Header.jsx';
import './style.css';
import LaunchRouter from './Components/Router/LaunchRouter';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Header />
          <LaunchRouter />
        </Router>

      </div>
    );
  }
}

export default App;
