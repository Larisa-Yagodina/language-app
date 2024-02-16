import $api from "./IndexLogin";


export async function fetchUserPhrases() {

    return $api.get('/userPhrases')
}

export async function addUserPhrase(phrase) {
    return $api.post('/userPhrases', phrase)

}

export async function changeUserPhraseById(id, phrase) {
    return $api.patch(`/userPhrases/${id}`, phrase)

}

export async function deleteUserPhraseById(id) {
    return $api.delete(`/userPhrases/${id}`)

}