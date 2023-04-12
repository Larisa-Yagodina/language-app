import React from 'react';
import {connect} from "react-redux";

const MyAccount = (props) => {

    return (
        <div style={{margin: '35px 20px'}}>
            <h2>My Account</h2>
            <h3>Email: {props.user.data.email}</h3>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export default connect(mapStateToProps)(MyAccount);