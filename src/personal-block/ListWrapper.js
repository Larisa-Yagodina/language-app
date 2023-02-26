import * as React from 'react';
import {useEffect, useState} from "react";
import ItemsList from "./ItemsList";
import {connect} from "react-redux";
import {getUserSentences, getUserWords} from "../redux/actions";

function ListWrapper({mainUrl, title, label, userWords, userSentences, getAllUserWords, getAllUserSentences}) {

    useEffect(() => {
        getAllUserSentences();
    }, []);

    const [initData, setInitData] = useState(userSentences.map(el => ({...el, isOpen: false})).reverse());
    const [phrases, setPhrases] = useState(initData);

    const handleToggle = (id) => () => {
        const newPhrases = phrases.map(el => el._id === id ? {...el, isStudied: !el.isStudied} : el);
        setPhrases(newPhrases);
        setInitData(newPhrases)
    };

    const openNotes = (id) => {
        const newPhrases = phrases.map(el => el._id === id ? {...el, isOpen: !el.isOpen} : el)
        setPhrases(newPhrases)
    }

    const [openAll, setOpenAll] = React.useState(true);

    const handleChange = (event) => {
        setOpenAll(event.target.checked);
        const newPhrases = event.target.checked ? initData : initData.filter(el => el.isStudied === false);
        setPhrases(newPhrases);
    };

    return (
        <ItemsList
            mainUrl={mainUrl}
            title={title}
            openAll={openAll}
            handleChange={handleChange}
            phrases={phrases.length ? phrases : userSentences}
            handleToggle={handleToggle}
            openNotes={openNotes}
        />
    );
}

const mapStateToProps = (state) => ({
    userWords: state.userWords,
    userSentences: state.userSentences
})

const mapDispatchToProps = (dispatch) => ({
    getAllUserSentences: () => dispatch(getUserSentences())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListWrapper);