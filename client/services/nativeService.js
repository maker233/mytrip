import axios from "axios";
import urlBack from "../services/urlBack"

export default class nativeService {

    constructor() {

        this.service = axios.create({
            baseURL: urlBack, 
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