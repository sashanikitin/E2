import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import '../lib/bootstrap.min.css';

import '../lib/bootstrap.min.css';
import '../styles/blog.css';

import Name from './Name';
import Header from './Header';
import About from './About';
import Activity from './Activity';
import Statistics from './Statistics';
import Content from './Content'



const App = ({ownProps}) => {
	  console.log('ownProps', ownProps);
 

  return (
    <div>
     
   <Name/>

    <div className="container">

     <Header/>

      <div className="row">
	  <div className="col-sm-3">
	  
          <About/>		  
          <Activity/>
          <Statistics/>
        </div>         

        

       <Content/>

         

        
</div>
        

    </div>

    <div className="blog-footer">
      
      <p>
        <a href="#">Back to top</a>
      </p>
    </div>
    </div>
  );
}
export default App;