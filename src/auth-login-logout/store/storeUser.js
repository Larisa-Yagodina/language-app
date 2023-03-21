import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../IndexLogin";
// import {connect} from "react-redux";


export default class StoreUser {

    user = {};
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            const message = e.response.data.split(': ')[1].split('<br>')[0];
            alert(message)
            console.log(e)
        }
    }
    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password)
            // .then((res) => {
            //     console.log(res);
            // })
            // .catch(err => console.log(err));
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response?.data?.user)
            //redirect("/my-lessons");
            // const history = useHistory();
            // history.push('/my-lessons')
            alert('Для активации аккаунта вам на почту было отправлено письмо')
        } catch (e) {
            const message = e.response.data.split(': ')[1].split('<br>')[0];
            alert(message === 'Message failed' ? 'Этот адрес не существует' : message)
            console.log(e.response?.data?.message)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response?.data?.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false)
        }
    }

}

// const mapDispatchToProps = (dispatch) => ({
//     openAlert: (message, alertColour) => dispatch({
//                  type: 'OPEN_ALERT',
//                  payload: {message, alertColour},
//              })
// })
//export default connect(null, mapDispatchToProps)(StoreUser);