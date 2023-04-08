import React from 'react';
import logo from '../images/logo192.png'


const LogoHeader = (props) => {
    return (

            <div
                style={{
                    //margin: '0 5% 2% 5%',
                    display: 'grid',
                    gridTemplateColumns: '2fr 6fr',
                    alignItems: 'flex-end',
                    flexWrap: 'wrap',
                    color: '#0277bd'
                }}
            >
                <img src={logo} style={{width: '100%', padding: '15px 0'}} alt=""/>
                <h2 style={{padding: '5px 5px'}}>  {props.appName}</h2>
            </div>

    );
};

export default LogoHeader;