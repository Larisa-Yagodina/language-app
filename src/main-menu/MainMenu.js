import React, {useState} from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import KeyIcon from '@mui/icons-material/Key';
import ListIcon from '@mui/icons-material/List';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import AuthMenu from "../auth-login-logout/AuthMenu";

export default function MainMenu(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <nav>
                <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>

                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ml: 2}}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <ListIcon sx={{width: 32, height: 32}}>
                            </ListIcon>
                        </IconButton>

                        <Typography sx={{minWidth: 100}}>
                            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                                {props.appName}
                            </Link>
                        </Typography>

                        <Typography sx={{minWidth: 200}}>
                            <Link to="/add_new_phrase_or_word" style={{textDecoration: 'none', color: 'black'}}>
                                Add to remember
                            </Link>
                        </Typography>

                    <Typography sx={{minWidth: 400}}>
                            <AuthMenu/>
                    </Typography>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >

                    <MenuItem>
                        <Avatar/> My account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small"/>
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <Divider/>
                    <Link to="/my-lessons" style={{textDecoration: 'none', color: 'black'}}>
                        <MenuItem>
                            <ListItemIcon>
                                <AutoGraphIcon fontSize="small"/>
                            </ListItemIcon>
                            My lessons
                        </MenuItem>
                    </Link>
                    <Link to="/phrases-to-remember" style={{textDecoration: 'none', color: 'black'}}>
                        <MenuItem>
                            <ListItemIcon>
                                <FaceRetouchingNaturalIcon fontSize="small"/>
                            </ListItemIcon>
                            Phrases to remember
                        </MenuItem>
                    </Link>
                    {/*<Link to="/words-to-remember" style={{textDecoration: 'none', color: 'black'}}>*/}
                    {/*    <MenuItem>*/}
                    {/*        <ListItemIcon>*/}
                    {/*            <FaceRetouchingNaturalIcon fontSize="small"/>*/}
                    {/*        </ListItemIcon>*/}
                    {/*        Words to remember*/}
                    {/*    </MenuItem>*/}
                    {/*</Link>*/}
                    <Divider/>
                    {/*<Link to="/new_words_drill" style={{textDecoration: 'none', color: 'black'}}>*/}
                    {/*    <MenuItem>*/}
                    {/*        <ListItemIcon>*/}
                    {/*            <PlaylistAddCheckIcon fontSize="small"/>*/}
                    {/*        </ListItemIcon>*/}
                    {/*        Words*/}
                    {/*    </MenuItem>*/}
                    {/*</Link>*/}
                    <Link to="/grammar_route" style={{textDecoration: 'none', color: 'black'}}>
                        <MenuItem>
                            <ListItemIcon>
                                <KeyIcon fontSize="small"/>
                            </ListItemIcon>
                            Grammar
                        </MenuItem>
                    </Link>
                    <Link to="/themes_route" style={{textDecoration: 'none', color: 'black'}}>
                        <MenuItem>
                            <ListItemIcon>
                                <ConnectWithoutContactIcon fontSize="small"/>
                            </ListItemIcon>
                            Themes
                        </MenuItem>
                    </Link>
                    <Divider/>

                    <Link to="/drill-tips" style={{textDecoration: 'none', color: 'black'}}>
                        <MenuItem>
                            <ListItemIcon>
                                <InfoOutlinedIcon fontSize="small"/>
                            </ListItemIcon>
                            Drill tips
                        </MenuItem>
                    </Link>

                    <Link to="/help" style={{textDecoration: 'none', color: 'black'}}>
                        <MenuItem>
                            <ListItemIcon>
                                <ContactSupportOutlinedIcon fontSize="small"/>
                            </ListItemIcon>
                            Help
                        </MenuItem>
                    </Link>

                    <Link to="/logout" style={{textDecoration: 'none', color: 'black'}}>
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small"/>
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Link>
                </Menu>
            </nav>
            <AllRoutes/>
        </div>
    );
}




