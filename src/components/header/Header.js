import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

import './Header.css';

import Nav from '../nav/Nav.js';
import MobileNav from '../mobile-nav/MobileNav.js';

function Header() {
    return (
        <header>
            <h1 id="title"><Link to="/">Movies Catalogue</Link></h1>
            <Nav id="header-nav"/>  
            <MobileNav id="heder-mobile-nav"/>
        </header>
    );
}

export default Header;
