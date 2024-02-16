import React, {useEffect} from 'react';
import ListWrapper from "./ListWrapper";
import {getUserPhrases} from "../../redux/actionsUserPhrases";
import {connect} from "react-redux";

const PhrasesGetToListWrapper = (props) => {

    useEffect(() => {
        if (!props.phrases.length){
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
  phrases: state.userSentences

})

const mapDispatchToProps = (dispatch) => ({
    getUserSentences: () => dispatch(getUserPhrases())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhrasesGetToListWrapper);