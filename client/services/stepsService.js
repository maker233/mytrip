import axios from "axios";

export default class userService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://192.168.43.136:3000/api/", 
            withCredentials: true
        })
    }

    sayHello = () => {
      return this.service.get('/hello')
      .then(response => response.data)   
    }
  }