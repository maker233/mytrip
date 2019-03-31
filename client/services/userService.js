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

    updateUser = (email, password, name, bio, photo) => {
      console.log(email, password, name, bio, photo)
        return this.service.post('/profile/:id', {email, password, name, bio, photo})
            .then(response => response.data)
            
    }

    deleteUser = () => {
        return this.service.get('/delete/:id')
            .then(response => response.data)
    }

}
