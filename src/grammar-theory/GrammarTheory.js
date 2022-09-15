import React, {useState} from 'react';
import {initialGrammar} from "../serverData/InitialGrammar";

function GrammarTheory (props) {

    const [grammar, setGrammar] = useState(initialGrammar.filter(el => el.id === props.partOfGrammarId))

    console.log(props)
    console.log(grammar[0].title)

    const text = grammar[0].theory;

    return (
        <div>
            <h3>{grammar[0].russianTitle}</h3>
            {text}
        </div>
    );
};

export default GrammarTheory;