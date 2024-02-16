import React, {useEffect, useState} from "react";
import ChoseSpeed from "../../../utils/drills/ChoseSpeed";
import SentenceDrill from "../../../utils/drills/SentenceDrill";

function DrillWrapper({theory}) {

    console.log(theory.sentences)

    const [chosenSpeed, setChosenSpeed] = useState(15000);
    const [speedRange, setSpeedRange] = useState([
            {value: 4000, name: "very high"},
            {value: 7000, name: "high"},
            {value: 9000, name: "normal"},
            {value: 12000, name: "slow"},
            {value: 16000, name: "very slow"}
        ]
    );

    // const [sentences, setSentences] = useState(initialSentences.filter(el => option === 'grammar' ?
    //     el.grammar.includes(partOfGrammarId) :
    //     el.themes.includes(partOfGrammarId)
    // ));

    const [sentences, setSentences] = useState(theory.sentences);

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

export default DrillWrapper;

