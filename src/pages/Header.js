/**
 * Created by Sasha on 24.07.2017.
 */
import React, {Component} from 'react';


import '../lib/bootstrap.min.css';
//import '../styles/login.css';


class Header extends Component {
    render() {
        return (
              <div className="blog-header">
        <h1 className="blog-title">My history of studying English.</h1>
        <p className="lead blog-description">I should write here something </p>
      </div>


        );
    }
}

export default Header;