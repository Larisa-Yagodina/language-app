import React from 'react';
import logo from '../images/logo192.png'


const LogoHeader = (props) => {
    return (

            <div
                style={{
                    // margin: '0 30% 5% 30%',
                    display: 'grid',
                    gridTemplateColumns: '2fr 6fr',
                    alignItems: 'flex-end',
                    flexWrap: 'wrap',
                    color: '#0277bd'
                }}
            >
                <img src={logo} style={{width: '80%'}} alt=""/>
                <h2>{props.appName}</h2>
            </div>

    );
};

export default LogoHeader;