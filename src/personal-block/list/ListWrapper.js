import * as React from 'react';
import {useEffect, useState} from "react";
import ItemsList from "./ItemsList";
import {connect} from "react-redux";
import {changeUserPhrase, } from "../../redux/actions";

function ListWrapper({mainUrl, title, userSentences, changeUserSentence, getAllUserSentences}) {

    const [phrases, setPhrases] = useState([]);

    const handleToggle = (id, isStudied) => () => {
        changeUserSentence(id, {isStudied})
    };

    const openNotes = (id) => {
        const newPhrases = phrases.map(el => el._id === id ? {...el, isOpen: !el.isOpen} : el)
        setPhrases(newPhrases)
    }

    const [openAll, setOpenAll] = React.useState(true);

    useEffect(() => {
        setPhrases(openAll ? userSentences : userSentences.filter(el => el.isStudied === false))
    }, [userSentences])

    const handleChange = (event) => {
        setOpenAll(event.target.checked);
        const newPhrases = event.target.checked ? userSentences : userSentences.filter(el => el.isStudied === false);
        setPhrases(newPhrases);
    };

    return (
        <ItemsList
            mainUrl={mainUrl}
            title={title}
            openAll={openAll}
            handleChange={handleChange}
            phrases={!phrases.length ? userSentences : phrases}
            handleToggle={handleToggle}
            openNotes={openNotes}
        />
    );
}

const mapStateToProps = (state) => ({
    userSentences: state.userSentences
})

const mapDispatchToProps = (dispatch) => ({
    //getAllUserSentences: () => dispatch(getUserSentences()),
    changeUserSentence: (id, changes) => dispatch(changeUserPhrase(id, changes))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListWrapper);