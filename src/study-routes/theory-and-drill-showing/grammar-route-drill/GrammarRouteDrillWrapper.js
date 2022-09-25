import React, {useEffect, useState} from "react";
import ChoseSpeed from "../../../searchAndFilter/ChoseSpeed";
import {initialSentences} from "../../../serverData/InitialSentences";
import SentenceDrill from "../../../no-theory-drills/sentence-drill/SentenceDrill";

function GrammarRouteDrillWrapper({partOfGrammarId}) {

    const [chosenSpeed, setChosenSpeed] = useState(5000);
    const [speedRange, setSpeedRange] = useState([
            {value: 4000, name: "very high"},
            {value: 6000, name: "high"},
            {value: 8000, name: "normal"},
            {value: 10000, name: "slow"},
            {value: 12000, name: "very slow"}
        ]
    );

    const [sentences, setSentences] = useState(initialSentences.filter(el => el.grammar.includes(partOfGrammarId)));
    const [randomIndex, setRandomIndex] = useState(null);

    const [openTranslation, setOpenTranslation] = useState(false);

    // индексы для показа предложений по порядку или рандомно
    let index = 0;
    const getNextIndex = () => {
        if (index === sentences.length - 1) {
            index = 0;
            return index;
        } else {
            return ++index;
        }
    };
    // индексы для показа предложений рандомно
    let randomInd = 0;
    const getRandomIndex = () => {
        let random = Math.floor(Math.random() * sentences.length);
        while (randomInd === random) {
            random = Math.floor(Math.random() * sentences.length);
        }
        randomInd = random;
        return randomInd;
    };

    // пока ждем срабатывания таймера, стартует первое предложение
    const [waitingTimer, setWaitingTimer] = useState(0)
    useEffect(() => {
        setRandomIndex(0);
        setOpenTranslation(false)
        setTimeout(() => {
            setOpenTranslation(true)
        }, chosenSpeed / 2)
    }, [waitingTimer])

    useEffect(() => {
        // таймер пересоздаётся каждый раз, когда обновляется chosenSpeed
        const id = setInterval(() => {
                if (sentences.length > 5) { // если предложений много, показываем рандомно
                    setRandomIndex(getRandomIndex());
                    setOpenTranslation(false)
                    setTimeout(() => {
                        setOpenTranslation(true)
                    }, chosenSpeed / 2)
                } else {  // если предложений мало, показываем по порядку
                    setRandomIndex(getNextIndex());
                    setOpenTranslation(false)
                    setTimeout(() => {
                        setOpenTranslation(true)
                    }, chosenSpeed / 2)
                }
            }, chosenSpeed
        );
        return () => {
            clearInterval(id);
        };
    }, [chosenSpeed]);


    return (
        <div className="App">

            <ChoseSpeed choosenSpeed={chosenSpeed} speedRange={speedRange} setChosenSpeed={setChosenSpeed}/>

            <br/>
            <SentenceDrill
                randomIndex={randomIndex}
                openTranslation={openTranslation}
                sentences={sentences}
            />
        </div>
    );
}

export default GrammarRouteDrillWrapper;

