/**
 * Created by Sasha on 24.07.2017.
 */
import React, {Component} from 'react';


import '../lib/bootstrap.min.css';
//import '../styles/login.css';


class About extends Component {
    render() {
        return (
        <div className="sidebar-module sidebar-module-inset hidden-xs hidden-sm visible-md visible-lg">
            <h4>About</h4>
            <p>We stumble upon English words every day.
			Here you can make up them and train.
			The front end part was built with <em>Bootstrap</em> and <em>React</em>.
			The back end was created with <em>Express</em> and <em>MongoDB</em>.
			</p>
          </div>


        );
    }
}

export default About;