import React, {useState} from 'react';
import {initialGrammar} from "../../../serverData/InitialGrammar";
import {ListItem} from "@mui/material";

const explanation = {
    fontSize: '17px',
    fontWeight: '600',
}
const example = {
    fontSize: '17px',
    fontWeight: '400',
}
const forming = {
    fontSize: '22px',
    fontWeight: '800',
    textAlign: 'center',
}
const using = {
    fontSize: '17px',
    fontWeight: '400',
}
const list = {
  fontStyle: 'italic'
}

function GrammarTheory (props) {

    const [grammar, setGrammar] = useState(initialGrammar.filter(el => el.id === props.partOfGrammarId))

    return (
        <div style={{ margin: 20 }}>

            <h3 style={{textAlign: 'center'}}>{grammar[0].russianTitle}</h3>

                <>
                {grammar[0].theory.map(el => <>
                <p key={el.id}
                    style={
                el.styleIs === "text" ? explanation :
                    el.styleIs === "example" ? example :
                        el.styleIs === "forming" ? forming : using}>
                {el.text}</p>
                {el.list !== undefined &&
                el.list.map((elm, i) =>

                    <ListItem key={i} style={list}>{elm}{ i === el.list.length - 1 ? '.' : ';'}</ListItem>

                )
                }
                </>
            )}
                </>

        </div>
    );
};

export default GrammarTheory;