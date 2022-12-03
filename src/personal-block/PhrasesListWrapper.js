import * as React from 'react';
import {useEffect, useState} from "react";
import {initialTrainingRoute} from "../serverData/InitialTrainingRoute";
import {initialSentences} from "../serverData/InitialSentences";
import PhrasesList from "./PhrasesList";

export default function PhrasesListWrapper({mainUrl, title}) {

    const userId = 'dlkfjl3487f9s';
    const initialPhrases = initialSentences.filter(el => el.userId === userId);
    const [phrases, setPhrases] = useState(initialPhrases);

    const handleToggle = (id) => () => {
        console.log("TOGGLE")
        const newPhrases = phrases.map(el => el.id === id ? {...el, isStudied: !el.isStydied} : el);
        setPhrases(newPhrases);
    };

    const [openAll, setOpenAll] = React.useState(true);

    const handleChange = (event) => {
        setOpenAll(event.target.checked);
        console.log(event.target.checked)
        const newPhrases = event.target.checked ? initialPhrases : initialPhrases.filter(el => el.isStudied === false);
        setPhrases(newPhrases);
    };

    // const filterRoute = () => {
    //     const newRoute = initialTrainingRoute.filter(el => el.userId === userId)[0].userRoute.filter(el => el.isGrammar === isGrammar).filter(el => openAll ? true : el.isStudied === openAll);
    //     const newUserRoutes = initialTrainingRoute.map(el => el.userId === userId ? {...el, userRoute: newRoute} : el);
    //     setPhrases(newUserRoutes.filter(el => el.userId === userId))
    // }
    //
    // useEffect(() => {
    //     filterRoute()
    // }, [reFilter])

    // const openSubThemes = (id) => {
    //     const newRoute = phrases[0].userRoute.map(el => el.id === id ? {
    //         ...el,
    //         isOpenSubThemes: !el.isOpenSubThemes
    //     } : el)
    //     const newUserRoutes = initialTrainingRoute.map(el => el.userId === userId ? {...el, userRoute: newRoute} : el);
    //     setUserLearningRoute(newUserRoutes.filter(el => el.userId === userId))
    // }

    return (
        <PhrasesList
            mainUrl={mainUrl}
            title={title}
            openAll={openAll}
            handleChange={handleChange}
            phrases={phrases}
            handleToggle={handleToggle}
        />
    );
}
