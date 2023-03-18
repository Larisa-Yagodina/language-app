import $api from "../IndexLogin";


export default class UserService {
     static fetchUsers(){
         return $api.get('/users')
     }
}
