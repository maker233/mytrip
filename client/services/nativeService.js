import axios from "axios";

export default class nativeService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://192.168.43.136:3000/api/", 
            withCredentials: true
        })
    }

    // sayHello = () => {
    //     console.log("hello")
    //   return this.service.get('/hello')
    //   .then(response => response.data)   
    // }

    saveSteps = steps => {
        console.log(steps)
        return this.service.post('/saveSteps', {steps: steps})
      .then(response => response.data) 
    }
  }