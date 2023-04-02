import React, {useEffect} from 'react';
import ListWrapper from "./ListWrapper";
import {getUserPhrases} from "../../redux/actions";
import {connect} from "react-redux";

const PhrasesGetToListWrapper = (props) => {

    useEffect(() => {
        props.getUserSentences();
    }, []);

    return (
        <>
            <ListWrapper title={'My phrases'} label={"PhrasesGetToListWrapper"} />
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    getUserSentences: () => dispatch(getUserPhrases())

})

export default connect(null, mapDispatchToProps)(PhrasesGetToListWrapper);