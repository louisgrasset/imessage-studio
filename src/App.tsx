import './App.scss'
import React, { useCallback } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Welcome } from './routes/Welcome';
import { Studio } from './routes/Studio';
import { Attribution } from './components/Attribution';

function App() {
  const RedirectionHandler = useCallback(() => {
    if (localStorage) {
      const value = localStorage?.getItem('welcomeRedirect');
      if (value && JSON.parse(value) === true) {
        return <Redirect push to="/studio" />
      }
    }
    return <Redirect push to="/welcome" />
  }, []);

  return (
    <div className="app">
      <Attribution />
      <Router>
        <Switch>
          <Route path="/studio">
            <Studio />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/">
            <RedirectionHandler />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
