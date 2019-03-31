import axios from "axios";

export default class authService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://192.168.1.130:3000/api/",
            withCredentials: true
        })
    }

    sayHello = () => {
      return this.service.get('/hello')
      .then(response => response.data)
    }

    signup = (name, email, password) => {
      // console.log(email, password)
        return this.service.post('/signup', { name, email, password })
            .then(response => response.data)
            
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }

    login = (email, password) => {
        return this.service.post('/login', { email, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }


}
