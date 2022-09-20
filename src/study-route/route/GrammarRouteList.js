import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {useEffect, useState} from "react";
import {initialTrainingRoute} from "../../serverData/InitialTrainingRoute";
import {Link} from "react-router-dom";
import { FormControlLabel, FormGroup, Switch} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from "@mui/material/IconButton";



const styleRight = {
    position: "absolute", /* блок занимает ширину содержимого, max-width её ограничивает */
    top: "10%", /* отступ сверху */
    right: '2%', // отступ справа
}


export default function CheckboxListSecondary() {

    const userId = 'dlkfjl3487f9s';
    const [userLearningRoute, setUserLearningRoute] = useState(initialTrainingRoute.filter(el => el.userId === userId));

    const handleToggle = (id) => () => {
        const newRoute = [...userLearningRoute];
        for (let el of userLearningRoute[0].userRoute) {
            if (el.id === id) el.isStudied = !el.isStudied;
            if (el.subThemes.length > 0) {
                for (let elm of el.subThemes) {
                    if (elm.id === id) elm.isStudied = !elm.isStudied;
                }
            }
        }
        setReFilter(reFilter + 1)
        setUserLearningRoute(newRoute);
    };

    const [openAll, setOpenAll] = React.useState(false);
    const [reFilter, setReFilter] = useState(1)
    const handleChange = (event) => {
        setOpenAll(event.target.checked);
        setReFilter(reFilter + 1)
    };

    const filterRoute = () => {
        const newRoute = initialTrainingRoute.filter(el => el.userId === userId)[0].userRoute.filter(el => openAll ? true : el.isStudied === openAll);
        const newUserRoutes = initialTrainingRoute.map(el => el.userId === userId ? {...el, userRoute: newRoute} : el);
        setUserLearningRoute(newUserRoutes.filter(el => el.userId === userId))
    }

        useEffect(() => {
            filterRoute()
        }, [reFilter])

    const openSubThemes = (id) => {
        const newRoute = userLearningRoute[0].userRoute.map(el => el.id === id ? {...el, isOpenSubThemes: !el.isOpenSubThemes} : el)
        const newUserRoutes = initialTrainingRoute.map(el => el.userId === userId ? {...el, userRoute: newRoute} : el);
        setUserLearningRoute(newUserRoutes.filter(el => el.userId === userId))
    }


        return (
            <div>
                <h2>Study route</h2>
                <div style={styleRight}>
                    <FormGroup>
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
                <List dense sx={{width: '100%', maxWidth: 'auto', bgcolor: 'background.paper'}}>
                    <ol>
                        {userLearningRoute[0].userRoute.map((value) => {
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
                                                { value.subThemes.length > 0 &&
                                                    <IconButton
                                                        aria-label="expand row"
                                                        size="small"
                                                        onClick={() => openSubThemes(value.id)}
                                                    >
                                                        {value.isOpenSubThemes ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                                    </IconButton>
                                                }

                                            </ListItemButton>
                                        </ListItem>


                                    </li>
                                    { value.isOpenSubThemes &&
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
        )
            ;
    }
