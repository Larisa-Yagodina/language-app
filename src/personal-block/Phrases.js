import React, {useEffect} from 'react';
import ListWrapper from "./ListWrapper";
import {getUserSentences, getUserWords} from "../redux/actions";
import {connect} from "react-redux";

const Phrases = (props) => {

    useEffect(() => {
        props.getUserWords();
        props.getUserSentences();
    }, []);

    return (
        <div>
            <ListWrapper title={'My phrases'} label={"Phrases"} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    getUserWords: () => dispatch(getUserWords()),
    getUserSentences: () => dispatch(getUserSentences())

})

export default connect(null, mapDispatchToProps)(Phrases);