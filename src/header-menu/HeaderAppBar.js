import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../redux/actionsAuthorisation";
import {connect} from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import Logo from "./components/Logo";
import IconButtonedMenu from "./components/IconButtonedMenu";
import {AccountCircle} from "@mui/icons-material";

function HeaderAppBar(props) {

    const accountMenu = [
        {name: 'My account', link: '/private/my-account'},
        {name: 'Settings', link: '/private/settings'},
        {name: 'Drill tips', link: '/private/drill-tips'},
        {name: 'Help', link: '/private/help'},
    ];

    const studyMenu = [
        {name: 'Lessons', link: "/private/my-lessons"},
        {name: 'Phrases', link: '/private/phrases-to-remember'},
        {name: 'Grammar', link: '/private/grammar/route'},
        {name: 'Themes', link: '/private/themes/route'},
    ];

    const navigate = useNavigate();

// #5D9596
// #00838f
    return (

            <AppBar position="static" style={{background: '#00788C'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Logo vertical={true} />

                        <IconButtonedMenu studyMenu={true} menu={studyMenu} >

                        </IconButtonedMenu>

                        {/* ----ГОРИЗОНТАЛЬНОЕ МЕНЮ----*/}

                        <Logo horizontal={true} />

                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {studyMenu.map((page, ind) => (
                                    <MenuItem
                                        key={ind}
                                        onClick={() => navigate(page.link)}
                                    >
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                            ))}
                        </Box>

                        <Link to="/private/add_new_phrase_or_word" style={{color: '#fff', marginRight: '5%'}} >
                                <AddIcon/>
                        </Link>

                        {/* ---- АККАУНТ МЕНЮ ----*/}

                        <IconButtonedMenu accountMenu={true} menu={accountMenu} >

                        </IconButtonedMenu>

                    </Toolbar>
                </Container>
            </AppBar>

    )
        ;
}

const mapStateToProps = (state) => ({
    appName: state.appName,
    isUser: state.currentUser.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAppBar)




