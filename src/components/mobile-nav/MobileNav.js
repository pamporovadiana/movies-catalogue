import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import 'font-awesome/css/font-awesome.min.css';
import './MobileNav.css';

const bars = <FontAwesomeIcon icon={faBars} />;

class MobileNav extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        console.log('show');

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
      
    closeMenu() {
        console.log('hide');

        this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        return (
            <div id="dropdown-menu">
                <button onClick={this.showMenu}>
                    {bars}
                </button>

                {
                    this.state.showMenu
                        ? (
                            <nav id="mobile-navbar">
                                <ul id="menu-list">
                                    <li><NavLink to="/" id="log-in"><i className="fa fa-home"></i>Home</NavLink></li>
                                    <li><NavLink to="/main">All Movies</NavLink></li>
                                </ul>
                                <ul id="registration-list">
                                    <li><NavLink to="/login" id="log-in"><i className="fa fa-sign-in"></i>Log In</NavLink></li>
                                    <li><NavLink to="/register" className="register">Register</NavLink></li>
                                </ul>
                            </nav>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default MobileNav;
