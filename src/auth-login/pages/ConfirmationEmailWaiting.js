import React from 'react';
import Box from '@mui/joy/Box';
import {connect} from "react-redux";

const ConfirmationEmailWaiting = () => {

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

                <h3>Ваш емэйл ожидает подтверждения, чтобы можно было приступить к занятиям.</h3>

        </Box>


    )
        ;
};

const mapStateToProps = (state) => ({
    appName: state.appName
})

export default connect(mapStateToProps)(ConfirmationEmailWaiting);