import axios from "axios";

export default class authService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://192.168.20.145:3000/api/",
            withCredentials: true
        })
    }

    sayHello = () => {
      return this.service.get('/hello')
      .then(response => response.data)
    }

    signup = (email, password) => {
      console.log(email, password)
        return this.service.post('/signup', { email, password })
            .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }

    login = (username, password) => {
        return this.service.post('/login', { username, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }


}
