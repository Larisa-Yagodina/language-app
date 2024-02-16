import * as React from 'react';
import {useEffect, useState} from "react";
import {initialTrainingRoute} from "../../data/serverData/InitialTrainingRoute";
import RouteList from "./RouteList";

export default function RouteListWrapper({mainUrl, title, isGrammar}) {

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

    const [openAll, setOpenAll] = React.useState(true);
    const [reFilter, setReFilter] = useState(1)
    const handleChange = (event) => {
        setOpenAll(event.target.checked);
        setReFilter(reFilter + 1)
    };

    const filterRoute = () => {
        const newRoute = initialTrainingRoute.filter(el => el.userId === userId)[0].userRoute.filter(el => el.isGrammar === isGrammar).filter(el => openAll ? true : el.isStudied === openAll);
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
            mainUrl={ '/private' + mainUrl}
            title={title}
            openSubThemes={openSubThemes}
            openAll={openAll}
            handleChange={handleChange}
            route={userLearningRoute[0].userRoute}
            handleToggle={handleToggle}
        />
    );
}
