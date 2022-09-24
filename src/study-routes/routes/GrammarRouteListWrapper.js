import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {useEffect, useState} from "react";
import {initialTrainingRoute} from "../../serverData/InitialTrainingRoute";
import {Link} from "react-router-dom";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from "@mui/material/IconButton";
import RouteList from "./util/RouteList";



export default function GrammarRouteListWrapper() {

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
        const newRoute = userLearningRoute[0].userRoute.map(el => el.id === id ? {
            ...el,
            isOpenSubThemes: !el.isOpenSubThemes
        } : el)
        const newUserRoutes = initialTrainingRoute.map(el => el.userId === userId ? {...el, userRoute: newRoute} : el);
        setUserLearningRoute(newUserRoutes.filter(el => el.userId === userId))
    }


    return (
        <RouteList
            title={"Grammar route"}
            openSubThemes={openSubThemes}
            openAll={openAll}
            handleChange={handleChange}
            route={userLearningRoute[0].userRoute}
            handleToggle={handleToggle}
        />
    );
}
