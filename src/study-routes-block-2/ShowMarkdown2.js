import React, {useEffect, useState} from 'react';
import Markdown from "markdown-to-jsx";
import {Button} from "@mui/material";
import '../markdown/grammar/Styles.css'

function ShowMarkdown2 (props) {

    let fileName = props.theory[0].theory;

    const [theory, setTheory] = useState('')

    useEffect(( ) => {
        import(`/src/markdown/${props.option === 'themes' ? 'themes' : 'grammar'}/${fileName}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setTheory(res))
            })
            .catch(err => console.log(err));
    })

    return (
        <div style={{ margin: 20, lineHeight: '29px' }}>
            <Markdown>
                {theory}
            </Markdown>
            <div style={{textAlign: 'right'}}>
            <Button variant="outlined" color="info" size="large" onClick={() => props.handleChange(null, props.goNextTo)}>
                Go next
            </Button>
            </div>
        </div>
    );
}

export default ShowMarkdown2;