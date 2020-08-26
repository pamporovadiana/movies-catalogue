import React from 'react';
import { NavLink } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';
import './Nav.css';

function Nav() {
    return (
            <nav id="navbar">
                <ul id="menu-list">
                    <li><NavLink to="/" id="log-in"><i className="fa fa-home"></i>Home</NavLink></li>
                    <li><NavLink to="/main">All Movies</NavLink></li>
                </ul>
                <ul id="registration-list">
                    <li><NavLink to="/login" id="log-in"><i className="fa fa-sign-in"></i>Log In</NavLink></li>
                    <li><NavLink to="/register" className="register">Register</NavLink></li>
                </ul>
            </nav>
    );
}

export default Nav;
