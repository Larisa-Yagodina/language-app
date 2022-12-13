import React, {useEffect, useState} from 'react';
import ChooseLesson from "./personal-block/ChooseLesson";
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
            <ChooseLesson />
        </div>
    );
};

export default MainPage;