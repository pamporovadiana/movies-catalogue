import React, { Component } from 'react';
import LoginService, {} from '../../services/LoginService';
import 'font-awesome/css/font-awesome.min.css';

import './LogIn.css';

class LogIn extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };
        this.loginService = new LoginService();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.loginService = new LoginService();
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleLogin(e) {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;

        this.loginService.logIn(username, password)
                .then(data => console.log(data));
    }

    render() {
        return (
            <div id="form-container">
                <div className="log-in-form">
                    <form>
                        <h3 id="log-in"><a href="/login">Log In</a></h3>
                        <span> / </span>
                        <h3 id="register"><a href="/register">Register</a></h3>
                        <div>
                            <i className="fa fa-user"></i>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <i className="fa fa-key"></i>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button 
                            id="log-in-button" 
                            onClick={this.handleLogin}
                        >Log In
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LogIn;
