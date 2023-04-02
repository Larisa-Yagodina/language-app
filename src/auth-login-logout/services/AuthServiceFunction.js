import $api from "../IndexLogin";


export async function login(email, password) {
    return $api.post('/user/login', {email, password})
}

export async function registration(email, password) {
    return $api.post('/user/registration', {email, password})
}

export async function logout() {
    return $api.post('/user/logout')
}

