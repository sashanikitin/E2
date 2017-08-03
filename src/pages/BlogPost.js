/**
 * Created by Sasha on 24.07.2017.
 */
import React, {Component} from 'react';


import '../lib/bootstrap.min.css';
//import '../styles/login.css';


class BlogPost extends Component {

	
	render() {
		return (
		<div className="blog-post">
            <h2 className="blog-post-title">{this.props.content.title}</h2>
			<p className="blog-post-meta"><em>{this.props.content.date}</em></p>
			<blockquote>
				{this.props.content.verbs.map((item, index) =>
			        <pre><code> <strong>{item.name} </strong>means <em> {item.value}.</em></code></pre>				
				)}
			</blockquote>
			<p>{this.props.content.post}</p>
         </div>
		 );
		     }
	
}

export default BlogPost;