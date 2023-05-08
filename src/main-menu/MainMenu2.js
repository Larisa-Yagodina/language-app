import React, {useState} from "react";
import AllRoutes from "./routes/AllRoutes";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../images/logo192.png";
import {AccountCircle} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {logout} from "../redux/actionsAuthorisation";
import {connect} from "react-redux";
import AddIcon from '@mui/icons-material/Add';

function MainMenu2(props) {

    const mainMenu2 = [
        {name: 'Lessons', link: "/my-lessons"},
        {name: 'Phrases', link: '/phrases-to-remember'},
        {name: 'Grammar', link: '/grammar_route'},
        {name: 'Themes', link: '/themes_route'}
    ];
    const accountMenu2 = [
        {name: 'My account', link: '/my-account'},
        {name: 'Settings', link: '/settings'},
        {name: 'Drill tips', link: '/drill-tips'},
        {name: 'Help', link: '/help'},
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseLogout = () => {
        props.logout()
        setAnchorElUser(null);
    };


// #5D9596
// #00838f
    return (
        <>
        <AppBar position="static"  style={{ background: '#00788C'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={logo} style={{width: '35px', margin: 'auto 7px'}} alt="" />
                        {props.appName}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {mainMenu2.map((page, ind) => (
                                <MenuItem key={ind} onClick={handleCloseNavMenu}>
                                    <Link to={page.link} style={{textDecoration: 'none', color: 'black'}}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={logo} style={{width: '35px', margin: 'auto 7px'}} alt="" />
                        {props.appName}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {mainMenu2.map((page, ind) => (
                            <Link key={ind} to={page.link} style={{textDecoration: 'none', color: 'black'}}>
                            <Button
                                key={ind}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                            </Link>
                        ))}
                    </Box>


                        <Link to="/add_new_phrase_or_word" style={{textDecoration: 'none', color: 'black'}}>
                            <Button sx={{ color: '#fff' }}>
                                <AddIcon />
                            </Button>
                        </Link>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            {/*<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
                                {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
                            {/*</IconButton>*/}
                            <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenUserMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>

                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {accountMenu2.map((setting, ind) => (
                                <MenuItem key={ind} onClick={handleCloseUserMenu}>
                                    <Link to={setting.link} style={{textDecoration: 'none', color: 'black'}}>
                                    <Typography textAlign="center">{setting.name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={handleCloseLogout}>
                                    <Typography textAlign="center" style={{color: '#ad1457'}}>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
            <AllRoutes/>
        </>
    );
}

const mapStateToProps = (state) => ({
    appName: state.appName
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu2)




