import React, {useState} from 'react';
import {ListItem} from "@mui/material";

const explanation = {
    fontSize: '18px',
    fontWeight: '600',
}
const example = {
    fontSize: '18px',
    fontWeight: '600',
}
const forming = {
    fontSize: '22px',
    fontWeight: '800',
    textAlign: 'center',
}
const using = {
    fontSize: '18px',
    fontWeight: '400',
}
const list = {
  fontStyle: 'italic'
}

function GrammarTheory (props) {

    const [theory, setTheory] = useState(props.theory)

    return (
        <div style={{ margin: 20 }}>

            <h3 style={{textAlign: 'center'}}>{theory[0].russianTitle}</h3>

                <>
                {theory[0].theory.map(el => <>
                <p key={el.id}
                    style={
                el.styleIs === "text" ? explanation :
                    el.styleIs === "example" ? example :
                        el.styleIs === "forming" ? forming : using}>
                {el.text}</p>
                {el.list !== undefined &&
                el.list.map((elm, i) =>

                    <ListItem key={i} style={list}> {elm} </ListItem>

                )
                }
                </>
            )}
                </>

        </div>
    );
};

export default GrammarTheory;