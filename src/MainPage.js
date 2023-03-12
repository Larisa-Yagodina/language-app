import React, {useEffect, useState} from 'react';
import LessonsToChoose from "./personal-block/lessons/LessonsToChoose";
import Markdown from "markdown-to-jsx";

const MainPage = () => {

    const [text, setText] = useState('')

    useEffect(( ) => {
        import(`./markdown/main_page.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setText(res))
            })
            .catch(err => console.log(err));
    })
    return (
        <div style={{textAlign: 'center', margin: '3%'}}>
            <Markdown>
                {text}
            </Markdown>
            <LessonsToChoose mainPage={true} />
        </div>
    );
};

export default MainPage;