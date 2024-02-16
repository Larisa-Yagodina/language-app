import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {newGrammar} from '../data/serverData/NewGrammar';
import {Link} from "react-router-dom";
import CustomLink from "../utils/UI/CustomLink";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";

const ListItem2 = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>

                <ListItemText primary={props.order + '. ' + props.section.title}/>
                {
                    !!newGrammar.filter(el => el.sectionId === props.section.id).length &&
                    <>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </>
                }

            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>

                {
                    newGrammar.filter(el => el.sectionId === props.section.id)
                        .map(item =>


                            <ListItem
                                sx={{padding: '2px 45px 2px 45px', display: 'flex'}}
                                secondaryAction={
                                    <Checkbox
                                        edge="end"
                                        sx={{padding: '2px', justifyContent: 'right'}}
                                        checked={item.isStudied}
                                         />
                                }
                            >
                                <CustomLink to={item.id}>
                                    <ListItemText primary={item.russianTitle}/>
                                </CustomLink>

                            </ListItem>
                        )
                }

            </Collapse>
        </>
    );
};

export default ListItem2;