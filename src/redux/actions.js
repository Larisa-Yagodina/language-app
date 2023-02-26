import axios from 'axios'

const URI = 'https://english-app-server.vercel.app';

export function getUserWords () {
    return (dispatch) => {
        axios.get(`${URI}/userWords`)
            .then(res => {
                dispatch ({
                    type: 'GET_USER_WORDS',
                    payload: res.data,
                })
            })
            .catch(err => err)
    }
}

export function getUserSentences () {
    return (dispatch) => {
        axios.get(`${URI}/userPhrases`)
            .then(res => {
                dispatch ({
                    type: 'GET_USER_SENTENCES',
                    payload: res.data,
                })
            })
            .catch(err => err)
    }
}

export function addUserPhrase (word) {
    return (dispatch) => {
        axios.post(`${URI}/userPhrases`, word)
            .then(res => {
                dispatch(getUserSentences());
                alert("Phrase has been added successfully")
            })
            .catch(err => err)
    }
}
