import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {logout} from "../../redux/actionsAuthorisation";
import {connect} from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import {AccountCircle} from "@mui/icons-material";

const IconButtonedMenu = ({children, ...props}) => {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = (to) => {
        navigate(to);
        setAnchorEl(null);
    };

    const handleCloseLogout = () => {
        props.logout()
        setAnchorEl(null);
    };
    const handleCloseLogin = () => {
        navigate('/login')
        setAnchorEl(null);
    };

    const menu = props.menu;
    let menuSX;
    let boxStyle;
    let tooltipTitle;
    let anchorOrigin;
    let transformOrigin;

    if (props.accountMenu) {
        boxStyle = {flexGrow: 0}
        menuSX = {mt: '45px'};
        tooltipTitle = "Open account menu";
        anchorOrigin = {
            vertical: 'top',
            horizontal: 'right',
        };
        transformOrigin = {
            vertical: 'top',
            horizontal: 'right',
        }
    }

    if (props.studyMenu) {
        boxStyle = {flexGrow: 1, display: {xs: 'flex', md: 'none'}};
        menuSX = {display: {xs: 'block', md: 'none'}};
        tooltipTitle = "Open study menu";
        anchorOrigin = {
            vertical: 'bottom',
            horizontal: 'left',
        };
        transformOrigin = {
            vertical: 'top',
            horizontal: 'left',
        };
    }

    return (
        <Box sx={{boxStyle}}>
            <Tooltip title={tooltipTitle}>
                <IconButton
                    size="large"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenMenu}
                    color="inherit"
                >
                    {props.studyMenu ? <MenuIcon/> : <AccountCircle/>}
                </IconButton>
            </Tooltip>

            <Menu
                sx={menuSX}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                keepMounted
                transformOrigin={transformOrigin}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
            >
                {menu.map((page, ind) => (
                    <MenuItem key={ind} onClick={() => handleCloseMenu(page.link)}>
                        <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                ))}

                {props.isUser ?
                    <MenuItem onClick={handleCloseLogout}>
                        <Typography textAlign="center" style={{color: '#ad1457'}}>Logout</Typography>
                    </MenuItem>
                    :
                    <MenuItem onClick={handleCloseLogin}>
                        <Typography textAlign="center" style={{color: '#ad1457'}}>Login</Typography>
                    </MenuItem>
                }

            </Menu>
        </Box>
    );
};

const mapStateToProps = (state) => ({
    isUser: state.currentUser.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(IconButtonedMenu);