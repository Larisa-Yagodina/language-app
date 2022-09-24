import React from 'react';
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
}

const styleRight = {
    marginLeft: 'auto',
    marginRight: 0,
}

export default function RouteList ({openSubThemes, openAll, handleChange, route, handleToggle, title}) {

    console.log(handleToggle)

    return (
        <div>
            <div style={wrapperStyle}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div style={styleRight}>
                    <br/>
                    <FormGroup style={{marginBottom: 0}}>
                        <FormControlLabel
                            value="start"
                            control={
                                <Switch
                                    color="success"
                                    checked={openAll}
                                    onChange={handleChange}
                                    aria-label="route switch"
                                />}
                            label="All"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </div>
            </div>
            <List dense sx={{width: '100%', maxWidth: 'auto', bgcolor: 'background.paper'}}>
                <ol>
                    {route.map((value) => {
                        const labelId = value.id;
                        return (
                            <div>
                                <li>
                                    <ListItem
                                        key={value.id}
                                        secondaryAction={
                                            <Checkbox
                                                color="success"
                                                edge="end"
                                                onChange={handleToggle(value.id)}
                                                checked={value.isStudied}
                                                inputProps={{'aria-labelledby': labelId}}
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <Link to={value.link} style={{textDecoration: 'none', color: 'black'}}>
                                                <ListItemText id={labelId} primary={value.name}/>
                                            </Link>
                                            {' '}
                                            {value.subThemes.length > 0 &&
                                                <IconButton
                                                    aria-label="expand row"
                                                    size="small"
                                                    onClick={() => openSubThemes(value.id)}
                                                >
                                                    {value.isOpenSubThemes ? <KeyboardArrowUpIcon/> :
                                                        <KeyboardArrowDownIcon/>}
                                                </IconButton>
                                            }

                                        </ListItemButton>
                                    </ListItem>


                                </li>
                                {value.isOpenSubThemes &&
                                    <ul>
                                        {value.subThemes.map((subTheme) => {
                                            const labelId = subTheme.id;
                                            return (
                                                <li>
                                                    {/*<ListItem*/}
                                                    {/*    key={subTheme.id}*/}
                                                    {/*    secondaryAction={*/}
                                                    {/*        <Checkbox*/}
                                                    {/*            edge="end"*/}
                                                    {/*            color="success"*/}
                                                    {/*            onChange={handleToggle(subTheme.id)}*/}
                                                    {/*            checked={subTheme.isStudied}*/}
                                                    {/*            inputProps={{'aria-labelledby': labelId}}*/}
                                                    {/*        />*/}
                                                    {/*    }*/}
                                                    {/*    disablePadding*/}
                                                    {/*>*/}
                                                    <ListItemButton>
                                                        <Link to={subTheme.link}
                                                              style={{textDecoration: 'none', color: 'black'}}>
                                                            <ListItemText id={labelId} primary={subTheme.name}/>
                                                        </Link>
                                                    </ListItemButton>
                                                    {/*</ListItem>*/}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                }
                            </div>
                        );
                    })}
                </ol>
            </List>
        </div>
    );
};

