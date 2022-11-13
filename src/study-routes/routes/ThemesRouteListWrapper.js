import * as React from 'react';
import {useEffect, useState} from "react";
import {initialTrainingRoute} from "../../serverData/InitialTrainingRoute";
import RouteList from "./RouteList";

export default function ThemesRouteListWrapper() {

    const userId = 'dlkfjl3487f9s';
    const [userLearningThemesRoute, setUserLearningThemesRoute] = useState(initialTrainingRoute.filter(el => el.userId === userId));

    const handleToggle = (id) => () => {
        const newRoute = [...userLearningThemesRoute];
        for (let el of userLearningThemesRoute[0].userThemesRoute) {
            if (el.id === id) el.isStudied = !el.isStudied;
            if (el.subThemes.length > 0) {
                for (let elm of el.subThemes) {
                    if (elm.id === id) elm.isStudied = !elm.isStudied;
                }
            }
        }
        setReFilter(reFilter + 1)
        setUserLearningThemesRoute(newRoute);
    };

    const [openAll, setOpenAll] = React.useState(false);
    const [reFilter, setReFilter] = useState(1)
    const handleChange = (event) => {
        setOpenAll(event.target.checked);
        setReFilter(reFilter + 1)
    };

    const filterRoute = () => {
        const newRoute = initialTrainingRoute.filter(el => el.userId === userId)[0].userThemesRoute.filter(el => openAll ? true : el.isStudied === openAll);
        const newUserThemesRoutes = initialTrainingRoute.map(el => el.userId === userId ? {...el, userThemesRoute: newRoute} : el);
        setUserLearningThemesRoute(newUserThemesRoutes.filter(el => el.userId === userId))
    }

    useEffect(() => {
        filterRoute()
    }, [reFilter])

    const openSubThemes = (id) => {
        const newRoute = userLearningThemesRoute[0].userThemesRoute.map(el => el.id === id ? {
            ...el,
            isOpenSubThemes: !el.isOpenSubThemes
        } : el)
        const newUserThemesRoutes = initialTrainingRoute.map(el => el.userId === userId ? {...el, userThemesRoute: newRoute} : el);
        setUserLearningThemesRoute(newUserThemesRoutes.filter(el => el.userId === userId))
    }


    return (
        <RouteList
            mainUrl={'/themes_route'}
            title={"Themes route"}
            openSubThemes={openSubThemes}
            openAll={openAll}
            handleChange={handleChange}
            route={userLearningThemesRoute[0].userThemesRoute}
            handleToggle={handleToggle}
        />
    )
        ;
}
