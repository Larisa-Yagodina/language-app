import React from 'react';
import {connect} from "react-redux";
import {appLinks} from "../routes/appLinks";
import Button from "@mui/material/Button";
import {requestForActivationLinkMail} from "../redux/actionsAuthorisation";
import CustomLink from "../utils/CustomLink";

const MyAccount = (props) => {

    return (
        <div style={{margin: '35px 20px'}}>
            <h1>My Account</h1>
            <h3>Email: {props.user.data.email}</h3>
            {!props.user.data.isActivated &&
                <p style={{color: 'red'}}>Ваш емэйл ожидает подтверждения. {' '}
                    <Button
                        onClick={() => props.requestForActivationLinkMail(props.user.data.email)}
                        variant="outlined"
                    >Получить емэйл еще раз
                    </Button></p>
            }

            <CustomLink type='button' to={appLinks.changePassword}>
                Сменить пароль
            </CustomLink>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    requestForActivationLinkMail: (email) => dispatch(requestForActivationLinkMail(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);