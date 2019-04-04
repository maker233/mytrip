import axios from "axios";
import urlBack from "../services/urlBack"

export default class authService {

    constructor() {

        console.log("url",urlBack)

        this.service = axios.create({ 
            baseURL: urlBack,
            withCredentials: true
        })
    }

    sayHello = () => {
        console.log("hola")
      return this.service.get('/hello')
      .then(response => response.data) 
    }


    getUser = () => {
        return this.service.get('/getUser')
        .then(response => response.data)
      }

    signup = (name, username, password) => {
      console.log(username, password)
        return this.service.post('/signup', { name, username, password })
            .then(response => response.data)
            
    }

    // loggedin = () => {
    //     return this.service.get('/loggedin')
    //         .then(response => response.data)
    // }

    login = (username, password) => {
        console.log("Te has logeado")
        return this.service.post('/login', { username, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.get('/logout')
            .then(response => response.data)
    }


}
