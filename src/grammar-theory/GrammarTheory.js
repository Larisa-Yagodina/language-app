import React, {useState} from 'react';
import {initialGrammar} from "../serverData/InitialGrammar";
import {Link} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";

const explanation = {
    fontSize: '17px',
    fontWeight: '400',
}
const example = {
    fontSize: '17px',
    fontWeight: '400',
    margin: '0 auto',
}
const forming = {
    fontSize: '22px',
    fontWeight: '800',
    textAlign: 'center',
    margin: '0 auto',
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

    console.log(props)
    console.log(grammar[0].title)



    return (
        <div style={{ margin: 20 }}>
            <MenuItem>
                <Link to={'/grammar_route'}>
                    <ListItemIcon>
                        <ArrowBackIosIcon fontSize="small"/>
                    </ListItemIcon>
                    Back to Route
                </Link>
            </MenuItem>
            <h3>{grammar[0].russianTitle}</h3>
            {grammar[0].theory.map(el => <>
                <p style={
                el.styleIs === "explanation" ? explanation :
                    el.styleIs === "example" ? example :
                        el.styleIs === "forming" ? forming : using}>
                {el.text}</p>
                {el.list !== undefined &&
                el.list.map((elm, i) => <li style={list}>{elm}{ i === el.list.length - 1 ? '.' : ';'}</li>)
                }
             </>
            )}
        </div>
    );
};

export default GrammarTheory;