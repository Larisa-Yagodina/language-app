import axios from 'axios';

const URI = 'https://english-app-server.vercel.app';

export function getUserWords() {
    return (dispatch) => {
        axios.get(`${URI}/userWords`)
            .then(res => {
                dispatch({
                    type: 'GET_USER_WORDS',
                    payload: res.data,
                })
            })
            .catch(err => err)
    }
}

export function getUserSentences() {
    return (dispatch) => {
        axios.get(`${URI}/userPhrases`)
            .then(res => {
                dispatch({
                    type: 'GET_USER_SENTENCES',
                    payload: res.data,
                })
            })
            .catch(err => err)
    }
}

export function addUserPhrase(word) {
    return (dispatch) => {
        axios.post(`${URI}/userPhrases`, word)
            .then(res => {
                dispatch(
                    getUserSentences()
                );
                dispatch({
                    type: 'OPEN_ALERT',
                    payload: {message: "Phrase has been added successfully", alertColour: "success"},
                })
                console.log("OK")
            })
            .catch(err => {
                    console.log("ERROR")
                    dispatch({
                        type: 'OPEN_ALERT',
                        payload: {message: "Phrase hasn't been changed", alertColour: "error"},
                    })
                }
            )
    }
}

export function changeUserPhrase(id, changes) {
    return (dispatch) => {
        axios.patch(`${URI}/userPhrases/${id}`, changes)
            .then(res => {
                dispatch(getUserSentences());
                dispatch({
                    type: 'OPEN_ALERT',
                    payload: {message: "Phrase has been changed successfully", alertColour: 'success'},
                })
            })
            .catch(err =>
                dispatch({
                    type: 'OPEN_ALERT',
                    payload: {message: "Phrase hasn't been changed", alertColour: 'error'},
                })
            )
    }
}


export function deleteUserPhrase(id) {
    return (dispatch) => {
        axios.delete(`${URI}/userPhrases/${id}`)
            .then(res => {
                dispatch(getUserSentences());
                dispatch({
                    type: 'OPEN_ALERT',
                    payload: {message: "Phrase has been deleted successfully", alertColour: 'success'},
                })
            })
            .catch(err =>
                dispatch({
                    type: 'OPEN_ALERT',
                    payload: {message: "Phrase hasn't been delete", alertColour: 'error'},
                })
            )
    }
}

