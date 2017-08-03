/**
 * Created by Sasha on 24.07.2017.
 */
import React, {Component} from 'react';


import '../lib/bootstrap.min.css';
import '../styles/login.css';


class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <form className="form-horizontal">
                            <span className="heading">АВТОРИЗАЦИЯ</span>
                            <div className="form-group help">
                                <input type="text" className="form-control" id="inputPassword"
                                       placeholder="Name"/>
                            </div>
                            <div className="form-group  ">
                                <input type="email" className="form-control" id="inputEmail" placeholder="E-mail"/>
                            </div>
                            <div className="form-group help">
                                <input type="password" className="form-control" id="inputPassword"
                                       placeholder="Password"/>
                            </div>
                            <div className="form-group">

                                <button type="submit" className="btn btn-default">Send</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>



        );
    }
}

export default Login;