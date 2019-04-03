import axios from "axios";

export default class nativeService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://192.168.1.130:3000/api/", 
            withCredentials: true
        })
    }

    sayHello = () => {
        console.log("hello")
      return this.service.get('/hello')
      .then(response => response.data)   
    }

    saveSteps = (steps) => {
        return this.service.post('/saveSteps', steps)
      .then(response => response.data) 
    }
  }