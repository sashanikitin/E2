/**
 * Created by Sasha on 24.07.2017.
 */
import React, {Component} from 'react';


import '../lib/bootstrap.min.css';
//import '../styles/login.css';


class Statistics extends Component {
    render() {
        return (
          <div className="sidebar-module">
            <h4>Statistics</h4>
           	<table className="table table-condensed">
			<tr className="info">
			   <td >Posts </td>
			   <td>0</td>
			</tr>
			<tr className="active"> 
			   <td >Words </td>
			   <td>666</td>
			</tr>
			<tr className="success">
				<td>Words for repeat</td>
				<td>007</td>
			</tr>
			<tr className="warning">
				<td>Best result in to V/ing</td>
				<td>5%</td>
			</tr>
			</table>
          </div>


        );
    }
}

export default Statistics;