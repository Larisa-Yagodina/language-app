import '../../App.css';
import React, {useEffect, useState} from "react";
import ChoseSpeed from "../../searchAndFilter/ChoseSpeed";
import {initialSentences} from "../../serverData/InitialSentences";
import {initialPartOfSpeech} from "../../serverData/InitialPartOfSpeech";
import ChooseOption from "../../searchAndFilter/ChooseOption";
import {initialDefinitions} from "../../serverData/InitialDefinitions";
import ChooseNextOption from "../../searchAndFilter/ChooseNextOption";
import {initialWords} from "../../serverData/InitialWords";
import SentenceDrill from "../sentence-drill/SentenceDrill";

function WordsDrillWrapper() {

    const [chosenSpeed, setChosenSpeed] = useState(5000);
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


    const [sentences, setSentences] = useState(initialSentences);
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

    // выбор части речи
    const [partsOfSpeech, setPartsOfSpeech] = useState(initialPartOfSpeech);
    const [chosenPartOfSpeech, setChosenPartOfSpeech] = useState('ldkjf203948')

    // выбор слова
    const [words, setWords] = useState(initialWords);
    const [chosenWord, setChosenWord] = useState('sdlk23234klsdfk')

    // выбор дефиниции
    const [definitions, setDefinitions] = useState(initialDefinitions);
    const [chosenDefinition, setChosenDefinition] = useState('')

    // выбрана часть речи — фильтруем слова и предложения в зависимости от части речи
    useEffect(() => {
        if (chosenPartOfSpeech === "ldkjf203948") {
            setSentences(initialSentences)
            setChosenWord('sdlk23234klsdfk')
        } else {
            setWords(initialWords.filter(el => el.partOfSpeech.includes(chosenPartOfSpeech)));
            setSentences(initialSentences.filter(el => el.partOfSpeech.includes(chosenPartOfSpeech)));
            setChosenWord('sdlk23234klsdfk')
        }
        setChosenSpeed(chosenSpeed + 1)
        setWaitingTimer(waitingTimer + 1)
    }, [chosenPartOfSpeech])

    // когда выбрано слово - фильтруем дефиниции
    useEffect(() => {
        if (chosenWord !== 'sdlk23234klsdfk') {
            setDefinitions(initialDefinitions.filter(el => el.wordId === chosenWord))
            setSentences(initialSentences.filter(el => el.words.includes(chosenWord)))
        }
        setChosenSpeed(chosenSpeed + 1)
        setWaitingTimer(waitingTimer + 1)
    }, [chosenWord])

    // когда выбрана дефиниция - фильтруем предложения для дефиниции
     useEffect(() => {
         if (chosenDefinition !== '') {
             setSentences(initialSentences.filter(el => el.definition.includes(chosenDefinition)))
         }
         setChosenSpeed(chosenSpeed + 1)
         setWaitingTimer(waitingTimer + 1)
     }, [chosenDefinition])

    console.log(sentences)

    return (
        <div className="App">

            <h3> Learn new words </h3>
            <br/>
            <ChoseSpeed speedRange={speedRange} setChosenSpeed={setChosenSpeed}/>
            {/*<CheckBox label={"in progress words"} />*/}
            <ChooseOption options={partsOfSpeech} setOption={setChosenPartOfSpeech}/>
            {chosenPartOfSpeech !== "ldkjf203948" && <ChooseNextOption
                list={words}
                onSelect={setChosenWord}
                lable={"Words"}
            />}
            <br/>
            {chosenPartOfSpeech !== "ldkjf203948" && chosenWord !== 'sdlk23234klsdfk' && definitions.length > 1 && <ChooseNextOption
                list={definitions}
                onSelect={setChosenDefinition}
                lable={"Definitions"}
            />}

            <br/>
            <br/>
            <SentenceDrill
                randomIndex={randomIndex}
                openTranslation={openTranslation}
                sentences={sentences}
            />
        </div>
    );
}

export default WordsDrillWrapper;


// работа useEffect и setInterval
// https://ru.stackoverflow.com/questions/1305386/react-%D0%9E%D0%B1%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B8-setinterval-%D0%BF%D0%BE-%D0%B2%D0%BD%D0%B5%D1%88%D0%BD%D0%B5%D0%B9-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9