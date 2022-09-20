import '../../App.css';
import React, {useEffect, useState} from "react";
import ChoseSpeed from "../../searchAndFilter/ChoseSpeed";
import {initialSentences} from "../../serverData/InitialSentences";
import SentenceDrill from "../sentence-drill/SentenceDrill";
import {initialGrammar} from "../../serverData/InitialGrammar";
import {initialThemes} from "../../serverData/InitialThemes";
import ChooseOption from "../../searchAndFilter/ChooseOption";
import ChooseNextOption from "../../searchAndFilter/ChooseNextOption";

function GrammarThemesDrillWrapper() {

    const [chosenSpeed, setChosenSpeed] = useState(5000);
    const [speedRange, setSpeedRange] = useState([
            {value: 4000, name: "very high"},
            {value: 6000, name: "high"},
            {value: 8000, name: "normal"},
            {value: 10000, name: "slow"},
            {value: 12000, name: "very slow"}
        ]
    );
    const [options, setOptions] = useState([
        {id: "slkd203984", title: "Grammar"},
        {id: 'sldkjf394823', title: "Themes"},
    ]);

    const [option, setOption] = useState('')

    const [chosenGrammar, setChosenGrammar] = useState("all grammar")
    const [grammar, setGrammar] = useState(initialGrammar);

    const [chosenTheme, setChosenTheme] = useState("all themes");
    const [themes, setThemes] = useState(initialThemes);

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

    let random;

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

    // выбор опции
    useEffect(() => {
        if (option === "slkd203984") {
            setSentences(initialSentences.filter(el => el.grammar.length > 0));
        } else if (option === 'sldkjf394823') {
            setSentences(initialSentences.filter(el => el.themes.length > 0));
        }
    }, [option])

    console.log("option", option)

    // выбор грамматики
    useEffect(() => {
        if (chosenGrammar === "all grammar") {
            setSentences(initialSentences);
        } else {
            setSentences(initialSentences.filter(el => el.grammar.includes(chosenGrammar)));
        }
        setChosenSpeed(chosenSpeed + 2)
        setWaitingTimer(waitingTimer + 1)
    }, [chosenGrammar])

    // выбор темы
    useEffect(() => {
        if (chosenTheme === "all themes") {
            setSentences(initialSentences);
        } else {
            setSentences(initialSentences.filter(el => el.themes.includes(chosenTheme)));
        }
        setChosenSpeed(chosenSpeed + 2)
        setWaitingTimer(waitingTimer + 1)
    }, [chosenTheme])

    console.log(sentences.length)

    return (
        <div className="App">

            <h3> Learn to speak fluently </h3>
            <br/>
            <ChoseSpeed choosenSpeed={chosenSpeed} speedRange={speedRange} setChosenSpeed={setChosenSpeed}/>
            <ChooseOption setOption={setOption} options={options}/>
            {option === "slkd203984" && <ChooseNextOption
                list={grammar}
                onSelect={setChosenGrammar}
                lable={"Grammar"}
            />}
            {option === "sldkjf394823" && <ChooseNextOption
                list={themes}
                onSelect={setChosenTheme}
                lable={"Themes"}

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

export default GrammarThemesDrillWrapper;


// работа useEffect и setInterval
// https://ru.stackoverflow.com/questions/1305386/react-%D0%9E%D0%B1%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B8-setinterval-%D0%BF%D0%BE-%D0%B2%D0%BD%D0%B5%D1%88%D0%BD%D0%B5%D0%B9-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9