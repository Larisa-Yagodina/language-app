import {
    addUserPhrase,
    changeUserPhraseById,
    deleteUserPhraseById,
    fetchUserPhrases
} from "../auth-login-logout/services/UserService";


export function getUserPhrases() {
    return async (dispatch) => {
        try {
            const response = await fetchUserPhrases();
            //const response = await props.fetchUsers();
            dispatch({
                type: 'GET_USER_SENTENCES',
                payload: response.data,
            })
        } catch (e) {
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Phrase hasn't been fetched", alertColour: "error"},
            })
        }
    }
}

export function addUserPhraseWithCheckAuth(word) {
    return async (dispatch) => {
        try {
            const response = await addUserPhrase(word)
            dispatch(
                getUserPhrases()
            );
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Phrase has been added successfully", alertColour: "success"},
            })
        } catch (err) {
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Phrase hasn't been added. Probably need to authorize", alertColour: "error"},
            })
        }
    }
}

export function changeUserPhrase(id, phrase) {
    return async (dispatch) => {
        try {
            const response = await changeUserPhraseById(id, phrase)
            dispatch(
                getUserPhrases()
            );
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Phrase has been changed successfully", alertColour: 'success'},
            })
        } catch (err) {
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Phrase hasn't been changed", alertColour: 'error'},
            })
        }
    }
}


export function deleteUserPhrase(id) {
    return async (dispatch) => {
        try {
            const response = await deleteUserPhraseById(id)
            dispatch(getUserPhrases());
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Phrase has been deleted successfully", alertColour: 'success'},
            })
        } catch (err) {
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Phrase hasn't been delete", alertColour: 'error'},
            })
        }
    }
}

// export function deleteUserPhrase(id) {
//     return (dispatch) => {
//         axios.delete(`${URI}/userPhrases/${id}`)
//             .then(res => {
//                 dispatch(getUserPhrases());
//                 dispatch({
//                     type: 'OPEN_ALERT',
//                     payload: {message: "Phrase has been deleted successfully", alertColour: 'success'},
//                 })
//             })
//             .catch(err =>
//                 dispatch({
//                     type: 'OPEN_ALERT',
//                     payload: {message: "Phrase hasn't been delete", alertColour: 'error'},
//                 })
//             )
//     }
// }






