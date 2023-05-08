import React, {useEffect, useState} from 'react';
import LessonsToChoose from "./personal-block/lessons/LessonsToChoose";
import Markdown from "markdown-to-jsx";
import {connect} from "react-redux";

const MainPage = (props) => {

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
            { !props.user?.isAuth ?
            <Markdown>
                {text}
            </Markdown>
                :
                <LessonsToChoose mainPage={true} title={'Приступим к обучению'} />
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.currentUser
})


export default connect(mapStateToProps)(MainPage);