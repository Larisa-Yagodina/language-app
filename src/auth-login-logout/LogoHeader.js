import React from 'react';
import logo from '../images/app-logo.png'
import {Link} from "react-router-dom";


const LogoHeader = (props) => {
    return (

            <div
                style={{
                    margin: '0 40% 0 20%',
                    color: '#0277bd',
                }}
            >
                <Link to='/'>
                <img src={logo} style={{width: '100%', padding: '15px 0'}} alt=""/>
                </Link>
            </div>

    );
};

export default LogoHeader;