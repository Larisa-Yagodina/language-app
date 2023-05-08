import React from 'react';
import Box from '@mui/joy/Box';

import LogoHeader from "./LogoHeader";
import {connect} from "react-redux";


const ConfirmationEmailWaiting = (props) => {



    return (

        <Box
            sx={{
                margin: '0 25% 5% 25%',
                py: 10,
                display: 'grid',
                gap: 2,
                alignItems: 'center',
                flexWrap: 'wrap',
            }}
        >
            <LogoHeader appName={props.appName}/>

                <h3>Ваш емэйл ожидает подтверждения, чтобы можно было приступить к занятиям.</h3>

        </Box>


    )
        ;
};

const mapStateToProps = (state) => ({
    appName: state.appName
})

export default connect(mapStateToProps)(ConfirmationEmailWaiting);