/**
 * Created by Sasha on 24.07.2017.
 */
import React, {Component} from 'react';


import '../lib/bootstrap.min.css';
//import '../styles/login.css';


class Name extends Component {
    render() {
        return (
             <div className="navbar navbar-inverse" role="navigation">
      <div className="container">
        <div className="navbar-header">          
          <a className="navbar-brand" href="">Main</a>	  
        </div>
        <div className="navbar-default">
          <form className="navbar-form navbar-right" role="form">
            <div className="form-group">
              <input type="text" placeholder="Email" className="form-control"/>
            </div>
			
            <div className="form-group">
              <input type="password" placeholder="Password" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-success">Sign in</button>
          </form>
        </div> 
      </div>
    </div>


        );
    }
}

export default Name;