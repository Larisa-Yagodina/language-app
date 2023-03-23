import React from 'react';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {logout} from "../redux/actions";
import {connect} from "react-redux";

const AuthMenu = (props) => {

    // const {storeUser} = useContext(Context)

    return (
        <div>
            <p>{props.user.isAuth
                ?
                <>
                    {props.user.data.email}{' '}
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                    <Button
                        onClick={() => props.logout()}
                        variant="outlined"
                    > Logout</Button>
                    </Link>
                </>
                :
                <Typography sx={{minWidth: 100}}>
                    <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>
                        Login
                    </Link>
                </Typography>
            }
            </p>
            <p style={{color: 'palevioletred'}}>{props.user.data.isActivated === 'true' ? null : 'Подтвердите аккаунт'}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthMenu);
