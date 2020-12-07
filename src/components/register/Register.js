import React, { Component } from 'react';
import RegisterService from '../../services/RegisterService';
import './Register.css';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);

        this.registerService = new RegisterService();
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
        console.log(name, value);
    }

    handleSubmit(e) {
        e.preventDefault();
        const validated = this.validateForm();

        console.log(validated);

        if(validated) {
            this.registerService.registerUser(this.state);
        }
    }

    validateForm() {
        if(this.state.firstName.match('[A-Z]{1}[a-z]{1,30}') &&
            this.state.lastName.match('[A-Z]{1}[a-z]{1,30}') &&
            this.state.username.match('[A-Z][a-z]{1,30}') &&
            // TODO: email validation
            // this.state.email.match('/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/') &&
            this.state.password.match('[A-Za-z0-9]{1,30}') &&
            this.state.confirmPassword.match(this.state.password)
        ) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div id="form-container">
                <div className="register-form">
                    <form id="register">
                        <h3 id="log-in"><a href="/login">Log In</a></h3> 
                        <span> / </span>
                        <h3 id="register"><a href="/register">Register</a></h3>
                            <div>
                                <i className="fa fa-user"></i>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={this.handleInputChange}
                                    value={this.state.firstName}
                                    // require
                                >
                                </input>
                            </div>
                            <div>
                                <i className="fa fa-user"></i>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={this.handleInputChange}
                                    value={this.state.lastName}
                                    // require
                                >
                                </input>
                            </div>
                            <div>
                                <i className="fa fa-user-circle"></i>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={this.handleInputChange}
                                    value={this.state.username}
                                    // require
                                >
                                </input>
                            </div>
                            <div>
                                <i className="fa fa-envelope-square"></i>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={this.handleInputChange}
                                    value={this.state.email}
                                    // require
                                >
                                </input>
                            </div>
                            <div>
                                <i className="fa fa-key"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={this.handleInputChange}
                                    value={this.state.password}
                                    // require
                                >
                                </input>
                            </div>
                            <div>
                                <i className="fa fa-key"></i>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={this.handleInputChange}
                                    value={this.state.confirmPassword}
                                    // require
                                >
                                </input>
                            </div>
                        <button type="submit"
                            id="register-button" 
                            onClick={this.handleSubmit}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        );
    };
}


export default Register;