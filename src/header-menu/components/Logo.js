import React from 'react';
import Typography from "@mui/material/Typography";
import logo from "../../images/logo192.png";
import {connect} from "react-redux";

const Logo = (props) => {

    const horizontal = {
        display: {xs: 'flex', md: 'none'},
        flexGrow: 1,
    }

    const vertical  = {
        display: {xs: 'none', md: 'flex'},
    }

    const commonStyles = {
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.1rem',
        color: 'inherit',
        textDecoration: 'none',
    }

    const headerStyle = props.vertical ? {...commonStyles, ...vertical} : {...commonStyles, ...horizontal};

    return (
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{...headerStyle}}
        >
            <img src={logo} style={{width: '35px', margin: 'auto 7px'}} alt="App logo"/>
            {props.appName}
        </Typography>
    );
};

const mapStateToProps = (state) => ({
    appName: state.appName,
})

export default connect(mapStateToProps)(Logo);