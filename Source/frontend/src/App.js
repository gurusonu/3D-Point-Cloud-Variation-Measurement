import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/users-list.component'
import CreateUser from './components/create-user.component'
import LoginUser from './components/login-user'
import cus_opt from './components/image-detect.component'


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">5 FINGURE!</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Users</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Register</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login_page" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/" exact component={UsersList}/>
        <Route path="/login_page" component={LoginUser}/>
        <Route path="/customer_page" component={cus_opt}/> 
        <Route path="/create" component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
