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
import { Routes, Route, Link } from "react-router-dom";
import GrammarThemesDrillWrapper from "../grammar-themes-drill/GrammarThemesDrillWrapper";
import WordsDrillWrapper from "../words-drill/WordsDrillWrapper";
import KeyIcon from '@mui/icons-material/Key';
import ListIcon from '@mui/icons-material/List';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GrammarTheory from "../grammar-theory/GrammarTheory";
import GrammarRoute from "../training-route/GrammarRoute";
import AllRoutes from "./routes/AllRoutes";

export default function MainMenu() {

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
                    <>
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
                        {/*<Link to="/speak_fluent-drill" style={{ textDecoration: 'none', color: 'black'}}>*/}
                        <Typography sx={{minWidth: 100}}>Learn and Train</Typography>
                        {/*</Link>*/}
                    </>
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
                    <Link to="/speak_fluent-drill" style={{ textDecoration: 'none', color: 'black'}}>
                    <MenuItem>
                        <ListItemIcon>
                            <AutoGraphIcon fontSize="small"/>
                        </ListItemIcon>
                        Think fast, speak fluently
                    </MenuItem>
                    </Link>
                    <Link to="/new_words_drill" style={{ textDecoration: 'none', color: 'black'}}>
                        <MenuItem>
                            <ListItemIcon>
                                <PlaylistAddCheckIcon fontSize="small"/>
                            </ListItemIcon>
                            Learn new words
                        </MenuItem>
                    </Link>
                    <Link to="/grammar_route" style={{ textDecoration: 'none', color: 'black'}}>
                        <MenuItem>
                            <ListItemIcon>
                                <KeyIcon fontSize="small"/>
                            </ListItemIcon>
                            Grammar route
                        </MenuItem>
                    </Link>
                    <Divider/>
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small"/>
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                </Menu>
            </nav>
            <AllRoutes />
        </div>
    );
}




