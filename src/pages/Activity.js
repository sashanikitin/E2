/**
 * Created by Sasha on 24.07.2017.
 */
import React, {Component} from 'react';


import '../lib/bootstrap.min.css';
//import '../styles/login.css';


class Activity extends Component {
    render() {
        return (
           <div className="sidebar-module">
            <h4>Activity</h4>
            <ol className="list-unstyled">
              <li><a href="http://bootstrap-3.ru/examples/blog/#">New Post</a></li>
              <li><a href="http://bootstrap-3.ru/examples/blog/#">Words Trial</a></li>
              <li><a href="http://bootstrap-3.ru/examples/blog/#">Vocabulary</a></li>
			  <li><a href="http://bootstrap-3.ru/examples/blog/#">To V/ing</a></li>
              <li><a href="http://bootstrap-3.ru/examples/blog/#">Settings</a></li>            
            </ol>
          </div>


        );
    }
}

export default Activity;