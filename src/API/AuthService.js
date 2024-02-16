import $api from "./IndexLogin";

export default class AuthService {
    static async login(email, password){
        return $api.post('/user/login', {email, password})
    }

    static async registration(email, password){
        return $api.post('/user/registration', {email, password})
    }

    static async logout(){
        return $api.post('/user/logout')
    }

    static async refresh(){
        return $api.get('/user/refresh', {withCredentials: true})
    }

    static async setNewPassword(email, password, oldPassword){
        return $api.post('/user/reset_password', {email, password, oldPassword}, {withCredentials: true})
    }

    static async sendEmailToSetNewPassword(email){
        return $api.post('/user/forgot_password', {email}, {withCredentials: true})
    }

    static async resetPasswordThroughEmail(id, password){
        return $api.post(`/user/reset-password/${id}`, {id, password}, {withCredentials: true})
    }

    static async activateThroughEmail(email){
        return $api.post(`/user/activation_send_mail`, {email}, {withCredentials: true})
    }
}
