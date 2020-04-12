import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import User from "./components/User";
import Account from "./components/Account";
import Blog from "./components/Blog";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                  <div>
                    <Link to="/">Home  </Link>  
                    <Link to="/account">Account  </Link>  
                    <Link to="/blog">Blog  </Link>  
                  </div>
                    <Route exact path="/" component={User} />
                    <Route path="/account" component={Account} />
                    <Route path="/blog" component={Blog} />
                </div>
            </Router>
        );
    }
}

export default App;
