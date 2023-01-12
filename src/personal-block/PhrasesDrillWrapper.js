import React, {useEffect, useState} from "react";
import ChoseSpeed from "../searchAndFilter/ChoseSpeed";
import SentenceDrill from "../no-theory-drills/sentence-drill/SentenceDrill";
import initialUserPhrases from "../serverData/InitialUserPhrases";


function PhasesDrillWrapper() {

    const [chosenSpeed, setChosenSpeed] = useState(15000);
    const [speedRange, setSpeedRange] = useState([
            {
                value: 4000,
                name: "very high"
            },
            {
                value: 6000,
                name: "high"
            },
            {
                value: 8000,
                name: "normal"
            },
            {
                value: 10000,
                name: "slow"
            },
            {
                value: 12000,
                name: "very slow"
            }
        ]
    );

    const userId = 'dlkfjl3487f9s';
    const [sentences, setSentences] = useState(initialUserPhrases.filter(el => el.userId === userId).filter(el => !el.isStudied));

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
        // пока ждем, пока сработает таймер
        setRandomIndex(0);
        setOpenTranslation(false)
        setTimeout(() => {
            setOpenTranslation(true)
        }, chosenSpeed / 2)
    }, [waitingTimer])


    // таймер — показывает предложения одно за другим
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

            <h3> My phrases to learn </h3>

            <div style={{background: 'white', height: '90px'}}>
                <ChoseSpeed speedRange={speedRange} setChosenSpeed={setChosenSpeed}/>
            </div>

            <div style={{background: 'white', height: '160px'}}>
                <SentenceDrill
                    randomIndex={randomIndex}
                    openTranslation={openTranslation}
                    sentences={sentences}
                />
            </div>

        </div>
    );
}

export default PhasesDrillWrapper;


// работа useEffect и setInterval
// https://ru.stackoverflow.com/questions/1305386/react-%D0%9E%D0%B1%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B8-setinterval-%D0%BF%D0%BE-%D0%B2%D0%BD%D0%B5%D1%88%D0%BD%D0%B5%D0%B9-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9