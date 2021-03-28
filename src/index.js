import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Home } from './Home'
import reportWebVitals from './reportWebVitals'
import 'bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { RoomCreator } from './RoomCreator'

ReactDOM.render(
  <React.StrictMode>
    <div style={{ padding: '50px 20%' }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create-room">
            <RoomCreator />
          </Route>
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
