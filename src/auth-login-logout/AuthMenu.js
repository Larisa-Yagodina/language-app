import React, {useContext} from 'react';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {Context} from "../index";
import Button from "@mui/material/Button";

const AuthMenu = () => {

    const {storeUser} = useContext(Context)

    return (
        <div>
            <p>{storeUser.isAuth
                ?
                <>
                    {storeUser.user.email}{' '}
                    <Button
                        onClick={() => storeUser.logout()}
                        variant="outlined"
                    > Logout</Button>
                </>
                :
                <Typography sx={{minWidth: 100}}>
                    <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>
                        Login
                    </Link>
                </Typography>
            }
            </p>
            <p style={{color: 'palevioletred'}}>{storeUser.user.isActivated === 'true' ? null : 'Подтвердите аккаунт'}</p>
        </div>
    );
};

export default AuthMenu;