import React from 'react';
import './Social.css';
import '../../../node_modules/font-awesome/css/font-awesome.css.map';

function Social() {
    return (
        <div id="social-icons">
            <ul>
                <li id="facebook"><a href="https://www.facebook.com/diana.pamporova" target="_blank"><i className="fa fa-facebook-square"></i>Facebook</a></li>
                <li id="instagram"><a href="https://www.instagram.com/dianapamporova/" target="_blank"><i className="fa fa-instagram"></i>Instagram</a></li>
                <li id="linkedin"><a href="https://www.linkedin.com/in/diana-pamporova-846278171/" target="_blank"><i className="fa fa-linkedin"></i>Linkedin</a></li>
            </ul>
        </div>
    );
}

export default Social;
 