import React, {useEffect} from 'react';
import ListWrapper from "./ListWrapper";
import {getUserSentences, getUserWords} from "../redux/actions";
import {connect} from "react-redux";

const Words = (props) => {

    useEffect(() => {
        props.getUserWords();
        props.getUserSentences();
    }, []);

    return (
        <div>
            <ListWrapper title={'My words'} label={"Words"}/>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    getUserWords: () => dispatch(getUserWords()),
    getUserSentences: () => dispatch(getUserSentences())

})

export default connect(null, mapDispatchToProps)(Words);