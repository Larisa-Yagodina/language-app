import React, {useEffect, useState} from 'react';
import Markdown from "markdown-to-jsx";


function GrammarTheory (props) {


    let fileName = props.theory[0].theory;
    const [theory, setTheory] = useState('')


    useEffect(( ) => {
        import(`/src/markdown/grammar/${fileName}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setTheory(res))
            })
            .catch(err => console.log(err));
    })

    return (
        <div style={{ margin: 20 }}>
            <Markdown>
                {theory}
            </Markdown>
        </div>
    );
}

export default GrammarTheory;