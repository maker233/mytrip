import axios from "axios";

export default class authService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://192.168.43.136:3000/api/",
            withCredentials: true
        })
    }

    // sayHello = () => {
    //   return this.service.get('/hello')
    //   .then(response => response.data)
    // }

    getUser = () => {
        return this.service.get('/getUser')
        .then(response => response.data)
      }

    signup = (name, username, password) => {
      // console.log(email, password)
        return this.service.post('/signup', { name, username, password })
            .then(response => response.data)
            
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }

    login = (username, password) => {
        console.log(username, password)
        return this.service.post('/login', { username, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }


}
