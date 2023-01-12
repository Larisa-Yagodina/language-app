import * as React from 'react';
import { useState } from "react";
import {initialSentences} from "../serverData/InitialSentences";
import PhrasesList from "./PhrasesList";
import initialUserPhrases from "../serverData/InitialUserPhrases";

export default function PhrasesListWrapper({mainUrl, title}) {

    const userId = 'dlkfjl3487f9s';
    const [initialPhrases, setInitialPhrases] = useState(initialUserPhrases.filter(el => el.userId === userId).map(el => ({...el, isOpen: false})));
    const [phrases, setPhrases] = useState(initialPhrases);


    const handleToggle = (id) => () => {
        const newPhrases = phrases.map(el => el.id === id ? {...el, isStudied: !el.isStudied} : el);
        setPhrases(newPhrases);
        setInitialPhrases(newPhrases)
    };

    const openNotes = (id) => {
        const newPhrases = phrases.map(el => el.id === id ? {...el, isOpen: !el.isOpen} : el)
        setPhrases(newPhrases)
    }

    const [openAll, setOpenAll] = React.useState(true);

    const handleChange = (event) => {
        setOpenAll(event.target.checked);
        const newPhrases = event.target.checked ? initialPhrases : initialPhrases.filter(el => el.isStudied === false);
        setPhrases(newPhrases);
    };

    return (
        <PhrasesList
            mainUrl={mainUrl}
            title={title}
            openAll={openAll}
            handleChange={handleChange}
            phrases={phrases}
            handleToggle={handleToggle}
            openNotes={openNotes}
        />
    );
}
