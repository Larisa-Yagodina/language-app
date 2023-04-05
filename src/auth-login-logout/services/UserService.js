import $api from "../IndexLogin";


export async function fetchUserPhrases() {

    return $api.get('/userPhrases')
}

export async function addUserPhrase(phrase) {
    return $api.post('/userPhrases', phrase)

}
