import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import IconButton from "@mui/material/IconButton";
import {useState} from "react";
import * as React from "react";
import ItemModal from "./ModalForDeleteUpdateItem";

export default function MenuForDeleteUpdateItem(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpenDrawer(!isOpenDrawer);
    };

    const [mode, setMode] = useState('')

    const onEdit = () => {
        setMode('edit')
        toggleDrawer()
        handleClose()
    }

    const onDelete = () => {
        setMode('delete')
        toggleDrawer()
        handleClose()
    }

    return (
        <>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon color={'success'}/>
            </IconButton>

            <ItemModal mode={mode} toggleDrawer={toggleDrawer} isOpenDrawer={isOpenDrawer} phrase={props.phrase}/>

            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={onEdit}>
                    <ModeEditOutlineOutlinedIcon color={'action'} />
                </MenuItem>
                <MenuItem onClick={onDelete}>
                    <DeleteOutlineIcon color={'action'} />
                </MenuItem>
            </Menu>
        </>
    );
}