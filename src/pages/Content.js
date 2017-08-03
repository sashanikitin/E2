/**
 * Created by Sasha on 24.07.2017.
 */
import React, {Component} from 'react';


 '../lib/bootstrap.min.css';
//import '../styles/login.css';
import BlogPost from "./BlogPost"


const story={
	title:"Meeting with Lina",
	verbs:[{
		name: 'hose',
		value: 'flexible pipe'
	},{
		name: 'tidiness',
		value: 'being clean'
	} ],
	post:'Yesterday Lina and I stumbled upon new words.',	
	date: 16082017
};

class Content extends Component {
    render() {
        return (
        <div className="col-sm-8 blog-main">    
		  <BlogPost content={story} />
		  <BlogPost content={story}/>
		   <ul className="pager">
            <li className="previous"><a href="#">Previous</a></li>
            <li className="next"><a href="#">Next</a></li>
          </ul>
        </div>

        );
    }
}

export default Content;