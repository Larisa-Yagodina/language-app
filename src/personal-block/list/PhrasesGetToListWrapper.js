import React, {useEffect} from 'react';
import ListWrapper from "./ListWrapper";
import {getUserPhrases} from "../../redux/actions";
import {connect} from "react-redux";

const PhrasesGetToListWrapper = (props) => {

    useEffect(() => {
        if (!props.phrasesLength){
            props.getUserSentences();
        }
    }, []);

    return (
        <>
            <ListWrapper title={'My phrases'} label={"PhrasesGetToListWrapper"} />
        </>
    );
};

const mapStateToProps = (state) => ({
  phrasesLength: state.userSentences.length
})

const mapDispatchToProps = (dispatch) => ({
    getUserSentences: () => dispatch(getUserPhrases())

})

export default connect(mapStateToProps, mapDispatchToProps)(PhrasesGetToListWrapper);